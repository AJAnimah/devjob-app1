import React from 'react';
import logoUrl from "../assets/logo.svg"

const Header = () => {
    return (
        <header className="header">
            <div className="display-container width-default">
                <img className="logo" src={logoUrl} alt="Devjobs logo" />
                <div className="toggle-switch">
                    <span><img src="src\assets\icon-sun.svg" alt="sun" /></span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <span><img src="src\assets\icon-moon.svg" alt="moon" /></span>
                </div>
            </div>


        </header>
    );
};

export default Header;




