import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import words from '../words';
import { gsap } from "gsap";

import './TopPage.css'

export default function YourStory_Section() {
    useEffect(() => {
        const $bigBall = document.querySelector('.cursor__ball--big');
        const $smallBall = document.querySelector('.cursor__ball--small');
        const $hoverables = document.querySelectorAll('.hoverable');
        // const $area = document.body;
        const $area = document.querySelector('.yourstory')

        // Listeners
        $area.addEventListener('mousemove', onMouseMove);
        for (let i = 0; i < $hoverables.length; i++) {
            $hoverables[i].addEventListener('mouseenter', onMouseHover);
            $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
        }

        // Move the cursor
        function onMouseMove(e) {
            gsap.to($bigBall, .4, {
                x: e.pageX - 15,
                y: e.pageY - 15
            })
            gsap.to($smallBall, .1, {
                x: e.pageX - 5,
                y: e.pageY - 7
            })
        }
        
        // Hover an element
        function onMouseHover() {
            gsap.to($bigBall, .3, {scale:10})
        }
        function onMouseHoverOut() {
            gsap.to($bigBall, .3, {scale: 5})
        }
    }, [])
    return(
        <section className='yourstory'>
            <div className='wrapper'>
            <div className="cursor">
                <div className="cursor__ball cursor__ball--big ">
                    <svg height="30" width="30">
                    <circle cx="15" cy="15" r="15" stroke-width="0"></circle>
                    </svg>
                </div>
                <div className="cursor__ball cursor__ball--small">
                    <svg height="30" width="30">
                    <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
                    </svg>
                </div>
            </div>
            <Link to={words.routes.user.contact} className='hoverable'>
                <button className='primary white'>{words.button.contact}</button>
            </Link>
            </div>
        </section>
    )
}