import React, { useState, useEffect } from 'react';
import { Form, NavLink } from 'react-router-dom';
import words from '../words';
import './Footer.css'
import SubscribeForm from './SubscribeForm';

export default function Footer() {
    return(
        <footer>
            {/* <form className='newsletter flex-row-ct justify-space-btw' >
                <div className='text'>
                    <img src={process.env.PUBLIC_URL + `/img/newsletter-to-your-inbox.svg`}/>
                </div>
                <div className='touroku-box'>
                    <input type="email" name="email" id="email" placeholder="メールアドレス"/>
                    <button type='submit' className='button primary yellow'>登録</button>
                </div>
            </form> */}
            <SubscribeForm/>
            <div className='policy flex-row-ct'>
                <NavLink to='/terms-of-use'>{words.terms.termsofuse.title}</NavLink>
                <NavLink to='/privacy-policy'>{words.terms.privacypolicy.title}</NavLink>
                <NavLink to='/purpose-of-use'>{words.terms.purposeofuse.title}</NavLink>
            </div>
            <div className='bottom flex-row justify-space-btw'>
                <div className='copyright'>早稲田対話式ライティング・コーチ®</div>
                <div className='sns-list'>
                    <NavLink to='https://www.facebook.com/nakamura.lesson/' target='_blank'>
                        <img src={process.env.PUBLIC_URL + `/img/icon/Facebook-light.svg`}/>
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}