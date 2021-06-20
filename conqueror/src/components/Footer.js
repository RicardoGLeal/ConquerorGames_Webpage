import React from 'react'

import "../css/Footer.css";
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { Button } from './Button';
import LogoFooter from '../images/logo_No_BG.png';

function Footer() {
    return (
        <div className="footer-container">
            <div className="container">
                <section className='footer-subscription'>
                    <h3 className='footer-subscription-heading'>
                        Join the Adventure newsletter to receive our best deals</h3>
                    <h3 className='footer-subscription-text'>
                        You can unsubscribe at any time.</h3>
                    <div className='input-areas'>
                        <form>
                            <input
                                className='footer-input'
                                name='email'
                                type='email'
                                placeholder='Your Email'
                            />
                            <Button buttonStyle='btn--outline'>Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div class='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <Link to='/'><h4>Home</h4></Link>
                        </div>
                        <div class='footer-link-items'>
                        <Link to='/games'><h4>Games</h4></Link>
                        </div>
                    </div>
                        <div class='footer-link-items'>
                        <Link to='/universe'><h4>Conqueror Universe</h4></Link>
                            {/* <Link to='/'>Videogame1</Link> */} 
                        </div>
                        <div class='footer-link-items'>
                        <Link to='/contact'><h4>Contact</h4></Link>
                        </div>
                        <div class='footer-link-items'>
                        <Link to='/aboutus'><h4>About Us</h4></Link>
                        </div>
                        <div class='footer-link-items'>
                        <Link to='/art'><h4>Art</h4></Link>
                        </div> 
                </div>
                <hr color="white" />

                <section class='social-media'>
                    <div class='social-media-wrap'>
                         <div class='footer-logo'>
                        <Link to={'/'} className='social-logo'>
                                <img src={LogoFooter} alt='logo' height="70px" />
                            </Link>
                        </div>
                        <small class='website-rights'>CONQUEROR GAMES © 2021</small>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i class='fab fa-youtube' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i class='fab fa-twitter' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div> 
                </section>
            </div>
        </div>
    );
}

export default Footer;