import React from 'react'
import about from './images/about-removebg-preview.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={about} alt='about' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>At Capxindia, we are dedicated to transforming your financial aspirations into reality. Founded by Nikhil Nikat, a visionary in the financial sector, our company is committed to providing innovative and personalized financial solutions to individuals and businesses.</p>
                    <p>We believe that financial success should be within reach for everyone. Our mission is to empower you with the knowledge, tools, and expertise.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
