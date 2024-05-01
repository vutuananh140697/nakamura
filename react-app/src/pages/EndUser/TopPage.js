import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import words from "../../words";
import parse from 'html-react-parser'

import './TopPage.css'
import '../../App.css'

import TP_Writer_Section from "../../components/TP_Writer_Section";
import TP_Coach_Section from "../../components/TP_Coach_Section";
import YourStory_Section from "../../components/YourStory_Section";
import Feature from "../../components/Feature";
import ReviewCard from '../../components/ReviewCard';
import BlogCard from '../../components/BlogCard';

export default function TopPage(){
    const [curSection, setCurSection] = useState('writing');
    const [showFeature, setShowFeature] = useState(false);
    const [blogs, setBlogs] = useState([])
    const [reviews, setReviews] = useState([])
    const [showReviewPopUp,setShowReviewPopUp] = useState(false)
    const [selectedReviewId, setSelectedReviewId] = useState()

    const [device,setDevice] = useState("pc");

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.top.title;
        
        getPosts();
        getReviews();

        window.addEventListener('resize', handleResize);
        Aos.init({duration: 2000});
    }, []);

    function handleResize() {
        if (window.innerWidth <= 1080) { setDevice("mb") } else { setDevice("pc") }
    }
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            setBlogs(response.data);
        });
    }
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
        <div id="top-page" className="mt-nav">   
            <section className="hero">
                {device === 'pc' &&
                    <div className="left hero-column">  
                        <div className="title medium">{words.terms.blog.title}</div>
                        <div className="divider"></div>
                        <div className="list">
                            {blogs.sort((a, b) => a.date < b.date ? 1 : -1).slice(0,5).map((post,index) =>
                                <>
                                <div className="list-item">
                                    <div className="date">{post.date}</div>
                                    <Link className="item-title" to={`/blog/${post.id}`}>{post.title}</Link>
                                </div>
                                </>
                            )}
                        </div>
                    </div>
                }
                <div className="mid">
                    <div className="title">{words.terms.top.catchcopy}</div>
                    <div className="kv-wrapper">
                        <div className="gradient"></div>
                        <div className="kvImg"></div>
                        <div className="message">
                            <div><span>{words.terms.top.message1}</span></div>
                            <div><span>{words.terms.top.message2}</span></div>
                        </div>
                        <Link to={words.routes.user.profile}>
                            <button className="primary white">{words.button.profile}</button>
                        </Link>
                    </div>
                </div>
                {device === 'pc' &&
                    <div className="right hero-column">
                        <div className="title medium">{words.terms.review.title}</div>
                        <div className="divider"></div>
                        <div className="list">
                            {reviews.sort((a, b) => a.date < b.date ? 1 : -1).slice(0,5).map((post,index) =>
                                <>
                                <div className="list-item">
                                    <Link className="item-title" onClick={() => toggleShowReviewPopUp(post.id)}>{post.name}</Link>
                                    <p className="description">{post.description}</p>
                                </div>
                                </>
                            )}
                        </div>
                    </div>
                }
            </section>
            <div className="divider">
                <img src={process.env.PUBLIC_URL + `/img/divider.svg`}/>
            </div>
            {showReviewPopUp &&
                <div className="review overlay">
                    <div className="review popup" data-aos="slide-up">
                        <a className="close" onClick={() => setShowReviewPopUp(!showReviewPopUp)}>&times;</a>
                        <div className='avatar'> 
                            <img className='w-100pc round aspect-square' src={words.api.admin.file.get(reviews.find((e) => e.id === selectedReviewId).cover)}/>
                        </div>
                        <div className="title medium text-align-ct my-base">{reviews.find((e) => e.id === selectedReviewId).name}</div>
                        <div className="message">{parse(reviews.find((e) => e.id === selectedReviewId).message ??'')}</div>
                    </div>
                </div>
            }
            <section className="service">
                <div className="switcher title medium">
                    <div className={curSection === 'writing' ? "active" : ""} onClick={()=>setCurSection('writing')}>{words.terms.top.writer}</div>
                    <div className={curSection === 'coach' ? "active" : ""} onClick={()=>setCurSection('coach')}>{words.terms.top.coach}</div>
                </div>
                {curSection === 'writing' && <TP_Writer_Section/>}
                {curSection === 'coach' && <TP_Coach_Section/>}
                <div className='tp_review top-divider-white container'>
                    <div className='section-header'>
                        <div className='title large color-white'>{words.terms.review.title}</div>
                        <Link className='seemore color-white' to={words.routes.user.review}>{words.button.seemore}</Link>
                    </div>
                    <div className='body'>
                        <div className='card-gallery two-col-grid'>
                            {reviews.filter(item => item.category === curSection).slice(0,2).map((review, key) =>
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
                    
                </div>
            </section>
            <YourStory_Section/>
            <section className="feature">
                <div className="img-wrapper">
                    <button className="primary white" onClick={()=>setShowFeature(true)}>{words.button.feature}</button>
                </div>
            </section>
            {showFeature && 
                <div className="feature overlay" >
                    <div className="feature popup" data-aos="slide-up">
                        <Feature/>
                    </div>
                    <a className="close" onClick={() => setShowFeature(false)}>&times;</a>
                </div>
            }
            <div className='tp_blog top-divider-gray container'>
                <div className='section-header'>
                    <div className='title large'>{words.terms.blog.title}</div>
                    <Link className='seemore color-gray' to={words.routes.user.blog}>{words.button.seemore}</Link>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3">
                    {blogs.sort((a, b) => a.date < b.date ? 1 : -1).slice(0,3).map((post,index) =>
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