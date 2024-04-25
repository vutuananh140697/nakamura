import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import words from '../words';

import './TopPage.css'

export default function YourStory_Section() {
    return(
        <section className='yourstory'>
            <div className='wrapper'>
            <Link to={words.routes.user.contact}>
                <button className='primary white'>{words.button.contact}</button>
            </Link>
            </div>
        </section>
    )
}