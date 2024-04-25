import React from "react";
import axios from "axios";

import words from "../../words";
import BlogCard from "../../components/BlogCard";
import TP_Blog_Section from "../../components/TP_Blog_Section";

export default function BlogPage(){
    return(
        <div id="blog-page" className="mt-nav mb-100">
            <div className="header text-align-ct">
                <div className="title large py-m">{words.terms.blog.title}</div>
            </div>
            <div className="container">
                <div className="category-wrapper mb-xl flex-row-ct">
                    <div className="bold color-gray mr-xl">カテゴリ</div>
                    <div className="list">
                        <div className="tag-item">記事</div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3">
                    <TP_Blog_Section/>
                </div>
            </div>
        </div>
    )
}


