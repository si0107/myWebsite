import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './About.css'
import teaBag from '../images/teabag-jump-in-coffee.gif'


function About() {
    return(
        <div className='About'>
            <div className='About-nav'>
                <Navbar/>
            </div>

            {/*Insert progress drops here as 
            a fixed position on screen */}

            <div className='About-container'>
                <div className='About-Summary'>
                    <div className='Progress-drops'>
                        <p>hello</p>
                    </div>
                    <div className='About-Summary-Content'>
                        <h2>Hi, I'm Sarika and I'm...</h2>
                        <h1>Brewing with <div style={{color:'maroon'}}><b>Imagination!</b></div></h1>
                    </div>
                    <div className='tea-bag-gif'>
                        <img src={teaBag} alt='tea-Bag' />
                    </div>
                </div>
            </div>
            <div className='About-container-2'>
                <div className='About-Me-Summary'>
                    <h2>About Me!</h2>
                    <p>-college experience-</p>
                    <p>-double major-</p>
                    <p>-List of languages I'm comfortabe with-</p>
                </div>
            </div>
            <div className='About-container-3'>
                <div className='About-Me-Summary'>
                    <h2>Hobbies!</h2>
                    <p>-how they help me-</p>
                    <p>-Electives-</p>
                </div>
            </div>
            <div className='About-container-4'>
                <div className='About-Me-Summary'>
                    <h2>References</h2>
                    <p>-how they help me-</p>
                    <p>-Electives-</p>
                </div>
            </div>
        </div>
    );
}

export default About;