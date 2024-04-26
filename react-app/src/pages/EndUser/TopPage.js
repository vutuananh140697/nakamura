import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import words from "../../words";

import './TopPage.css'
import '../../App.css'

import TP_Writer_Section from "../../components/TP_Writer_Section";
import TP_Coach_Section from "../../components/TP_Coach_Section";
import TP_Review_Section from "../../components/TP_Review_Section";
import YourStory_Section from "../../components/YourStory_Section";
import TP_Blog_Section from "../../components/TP_Blog_Section";
import Feature from "../../components/Feature";
import HeroColumn from "../../components/HeroColumn";

export default function TopPage(){
    const [curSection, setCurSection] = useState('writing');
    const [showFeature, setShowFeature] = useState(false);

    const [device,setDevice] = useState("pc");
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.top.title;
        
        window.addEventListener('resize', handleResize);

        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleResize() {
        if (window.innerWidth <= 768) { setDevice("mb") } else { setDevice("pc") }
    }

    return(
        <div id="top-page" className="mt-nav">   
            <section className="hero flex-row">
                <div className="left">  
                    <HeroColumn item = 'blog'/>
                </div>
                <div className="mid">
                    <div className="title">{words.terms.top.catchcopy}</div>
                    <div className="kv-wrapper">
                        <div className="gradient"></div>
                        <div className="kvImg"></div>
                        <div className="message">
                            <div><span>{words.terms.top.message1}</span></div>
                            <div><span>{words.terms.top.message2}</span></div>
                        </div>
                        <Link to={words.routes.user.profile}>
                            <button className="primary white">{words.button.profile}</button>
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <HeroColumn item = 'review'/>
                </div>
            </section>
            <div className="divider">
                <img src={process.env.PUBLIC_URL + `/img/divider.svg`}/>
            </div>
            <section className="service">
                <div className="switcher title medium">
                    <div className={curSection === 'writing' ? "active" : ""} onClick={()=>setCurSection('writing')}>{words.terms.top.writer}</div>
                    <div className={curSection === 'coach' ? "active" : ""} onClick={()=>setCurSection('coach')}>{words.terms.top.coach}</div>
                </div>
                {curSection === 'writing' && <TP_Writer_Section/>}
                {curSection === 'coach' && <TP_Coach_Section/>}
                <TP_Review_Section category={curSection}/>
            </section>
            <YourStory_Section/>
            <section className="feature">
                <div className="img-wrapper">
                    <button className="primary white" onClick={()=>setShowFeature(true)}>{words.button.feature}</button>
                </div>
            </section>
            {showFeature && 
                <div className="feature overlay" >
                    <div className="feature popup" data-aos="slide-up">
                        <Feature/>
                    </div>
                    <a className="close" onClick={() => setShowFeature(false)}>&times;</a>
                </div>
            }
            <TP_Blog_Section/>
        </div>
        
    )
}