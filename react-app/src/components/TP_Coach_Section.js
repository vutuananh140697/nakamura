import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import words from '../words';
import './TopPage.css'

export default function TP_Coach_Section() {
    const [device,setDevice] = useState("pc");

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);
    function handleResize() {
        if (window.innerWidth <= 640) { setDevice("mb") } else { setDevice("pc") }
    }
    return(
        <div className='tp_coach container'>
            <div className='section-header'>
                <div className='title large color-white'>{words.terms.service.coach}</div>
                <Link className='seemore color-white' to={words.routes.user.service}>{words.button.seemore}</Link>
            </div>
            <div className='card-wrapper'>
                <Link className='coach-card flex-row-ct' to={'/service/#coach'}>
                    <div className='img-wrapper'>
                        {device === 'pc' && <img src={process.env.PUBLIC_URL + `/img/topPage/TP_Coach.png`}/>}
                        {device === 'mb' && <img src={process.env.PUBLIC_URL + `/img/topPage/TP_Coach_mb.png`}/>}
                    </div>
                    <div className='text-wrapper'>
                        <div>
                            <div className='title medium'>{words.terms.service.coach}</div>
                            <p className='intro'>
                                <div>{words.terms.service.coach_intro_1}</div>
                                <div>{words.terms.service.coach_intro_2}</div>
                            </p>
                        </div>
                        <div className='cta-wrapper' >
                            <Link to={words.routes.user.contact}>
                                <button className='primary gray'>{words.button.contact}</button>
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}