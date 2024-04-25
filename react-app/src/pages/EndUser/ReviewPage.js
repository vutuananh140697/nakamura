import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import parse from 'html-react-parser'

import words from "../../words";
import ReviewCard from "../../components/ReviewCard";

export default function ReviewPage(){
    const [reviews, setReviews] = useState([])
    const [category, setCategory] = useState(words.review.category.writing)
    const [showPopUp,setShowPopUp] = useState(false)
    const [selectedId, setSelectedId] = useState()

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.review.title;

        getReviews();
    }, []);
  
    function getReviews() {
        axios.get(words.api.admin.review.list).then(function(response) {
            setReviews(response.data);
        });
    }
    const toggleShowPopUp = (id) => {
        setShowPopUp(!showPopUp)
        setSelectedId(id)
    }

    return(
        <div id="review-page" className="mt-nav mb-100">
            <div className="header text-align-ct">
                <div className="title large py-m">{words.terms.review.title}</div>
            </div>
            <div className='container'>
                <div className="category-wrapper mb-xl flex-row-ct">
                    <div className="bold color-gray mr-xl">カテゴリ</div>
                    <div className="list flex-row gap-s">
                        <div className={category===words.review.category.writing ? 'category selected mr-base' : 'category mr-base'} onClick={() => setCategory(words.review.category.writing)}>{words.terms.service.writer}</div>
                        <div className={category===words.review.category.coach ? 'category selected mr-base' : 'category mr-base'} onClick={() => setCategory(words.review.category.coach)}>{words.terms.service.coach}</div>
                    </div>
                </div>
      
                <div className='two-col-grid'>
                    {reviews.filter(item => item.category === category).map((review, key) =>
                        <Link onClick={() => toggleShowPopUp(review.id)}>
                        <ReviewCard reviewId={review.id} name={review.name} cover={review.cover} description={review.description} message={review.message} 
                                    />  
                        </Link>
                    )}
                </div>
            </div>
            {showPopUp &&
                <div className="review overlay">
                    <div className="review popup">
                        <a className="close" onClick={() => setShowPopUp(!showPopUp)}>&times;</a>
                        <div className='avatar'> 
                            <img className='w-100pc round aspect-square' src={words.api.admin.file.get(reviews.find((e) => e.id === selectedId).cover)}/>
                        </div>
                        <div className="title medium text-align-ct my-base">{reviews.find((e) => e.id === selectedId).name}</div>
                        <div className="message">{parse(reviews.find((e) => e.id === selectedId).message ??'')}</div>
                    </div>
                </div>
            }
        </div>
    )
}


