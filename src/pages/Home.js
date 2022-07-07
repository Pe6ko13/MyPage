import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='aboutWrap'>
                <div className='about'>
                    <h2>Hello,</h2>
                    <h1>I am Petar Belchev</h1>
                    <div className='prompt'>
                        <p>
                            Software developer who focuses on writing clean and
                            efficient code.
                        </p>
                        <a href='https://www.linkedin.com/in/petar-belchev/'>
                            <LinkedInIcon />
                        </a>
                        <a href='https://github.com/Pe6ko13'>
                            <GithubIcon />
                        </a>
                        <a href='https://mail.google.com/mail/u'>
                            <EmailIcon />
                        </a>
                    </div>
                </div>
                <div className='aboutPhoto'>
                    <img
                        className='myPhoto'
                        src='https://avatars.githubusercontent.com/u/77295463?v=4'
                        alt='image'
                    />
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
