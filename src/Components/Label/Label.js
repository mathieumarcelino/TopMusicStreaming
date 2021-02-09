// ----- IMPORT -----
import React from 'react';
import './Label.css';

import spotify from '../../Assets/Icons/spotify.png';
import apple from '../../Assets/Icons/apple.png';
import deezer from '../../Assets/Icons/deezer.png' ;
// ------------------

const Label = () => {
    return(
        <div className="label">
            <div className="l1 sublabel  center">
                <span className="text-label">#</span>
            </div>
            <div className="l2">
            </div>
            <div className="l3 sublabel">
                <span className="text-label">Track</span>
            </div>
            <div className="l4 sublabel center">
                <img className="icon-label" src={spotify} alt="spotify icon"></img>
            </div>
            <div className="l5 sublabel center">
                <img className="icon-label" src={apple} alt="apple music icon"></img>
            </div>
            <div className="l6 sublabel center">
                <img className="icon-label" src={deezer} alt="deezer icon"></img>
            </div>
        </div>
    )
}

export default Label;