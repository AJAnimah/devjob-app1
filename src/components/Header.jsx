import React from 'react';
import headerBackground from '../assets/bg-pattern-header.svg';
import logoUrl from "../assets/logo.svg"

const Header = () => {
    return (
        <header className="header">
            <img src={headerBackground} alt="Header Background" className='Header-Background' />
            <nav className="navbar width-default">
                <img className="logo" src={logoUrl} alt="Devjobs logo" />
                <div className="toggle-switch">
                    <span><img src="src\assets\icon-sun.svg" alt="sun" /></span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <span><img src="src\assets\icon-moon.svg" alt="moon" /></span>
                </div>
            </nav>


        </header>
    );
};

export default Header;




