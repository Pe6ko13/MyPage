import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://www.linkedin.com'>
                    <LinkedInIcon />
                </a>
                <a href='https://www.facebook.com/'>
                    <FacebookIcon />
                </a>
            </div>
            <p>&copy; Petar Belchev page</p>
        </div>
    );
}

export default Footer;
