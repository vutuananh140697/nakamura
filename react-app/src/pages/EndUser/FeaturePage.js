import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import words from "../../words";
import Feature from "../../components/Feature";

export default function FeaturePage(){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.feature.title;
    }, [])
    return(
        <div id="feature-page" className="mt-nav text-align-ct mb-100">
            <div className="header mb-xl">
                <div className="title large py-m">{words.terms.feature.my_feature}</div>
                <p className="w-475px text-align-ct mx-auto">{words.terms.feature.message}</p>
            </div>
            <Feature/>
        </div>
    )
}


