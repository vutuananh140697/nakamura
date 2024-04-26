import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Link } from 'react-router-dom';
import words from '../words';

import './TopPage.css'

export default function HeroColumn(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log(props.item)
        if (props.item==='blog') getPosts();
        else getReviews() 
    }, []);

    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            setList(response.data);
            console.log(response.data)
        });
    }
    function getReviews() {
        axios.get(words.api.admin.review.list).then(function(response) {
            setList(response.data);
        });
    }
    return(
        <div className='hero-column'>
            {props.item === 'blog' &&  <div className="title medium">{words.terms.blog.title}</div>}
            {props.item === 'review' &&  <div className="title medium">{words.terms.review.title}</div>}

            <div className="divider"></div>
            <div className="list">
                    {list.sort((a, b) => a.date < b.date ? 1 : -1).slice(0,5).map((post,index) =>
                        <>
                        {props.item === 'blog' && 
                            <div className="list-item">
                                <div className="date">{post.date}</div>
                                <Link className="item-title">{post.title}</Link>
                            </div>
                        }
                        {props.item === 'review' && 
                            <div className="list-item">
                                <Link className="item-title">{post.name}</Link>
                                <p className="description">{post.description}</p>
                            </div>
                        }
                        </>
                    )}
            </div>
        </div>
    )
}