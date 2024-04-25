import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser'
import words from '../words';

import './ReviewCard.css'

const ReviewCard = ({name, cover, description, toggleShowPopUp}) => {
    return(
        <div className='review-card-wrapper flex-row-ct'>
            <div className='avatar'>
                <img className='w-100pc round aspect-square' src={words.api.admin.file.get(cover)}/>
            </div>
            <div className='content'>
                <div className='title medium mb-s'>{name}</div>
                <div className='description mb-s'><p>{description}</p></div>
                <div className='text-align-right'>
                    <a className='seemore color-gray' onClick={toggleShowPopUp}>
                        {words.button.seemore}
                    </a>
                </div>
            </div>
        </div>
    ) 
}
export default ReviewCard 
