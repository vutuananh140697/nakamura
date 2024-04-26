import React, { useState, useEffect } from 'react';
import { Form, NavLink } from 'react-router-dom';
import words from '../words';
import './Footer.css'
import SubscribeForm from './SubscribeForm';

export default function Footer() {
    const [device,setDevice] = useState("pc");

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);

    function handleResize() {
        if (window.innerWidth <= 640) { setDevice("mb") } else { setDevice("pc") }
    }
    return(
        <footer>
            <SubscribeForm/>
            {device === 'mb' && 
                <div className='sns-list'>
                    <NavLink to='https://www.facebook.com/nakamura.lesson/' target='_blank'>
                        <img src={process.env.PUBLIC_URL + `/img/icon/Facebook-light.svg`}/>
                    </NavLink>
                </div>
                }
            <div className='policy flex-row-ct'>
                <NavLink to='/terms-of-use'>{words.terms.termsofuse.title}</NavLink>
                <NavLink to='/privacy-policy'>{words.terms.privacypolicy.title}</NavLink>
                <NavLink to='/purpose-of-use'>{words.terms.purposeofuse.title}</NavLink>
            </div>
            <div className='bottom flex-row justify-space-btw'>
                <div className='copyright'>早稲田対話式ライティング・コーチ®</div>
                {device === 'pc' && 
                <div className='sns-list'>
                    <NavLink to='https://www.facebook.com/nakamura.lesson/' target='_blank'>
                        <img src={process.env.PUBLIC_URL + `/img/icon/Facebook-light.svg`}/>
                    </NavLink>
                </div>
                }
            </div>
        </footer>
    )
}