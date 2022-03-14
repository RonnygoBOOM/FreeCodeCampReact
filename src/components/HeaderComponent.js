import React from 'react';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="logo" alt="logo" src="./logo192.png"></img>
                <ul className="nav-items">
                    <li className="nav-item">Pricing</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;