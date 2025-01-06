import React from "react";
import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <header>
            <div className="header-inner">
                <div className="container">
                    <div id="logo">
                        <a href="/portfolio">Park TaeEun</a>
                    </div>
                    <nav>
                        <a href="#about">About Me</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navigation;