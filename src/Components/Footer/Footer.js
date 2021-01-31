// ----- IMPORT -----
import React from 'react';
import './Footer.css';
import moment from 'moment'

import linkedin from '../../Assets/Icons/linkedin.png' ;
import github from '../../Assets/Icons/github.png' ;
import twitter from '../../Assets/Icons/twitter.png' ;
import instagram from '../../Assets/Icons/instagram.png' ;
// ------------------


// var date = moment().utcOffset('+01:00').format('LT');
// console.log(date);

function lastUpdate(){
    var now = moment().utcOffset('+01:00').format('h:mm:ss a');
    var startTime = moment(now, "HH:mm:ss a");
    var endTime = moment("04:00:00 pm", "HH:mm:ss a");
    var duration = moment.duration(startTime.diff(endTime));
    var hours = parseInt(duration.asHours());
    var minutes = parseInt(duration.asMinutes())%60;

    return hours + ' hours and '+ minutes+' minutes ago';
}

const Footer = () => {
    return(
        <footer className="footer">
            <div className="f1 subfooter">
                <span className="text-footer">Last update : {lastUpdate()}</span>
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