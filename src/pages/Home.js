import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h1>Hello, My nmae is Petar Belchev</h1>
                <div className='prompt'>
                    <p>A software developer...</p>
                    <a href='https://www.linkedin.com/in/petar-belchev/'>
                        <LinkedInIcon />
                    </a>
                    <a href='https://mail.google.com/mail/u'>
                        <EmailIcon />
                    </a>
                    <a href='https://github.com/Pe6ko13'>
                        <GithubIcon />
                    </a>
                </div>
            </div>
            <div className='skills'>
                <h2> Skills</h2>
                <ol className='list'>
                    <li className='item'>
                        <h3>front-end</h3>
                        <span>HTML, CSS, ReactJS</span>
                    </li>
                    <li className='item'>
                        <h3>back-end</h3>
                        <span>NodeJS, ExpressJS, MongoDB, MySQL, Python</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
