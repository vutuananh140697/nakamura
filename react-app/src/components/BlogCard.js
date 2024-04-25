import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import words from '../words';

import './BlogCard.css'

export default function BlogCard(props) {
    return(
        <div className='blog-card-wrapper'>
            <div className='inner-wrapper'>
                <div className='lead flex-row justify-space-btw mb-base'>
                    <div className='time'>{props.date}</div>
                    <div className='tag'>記事</div>
                </div>
                <div className='thumbnail mb-base'>
                    <NavLink to={`/blog/${props.postId}`} className="thumbnail">
                        {props?.cover && <img src={words.api.admin.file.get(props.cover)}/>}
                    </NavLink>
                </div>
                <div className='content'>
                    <NavLink to={`/blog/${props.postId}`}><div className="title medium mb-s">{props.title}</div></NavLink>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}