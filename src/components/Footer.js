import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedInIcon />
                <FacebookIcon />
            </div>
            <p>&copy; Petar Belchev page</p>
        </div>
    );
}

export default Footer;
