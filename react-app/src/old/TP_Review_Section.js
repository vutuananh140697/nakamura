import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import parse from 'html-react-parser'
import words from '../words';

import ReviewCard from '../components/ReviewCard';

import './TopPage.css'

export default function TP_Review_Section(props) {
    const [reviews, setReviews] = useState([])
    const [showReviewPopUp,setShowReviewPopUp] = useState(false)
    const [selectedReviewId, setSelectedReviewId] = useState()

    useEffect(() => {
        getReviews();
    }, []);
  
    function getReviews() {
        axios.get(words.api.admin.review.list).then(function(response) {
            setReviews(response.data);
        });
    }
    const toggleShowReviewPopUp = (id) => {
        setShowReviewPopUp(!showReviewPopUp)
        setSelectedReviewId(id)
    }
    return(
        <div className='tp_review top-divider-white container'>
            <div className='section-header'>
                <div className='title large color-white'>{words.terms.review.title}</div>
                <Link className='seemore color-white' to={words.routes.user.review}>{words.button.seemore}</Link>
            </div>
            <div className='body'>
                <div className='card-gallery two-col-grid'>
                    {reviews.filter(item => item.category === props.category).slice(0,2).map((review, key) =>
                        <Link onClick={() => toggleShowReviewPopUp(review.id)}>
                            <ReviewCard reviewId={review.id} name={review.name} cover={review.cover} description={review.description} message={review.message} />  
                        </Link>
                    )}
                </div>
                <div className='bottom'>
                    <Link to={words.routes.user.service}>
                        <button className='primary white'>{words.button.service}</button>
                    </Link>
                </div>
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