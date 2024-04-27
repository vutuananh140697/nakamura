import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import words from '../words';
import './TopPage.css'

export default function TP_Writer_Section() {
    const [device,setDevice] = useState("pc");

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);
    function handleResize() {
        if (window.innerWidth <= 640) { setDevice("mb") } else { setDevice("pc") }
    }
    return(
        <div className='tp_writer container'>
            <div className='section-header'>
                <div className='title large color-white'>{words.terms.service.writer}</div>
                <Link className='seemore color-white' to={words.routes.user.service}>{words.button.seemore}</Link>
            </div>
            <div className='card-wrapper'>
                <Link className='writer-card' to={'/service/#writer'}>
                    <div className='img-wrapper'>
                        {device === 'pc' && <img src={process.env.PUBLIC_URL + `/img/topPage/TP_Writer.png`}/>}
                        {device === 'mb' && <img src={process.env.PUBLIC_URL + `/img/topPage/TP_Writer_mb.png`}/>}
                    </div>
                    <div className='text-wrapper'>
                        <div className='title medium'>{words.terms.service.writer}</div>
                        <p className='intro'>{words.terms.service.writer_intro}</p>
                    </div>
                </Link>
                <Link className='ghostwriter-card' to={'/service/#ghostwriter'}>
                    <div className='img-wrapper'>
                        {device === 'pc' && <img src={process.env.PUBLIC_URL + `/img/topPage/TP_GhostWriter.png`}/>}
                        {device === 'mb' && <img src={process.env.PUBLIC_URL + `/img/topPage/TP_GhostWriter_mb.png`}/>}
                    </div>
                    <div className='text-wrapper'>
                        <div className='title medium'>{words.terms.service.ghostWriter}</div>
                        <p className='intro'>{words.terms.service.ghostWriter_intro}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}