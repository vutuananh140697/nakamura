import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import words from '../words';
import './TopPage.css'
import BlogCard from './BlogCard';


export default function TP_Blog_Section() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);
    
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            response.data.map((post) => {setBlog(blog => [...blog, post]); })
        });
    }

    return(
        <div className='tp_blog top-divider-gray container'>
           <div className='section-header'>
                <div className='title large'>{words.terms.blog.title}</div>
                <Link className='seemore color-gray' to={words.routes.user.blog}>{words.button.seemore}</Link>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3">
                {blog.sort((a, b) => a.date < b.date ? 1 : -1).slice(0,3).map((post,index) =>
                    <>
                        <BlogCard postId={post.id} key={post.id} title={post.title} cover={post.cover} description={post.description} 
                        date={post.date}/>
                    </>
                )}
            </div>
        </div>
    )
}