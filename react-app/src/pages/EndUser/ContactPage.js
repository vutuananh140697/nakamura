import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';

import words from "../../words";
import ContactForm from "../../components/ContactForm";

import './ContactPage.css'

export default function ContactPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.contact.title;
    }, [])

    return(
        <div id="contact-page" className="mt-nav mb-100 two-col-grid">
            <div className="profile-wrapper">
                <div className="img-wrapper">
                    <img src={process.env.PUBLIC_URL + `/img/contact-img.jpg`}/>
                </div>
                <div className="text-wrapper">
                    <div>
                        <div className="title medium mb-s">{words.terms.profile.name}</div>
                        <div className="job">{words.terms.profile.job}</div>
                    </div>
                    <p>{words.terms.profile.bio}</p>
                </div>
                <div className="sns-wrapper flex-row-ct justify-space-btw">
                    <div className="bold">{words.terms.contact.follow}</div>
                    <NavLink to='https://www.facebook.com/nakamura.lesson/' target='_blank'>
                        <img src={process.env.PUBLIC_URL + `/img/icon/Facebook-dark.svg`}/>
                    </NavLink>
                </div>
            </div>
            <div className="contact-wrapper">
                <div className="header">
                    <div className="title large py-m">{words.terms.contact.title}</div>
                    <p>
                        <span>{words.terms.contact.intro_1}</span><br/>
                        <span className="bold">{words.terms.contact.email}</span>
                        <span>{words.terms.contact.intro_2}</span>
                    </p>
                </div>
                <ContactForm/>
            </div>
        </div>
    )
}


