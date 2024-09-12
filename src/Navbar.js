import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    Shop now
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/resources"> Resources</a>
                    </li>
                    <li>
                        <a href="/about"> About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                
                {/* gonna put stull here later */}
            </div>

        </nav>
    );
    };

export default Navbar;