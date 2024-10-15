// Navbar.js
import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <header className="header">
            <a id="header-site_name" href="index.html">free patterns</a>

            <nav className="header-top_menu">
                <ul className="header-top_menu-menu">
                    <li id="header-top_menu-menu-click">
                        <a href="contact.html">CONTACT</a>
                    </li>
                    
                </ul>
            </nav>
            
        </header>
        
    );
};

export default Navbar;