import React from 'react';
import './Header.css'
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <div className ="header">
            <img src={logo} alt=""/>
            <h1>THE  PLACE OF YOUR DREAM</h1>
           <nav>
               <a href="/course">Courses</a>
               <a href="/review">Review</a>
               <a href="/dashdash">Dashboard</a>
           </nav>
        </div>
    );
};

export default Header;