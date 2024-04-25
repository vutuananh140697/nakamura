import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import words from '../words';
import './TopPage.css'

export default function TP_Writer_Section() {
    return(
        <div className='tp_writer container'>
            <div className='section-header'>
                <div className='title large color-white'>{words.terms.service.writer}</div>
                <Link className='seemore color-white' to={words.routes.user.service}>{words.button.seemore}</Link>
            </div>
            <div className='card-wrapper flex-row-ct'>
                <div className='writer-card'>
                    <div className='img-wrapper'>
                        <img src={process.env.PUBLIC_URL + `/img/topPage/TP_Writer.png`}/>
                    </div>
                    <div className='text-wrapper'>
                        <div className='title medium'>{words.terms.service.writer}</div>
                        <p className='intro'>{words.terms.service.writer_intro}</p>
                    </div>
                </div>
                <div className='ghostwriter-card'>
                    <div className='img-wrapper'>
                        <img src={process.env.PUBLIC_URL + `/img/topPage/TP_GhostWriter.png`}/>
                    </div>
                    <div className='text-wrapper'>
                        <div className='title medium'>{words.terms.service.ghostWriter}</div>
                        <p className='intro'>{words.terms.service.ghostWriter_intro}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}