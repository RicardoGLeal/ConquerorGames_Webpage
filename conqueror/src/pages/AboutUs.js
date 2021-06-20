import React from 'react'
import Footer from "../components/Footer"
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Example from "../components/animations/Example";

import "../css/aboutus.css"
import img1 from '../images/thorment/carme1.png'; // Tell webpack this JS file uses this image
import rickimg from '../images/team/rick.png'; // Tell webpack this JS file uses this image
import angelimg from '../images/team/angel.png'; // Tell webpack this JS file uses this image
import teamimg from '../images/team/team.jpeg';

import ScrollAnimation from 'react-animate-on-scroll';
import { motion, useViewportScroll, useTransform } from "framer-motion";

function aboutUs() {
    return (
        
        <div>
            <div className='aboutUs'>
                {/* <Example/> */}
                <Fade bottom cascade>
                    <div>
                    <h1 className='title'>About Us</h1>
                    <h2 className='subtitle'>Conqueror Games</h2>

                    </div>
                </Fade>
                <Zoom>
                    <p className='quote'>
                    Conqueror Games is an indie videogames group that was born with numerous wishes of four friends passionate about videogames and technology who wanted to portray their ideas into the creation of videogames.                    </p>
                </Zoom>
                <Bounce right>
                    <img className='image' src={img1} alt="Logo" />
                </Bounce>
                {/* <Flip top>
                <h1 className='title'>The Team</h1>
                </Flip> */}

                {/* fadeIn */}
                <ScrollAnimation animateIn='bounceInRight'>
                <h1 className='title'>The Team</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn='flipInY'
                animateOut='flipOutY'>
                <img className='image' src={teamimg} alt="Logo" />
                </ScrollAnimation>


                <ScrollAnimation animateIn='bounceInLeft'
                animateOut='bounceOutRight'>
                <div className='authorbox'>
                    <img className='image-team'  height={200} width='auto' src={angelimg} alt="Logo" />
                    <p className='authorText'>Lorem ipsum dolor sit amet, vallis blandit urna. Vestibulum placerat nisi non hendrerit placerat. Proin lorem dolor, interdum eget dolor in, laoreet bibendum arcu. Sed at viverra nulla, vitae volutpat turpis. Vestibulum maximus vel nunc vitae blandit. Maecenas lorem tortor, pellentesque a felis nec, porttitor eleifend velit. In rutrum magna ligula, sit amet pellentesque velit elementum a. Quisque non faucibus lacus. Vivamus efficitur mauris a nisl tincidunt pellentesque. Fusce mollis vestibulum turpis nec facilisis. Phasellus mauris turpis, condimentum non pulvinar vel, elementum id risus. Nullam in risus arcu. Donec molestie ligula leo, id facilisis ligula consequat nec. Quisque mauris est, consequat eget odio ut, lobortis efficitur magna</p>
                </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
                <div className='authorbox'>
                    <p className='authorText'>Lorem ipsum dolor sit amet, vallis blandit urna. Vestibulum placerat nisi non hendrerit placerat. Proin lorem dolor, interdum eget dolor in, laoreet bibendum arcu. Sed at viverra nulla, vitae volutpat turpis. Vestibulum maximus vel nunc vitae blandit. Maecenas lorem tortor, pellentesque a felis nec, porttitor eleifend velit. In rutrum magna ligula, sit amet pellentesque velit elementum a. Quisque non faucibus lacus. Vivamus efficitur mauris a nisl tincidunt pellentesque. Fusce mollis vestibulum turpis nec facilisis. Phasellus mauris turpis, condimentum non pulvinar vel, elementum id risus. Nullam in risus arcu. Donec molestie ligula leo, id facilisis ligula consequat nec. Quisque mauris est, consequat eget odio ut, lobortis efficitur magna</p>
                    <img className='image-team'  height={200} width='auto' src={rickimg} alt="Logo" />
                </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInLeft'
                animateOut='bounceOutRight'>
                <div className='authorbox'>
                    <img className='image-team'  height={200} width='auto' src={angelimg} alt="Logo" />
                    <p className='authorText'>Lorem ipsum dolor sit amet, vallis blandit urna. Vestibulum placerat nisi non hendrerit placerat. Proin lorem dolor, interdum eget dolor in, laoreet bibendum arcu. Sed at viverra nulla, vitae volutpat turpis. Vestibulum maximus vel nunc vitae blandit. Maecenas lorem tortor, pellentesque a felis nec, porttitor eleifend velit. In rutrum magna ligula, sit amet pellentesque velit elementum a. Quisque non faucibus lacus. Vivamus efficitur mauris a nisl tincidunt pellentesque. Fusce mollis vestibulum turpis nec facilisis. Phasellus mauris turpis, condimentum non pulvinar vel, elementum id risus. Nullam in risus arcu. Donec molestie ligula leo, id facilisis ligula consequat nec. Quisque mauris est, consequat eget odio ut, lobortis efficitur magna</p>
                </div>
                </ScrollAnimation>
                
                

                <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
                <div className='authorbox'>
                    <p className='authorText'>Lorem ipsum dolor sit amet, vallis blandit urna. Vestibulum placerat nisi non hendrerit placerat. Proin lorem dolor, interdum eget dolor in, laoreet bibendum arcu. Sed at viverra nulla, vitae volutpat turpis. Vestibulum maximus vel nunc vitae blandit. Maecenas lorem tortor, pellentesque a felis nec, porttitor eleifend velit. In rutrum magna ligula, sit amet pellentesque velit elementum a. Quisque non faucibus lacus. Vivamus efficitur mauris a nisl tincidunt pellentesque. Fusce mollis vestibulum turpis nec facilisis. Phasellus mauris turpis, condimentum non pulvinar vel, elementum id risus. Nullam in risus arcu. Donec molestie ligula leo, id facilisis ligula consequat nec. Quisque mauris est, consequat eget odio ut, lobortis efficitur magna</p>
                    <img className='image-team'  height={200} width='auto' src={rickimg} alt="Logo" />
                </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInLeft'
                animateOut='bounceOutRight'>
                <div className='authorbox'>
                    <img className='image-team'  height={200} width='auto' src={angelimg} alt="Logo" />
                    <p className='authorText'>Lorem ipsum dolor sit amet, vallis blandit urna. Vestibulum placerat nisi non hendrerit placerat. Proin lorem dolor, interdum eget dolor in, laoreet bibendum arcu. Sed at viverra nulla, vitae volutpat turpis. Vestibulum maximus vel nunc vitae blandit. Maecenas lorem tortor, pellentesque a felis nec, porttitor eleifend velit. In rutrum magna ligula, sit amet pellentesque velit elementum a. Quisque non faucibus lacus. Vivamus efficitur mauris a nisl tincidunt pellentesque. Fusce mollis vestibulum turpis nec facilisis. Phasellus mauris turpis, condimentum non pulvinar vel, elementum id risus. Nullam in risus arcu. Donec molestie ligula leo, id facilisis ligula consequat nec. Quisque mauris est, consequat eget odio ut, lobortis efficitur magna</p>
                </div>
                </ScrollAnimation>
                <Footer />
            </div>

        </div>
    )
}

export default aboutUs
