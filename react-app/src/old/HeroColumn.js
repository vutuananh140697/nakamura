import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Link } from 'react-router-dom';
import words from '../words';
import parse from 'html-react-parser'

import './TopPage.css'

export default function HeroColumn(props) {
    const [list, setList] = useState([]);
    const [reviews, setReviews] = useState([])
    const [showReviewPopUp,setShowReviewPopUp] = useState(false)
    const [selectedReviewId, setSelectedReviewId] = useState()

    useEffect(() => {
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
    const toggleShowReviewPopUp = (id) => {
        setShowReviewPopUp(!showReviewPopUp)
        setSelectedReviewId(id)
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
                                <Link className="item-title" to={`/blog/${post.id}`}>{post.title}</Link>
                            </div>
                        }
                        {props.item === 'review' && 
                            <div className="list-item">
                                <Link className="item-title" onClick={() => toggleShowReviewPopUp(post.id)}>{post.name}</Link>
                                <p className="description">{post.description}</p>
                            </div>
                        }
                        </>
                    )}
            </div>
            {showReviewPopUp &&
                <div className="review overlay">
                    <div className="review popup">
                        <a className="close" onClick={() => setShowReviewPopUp(!showReviewPopUp)}>&times;</a>
                        <div className='avatar'> 
                            <img className='w-100pc round aspect-square' src={words.api.admin.file.get(reviews.find((e) => e.id === selectedReviewId).cover)}/>
                        </div>
                        <div className="title medium text-align-ct my-base">{reviews.find((e) => e.id === selectedReviewId).name}</div>
                        <div className="message">{parse(reviews.find((e) => e.id === selectedReviewId).message ??'')}</div>
                    </div>
                </div>
            }
        </div>
    )
}