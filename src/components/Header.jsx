import React from 'react';
import headerBackground from '../assets/bg-pattern-header.svg';

const Header = () => {
    return (
        <header className="header">
            <img src={headerBackground} alt="Header Background" />
            <div className="navbar">
                <div className="left">
                    <h1>devjobs</h1>
                </div>
                <div className="right">
                    <span><img src="src\assets\icon-sun.svg" alt="sun" /></span>
                    <span><img src="src\assets\icon-moon.svg" alt="moon" /></span>
                </div>
            </div>
        </header>
    );
};

export default Header;


