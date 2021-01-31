// ----- IMPORT -----
import React from 'react';
import './Header.css';

// ------------------


const Header = () => {
    return(
        <header className="header">
            <div className="container-title">
                <h1 className="title">Le top 100 France</h1>
                <span className="subtitle">spotify x apple music x deezer</span>
            </div>
        </header>
    )
}

export default Header;