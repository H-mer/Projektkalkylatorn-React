import React from 'react';
import "../styles/headerfooter.css"; // Importera CSS-fil

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <a href="/" className="logo">
                    <img src="images/logoutanbakgrund.png" alt="Projektkalkylatorn Logo" />
                </a>
                <div className="dropdown">
                    <button onClick={() => showDropdown()} className="menu-toggle">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                    <div id="dropdown-meny" className="dropdown-menu">
                        <a href="/projektinformation" className="dropdown-link">Projektinformation</a>
                        <a href="/roller_timpris" className="dropdown-link">Roller/Timpris</a>
                        <a href="/utrakning" className="dropdown-link">Uträkning</a>
                    </div>
                </div>
                <nav id="main-nav">
                    <ul>
                        <li><a href="/projektinformation" className="nav-link">Projektinformation</a></li>
                        <li><a href="/roller_timpris" className="nav-link">Roller/Timpris</a></li>
                        <li><a href="/utrakning" className="nav-link">Uträkning</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;