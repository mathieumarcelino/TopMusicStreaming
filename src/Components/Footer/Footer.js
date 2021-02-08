// ----- IMPORT -----
import React, { useContext } from 'react';
import './Footer.css';

import moment from 'moment';
import 'moment-timezone';

import linkedin from '../../Assets/Icons/linkedin.png' ;
import github from '../../Assets/Icons/github.png' ;
import twitter from '../../Assets/Icons/twitter.png' ;
import instagram from '../../Assets/Icons/instagram.png' ;

import { AppContext } from "../../Context/AppContext";
// ------------------


const Footer = () => {

    const [context] = useContext(AppContext);

    function lastUpdate(){
        var startTime = moment.tz(moment(new Date()), 'Europe/Paris');
        var endTime = moment(context.lastUpdateDate+' '+context.lastUpdateTime);
        var duration = moment.duration(startTime.diff(endTime));
        var hours = parseInt(duration.asHours());
        var minutes = parseInt(duration.asMinutes())%60;
        if (hours === 0){
            return 'Last update : ' + minutes + ' minutes ago';
        } else if (minutes === 0){
            return 'Last update : ' + hours + ' hours ago';
        } else if (context.lastUpdateDate === null || context.lastUpdateTime === null){
            return '';
        } else {
            return 'Last update : ' + hours + ' hours and ' + minutes + ' minutes ago';
        }
    }

    return(
        <footer className="footer">
            <div className="f1 subfooter">
                <span className="text-footer">{lastUpdate()}</span>
            </div>
            <div className="f2 subfooter">
                <a className="text-footer" href="https://mathieumarcelino.fr">mathieumarcelino.fr</a>
            </div>
            <div className="f3 subfooter">
                <div className="social">
                    <a href="https://www.linkedin.com/in/mathieumarcelino/"><img className="socialicon" src={linkedin} alt="linkedin icon"></img></a>
                    <a href="https://github.com/mathieumarcelino"><img className="socialicon" src={github} alt="github icon"></img></a>
                    <a href="https://twitter.com/mathieuenreel"><img className="socialicon" src={twitter} alt="twitter icon"></img></a>
                    <a href="https://www.instagram.com/mathi3u/"><img className="socialicon" src={instagram} alt="instagram icon"></img></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;