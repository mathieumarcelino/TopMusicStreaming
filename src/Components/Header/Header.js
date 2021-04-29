// ----- IMPORT -----
import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
// ------------------


const Header = () => {
    return(
        <header className="header">
            <div className="container-title">
                <h1 className="title">Top Music Streaming</h1>
                <span className="subtitle">youtube x apple music x deezer</span>
            </div>
            <Menu/>
        </header>
    )
}

export default Header;