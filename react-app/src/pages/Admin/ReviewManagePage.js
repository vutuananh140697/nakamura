import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link, useNavigate} from 'react-router-dom';
import parse from 'html-react-parser'
import words from "../../words";

import './Admin.css'

export default function ReviewManagePage(){
    const [reviews, setReviews] = useState([]);
    const [selected, setSelected] = useState(words.review.category.writing)
    const [showPopUp,setShowPopUp] = useState(false);

    useEffect(() => {
        getReviews();
    }, []);
  
    function getReviews() {
        axios.get(words.api.admin.review.list).then(function(response) {
            setReviews(response.data);
        });
    }
    const deleteReview = (id) => {
        axios.delete(words.api.admin.review.delete(id)).then(function(response){
            getReviews();
        });
        alert("Successfully Deleted");
    }
    function toggleShowPopUp() {
        setShowPopUp(!showPopUp)
    }
     
    return (
        <div className="admin reviewList">
            <div className="header">
                <a href="/admin/home">{words.general.form.action.backhome}</a>
                <div className="flex-row justify-space-btw">
                    <h1>Reviews List</h1>
                    <button className="primary" onClick={() => toggleShowPopUp()}>
                        {words.general.form.action.create}
                    </button>
                </div>
            </div>
            <div className="category-group mt-base">
                <button className={selected===words.review.category.writing ? 'selected mr-base' : 'mr-base'} onClick={() => setSelected(words.review.category.writing)}>{words.review.category.writing}</button>
                <button className={selected===words.review.category.coach ? 'selected mr-base' : 'mr-base'} onClick={() => setSelected(words.review.category.coach)}>{words.review.category.coach}</button>
            </div>
            <div>
                {selected === words.review.category.writing &&
                <div className="writing pt-xl">
                    <h2 className="mb-base">{words.review.category.writing}</h2>
                    <table class="dbTable">
                        <thead>
                            <tr>
                                <th className="cover">Cover</th>
                                <th className="title-description">Title/Description</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                                {reviews.filter(item => item.category === 'writing').map((review, key) =>
                                <tr key={key}>
                                    <td className="cover">
                                        {review?.cover && <img src={words.api.admin.file.get(review.cover)}/>}
                                    </td>
                                    <td className="title-description" style={{maxWidth:"520px"}}>
                                        <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>
                                            <Link to={`/review/${review.id}`} target="_blank">
                                                {review.name}
                                            </Link>
                                        </span>
                                        <br/>
                                        {parse(review.message ??'')}
                                    </td>
                                    <td className="actions">
                                        <Link to={`review/${review.id}/edit`}>{words.general.form.action.edit}</Link>
                                        <Link onClick={() => deleteReview(review.id)} className="ml-base">{words.general.form.action.delete}</Link>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                }
                {selected === words.review.category.coach &&
                <div className="coach pt-xl">
                    <h2 className="mb-base">{words.review.category.coach}</h2>
                    <table class="dbTable">
                        <thead>
                            <tr>
                                <th className="cover">Cover</th>
                                <th className="title-description">Title/Description</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                                {reviews.filter(item => item.category === 'coach').map((review, key) =>
                                <tr key={key}>
                                    <td className="cover">
                                        {review?.cover && <img src={words.api.admin.file.get(review.cover)}/>}
                                    </td>
                                    <td className="title-description" style={{maxWidth:"520px"}}>
                                        <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>
                                            <Link to={`/blog/${review.id}`} target="_blank">
                                            {review.name}
                                            </Link>
                                        </span>
                                        <br/>
                                        {parse(review.message ??'')}
                                    </td>
                                    <td className="actions">
                                        <Link to={`review/${review.id}/edit`}>{words.general.form.action.edit}</Link>
                                        <Link onClick={() => deleteReview(review.id)} className="ml-base">{words.general.form.action.delete}</Link>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                }
            </div>
            {showPopUp &&
                <div className="overlay">
                    <div className="popup">
                        <h2>Choose category</h2>
                        <a className="close" onClick={() => setShowPopUp(!showPopUp)}>&times;</a>
                        <div className="selection mt-base">
                            <Link to={`/admin/createreview/writing`} >
                                <button className="w-100pc mt-base">{words.review.category.writing}</button>
                            </Link>
                            <Link to={`/admin/createreview/coach`} >
                                <button className="w-100pc mt-base">{words.review.category.coach}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
  );
}