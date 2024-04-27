import React, { useState, useEffect } from 'react';
import axios from "axios";

import words from "../../words";
import BlogCard from "../../components/BlogCard";

export default function BlogPage(){
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.blog.title;
        getPosts();
    }, []);

    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            response.data.map((post) => {setBlog(blog => [...blog, post]); })
        });
    }
    return(
        <div id="blog-page" className="mt-nav mb-100">
            <div className="header text-align-ct">
                <div className="title large py-m">{words.terms.blog.title}</div>
            </div>
            <div className="container">
                <div className="category-wrapper mb-xl flex-row-ct">
                    <div className="bold color-gray mr-xl">カテゴリ</div>
                    <div className="list">
                        <div className="category selected">記事</div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3">
                    {blog.sort((a, b) => a.date < b.date ? 1 : -1).map((post,index) =>
                    <>
                        <BlogCard postId={post.id} key={post.id} title={post.title} cover={post.cover} description={post.description} 
                        date={post.date}/>
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}


