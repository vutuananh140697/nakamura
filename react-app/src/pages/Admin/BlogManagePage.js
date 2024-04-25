import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link, useNavigate} from 'react-router-dom';
import parse from 'html-react-parser'
import words from "../../words";

import './Admin.css'

export default function BlogManagePage(){
    const [posts, setPosts] = useState([]);
    const [selected, setSelected] = useState(words.post.category.blog)
    const [showPopUp,setShowPopUp] = useState(false);

    useEffect(() => {
        getPosts();
    }, []);
  
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            setPosts(response.data);
        });
    }
    const deletePost = (id) => {
        axios.delete(words.api.admin.post.delete(id)).then(function(response){
            getPosts();
        });
        alert("Successfully Deleted");
    }
    function toggleShowPopUp() {
        setShowPopUp(!showPopUp)
    }
     
    return (
        <div className="admin blogList">
            <div className="header">
                <a href="/admin/home">{words.general.form.action.backhome}</a>
                <div className="flex-row justify-space-btw">
                    <h1>Blog List</h1>
                    <button className="primary" onClick={() => toggleShowPopUp()}>
                        {words.general.form.action.create}
                    </button>
                </div>
            </div>
            {/* <div className="category-group mt-base">
                <button className={selected===words.post.category.blog ? 'selected mr-base' : 'mr-base'} onClick={() => setSelected(words.post.category.blog)}>{words.post.category.blog}</button>
                <button className={selected===words.post.category.interview ? 'selected mr-base' : 'mr-base'} onClick={() => setSelected(words.post.category.interview)}>{words.post.category.interview}</button>
                <button className={selected===words.post.category.news ? 'selected mr-base' : 'mr-base'} onClick={() => setSelected(words.post.category.news)}>{words.post.category.news}</button>
            </div> */}
            <div>
                <div className="blog pt-xl">
                    <table class="dbTable">
                        <thead>
                            <tr>
                                <th className="cover">Cover</th>
                                <th className="title-description">Title/Description</th>
                                <th className="date">Date Added</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                                {posts.map((post, key) =>
                                <tr key={key}>
                                    <td className="cover">
                                        {post?.cover && <img src={words.api.admin.file.get(post.cover)}/>}
                                    </td>
                                    <td className="title-description" style={{maxWidth:"520px"}}>
                                        <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>
                                            <Link to={`/blog/${post.id}`} target="_blank">
                                            {post.title}
                                            </Link>
                                        </span>
                                        <br/>
                                        {post.description}
                                    </td>
                                    <td className="date">{post.date}</td>
                                    <td className="actions">
                                        <Link to={`post/${post.id}/edit`}>{words.general.form.action.edit}</Link>
                                        <Link onClick={() => deletePost(post.id)} style={{marginLeft:"10px"}}>{words.general.form.action.delete}</Link>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
            {showPopUp &&
                <div className="overlay">
                    <div className="popup">
                        <h2>Choose category</h2>
                        <a className="close" onClick={() => setShowPopUp(!showPopUp)}>&times;</a>
                        <div className="selection mt-base">
                            <Link to={`/admin/createpost/Blog`} >
                                <button className="w-100pc mt-base">{words.post.category.blog}</button>
                            </Link>
                            {/* <Link to={`/admin/createpost/Interview`} >
                                <button className="w-100pc mt-base">{words.post.category.interview}</button>
                            </Link>
                            <Link to={`/admin/createpost/News`} >
                                <button className="w-100pc mt-base">{words.post.category.news}</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            }
        </div>
  );
}