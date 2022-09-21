// ----- IMPORT -----
import React, { useContext } from 'react';
import './Footer.css';

import moment from 'moment';

import linkedin from '../../Assets/Icons/linkedin.png' ;
import github from '../../Assets/Icons/github.png' ;
import twitter from '../../Assets/Icons/twitter.png' ;
import instagram from '../../Assets/Icons/instagram.png' ;

import { AppContext } from "../../Context/AppContext";
// ------------------


const Footer = () => {

    const [context] = useContext(AppContext);

    function lastUpdate(){
        if(context.lastUpdateDate && context.lastUpdateTime){
            var startTime = moment(new Date());
            var endTime = moment(context.lastUpdateDate.split("-").join("/")+' '+context.lastUpdateTime, 'MM/DD/AAAA hh:mm');
            var duration = moment.duration(startTime.diff(endTime));
            var hours = parseInt(duration.asHours());
            var minutes = parseInt(duration.asMinutes())%60;
            if (hours === 0){
                return 'Last update : ' + minutes + ' minutes ago';
            } else if (minutes === 0){
                return 'Last update : ' + hours + ' hours ago';
            } else {
                return 'Last update : ' + hours + ' hours and ' + minutes + ' minutes ago';
            }
        }
        return '';
    }

    return(
        <footer className="footer">
            <div className="f1 subfooter">
                <span className="text-footer">{lastUpdate()}</span>
            </div>
            <div className="f2 subfooter">
                <a className="text-footer" href="https://mathieumarcelino.com">mathieumarcelino.com</a>
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