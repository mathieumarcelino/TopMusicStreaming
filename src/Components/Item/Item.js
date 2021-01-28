// ----- IMPORT -----
import React from 'react';
import './Item.css';

import up from '../../Assets/Icons/up.png';
import down from '../../Assets/Icons/down.png';
import same from '../../Assets/Icons/same.png';
import firstime from '../../Assets/Icons/new.png' ;

// ------------------

function imgEvolution(e){
    if (e === "+") {
        return up
    } else if(e === "-") {
        return down
    } else if(e === "=") {
        return same
    } else {
        return firstime
    }
}


const Item = ({position, evolution, track, artist, cover, plateform1, plateform2, plateform3}) => {
    return(
        <div className="item">
            <div className=" r1 subitem center">
                <span className="text-item position">{position}</span>
            </div>
            <div className=" r2 subitem center">
                <img className="icon-item" src={imgEvolution(evolution)} alt="cover"></img>
            </div>
            <div className="r3 subitem center">
                <img className="cover-item" src={cover} alt="cover"></img>
            </div>
            <div className="r4 subitem">
                <span className="text-item">{track}</span>
                <span className="text-item">by. {artist}</span>
            </div>
            <div className=" r5 subitem center">
                <span className="text-item position">{position}</span>
            </div>
            <div className=" r6 subitem center">
                <span className="text-item position">{position}</span>
            </div>
            <div className=" r7 subitem center">
                <span className="text-item position">{position}</span>
            </div>
        </div>
    )
}

export default Item;