import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import words from '../words';

import logo from '../logo.png';

import './Header.css'
import '../App.css';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            show: true,
            scrollPos: 0
        };
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    closeMobileMenu = () => {
        this.setState({clicked: false})
    }
    componentDidMount() {
        // window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("scroll", this.closeMobileMenu);
    }
    componentWillUnmount() {
        // window.removeEventListener("scroll", this.handleScroll);
    }
    // handleScroll = () => {
    //     if (window.innerWidth <= 960) {
    //         this.setState({show:true})
    //     } else {
    //         this.setState({
    //             scrollPos: document.body.getBoundingClientRect().top,
    //             show: document.body.getBoundingClientRect().top > this.state.scrollPos
    //         })
    //     }
    // }
    render() {
        return(
            <header id='header' className={this.state.show ? "show" : "hidden"}>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <nav className={this.state.clicked ? 'header__menu active' : 'header__menu'}>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <NavLink to='/' className='nav__link logo' onClick={this.handleClick}><img src={logo}/></NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/profile'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>{words.terms.profile.title}</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/service'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>{words.terms.service.title}</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/feature'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu} >{words.terms.feature.title}</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/blog'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>{words.terms.blog.title}</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/review'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>{words.terms.review.title}</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/faq'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>{words.terms.faq.title}</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/contact' className='nav__link last' activeClassName="active" onClick={this.closeMobileMenu}>{words.terms.contact.title}</NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </header>    
        )
    }
}