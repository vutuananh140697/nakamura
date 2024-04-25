import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser'
import words from "../../words";

import './BlogContentPage.css'

export default function BlogContentPage(){
    const [curPost, setCurPost] = useState({});
    const [prevPost, setPrevPost] = useState({});
    const [nextPost, setNextPost] = useState({});

    const {id} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.blog.title;
        
        getCurPost(id);
        getPosts(id);
    }, [id]);
  
    function getCurPost(id) {
        axios.get(words.api.admin.post.detail(id)).then(function(response) {
            setCurPost(response.data);
        });
    }
    function getPosts(id) {
        axios.get(words.api.admin.post.list).then(function(response) {
            for (let post of response.data) {
                    if (post.id < id) setPrevPost(post);
                    else if (post.id > id) {
                        setNextPost(post)
                        return;
                    }
            }
        });
    }

    return(
        <div id="blog-content-page" className="mt-nav">
            <div className="header text-align-left px-l py-l two-col-grid">
                <div className="title large py-m">{curPost.title}</div>
                <div className="description">
                    <div className="date">{curPost.date}</div>
                    <p>{curPost.description}</p>
                </div>
            </div>
            <div className="content px-l">
                <div className="relative aspect-video mx-auto">
                    {/* {<img className="inset-img object-cover" data-nimg="fill" sizes="100vw" decoding="async" loading="eager" src={process.env.PUBLIC_URL + `/img/blog-sample-img.png`}/>} */}
                    {<img className="inset-img object-cover" data-nimg="fill" sizes="100vw" decoding="async" loading="eager" src={words.api.admin.file.get(curPost.cover) ??''}/>}
                </div>
                <div className="container px-base mx-auto xl:px-m max-w-1024  lg:py-xl">
                    <div className="max-w-768 mx-auto pt-base">{parse(curPost.content ??'')}</div>
                    
                </div>
            </div>
            <div className="max-w-768 mx-auto mb-base">
                        <a href='/blog' >
                            <a className="back color-gray">ブログ一覧へ戻る</a>
                        </a>
                    </div>
            <div id="previous_next_post" className="max-w-768 mx-auto flex-row-ct">
                {prevPost.id !== undefined &&
                <div className="prev_post">
                    <a href={`/blog/${prevPost.id}`} title="前の記事">
                        <span class="title">{prevPost.title}</span>
                    </a>
                </div>
                }
                {nextPost.id !== undefined &&
                <div className="next_post">
                    <a href={`/blog/${nextPost.id}`} title="次の記事">
                        <span class="title">{nextPost.title}</span>
                    </a>
                </div>
                }
            </div>
        </div>
    )
}