import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import './About.css'
import teaBag from '../images/teabag-jump-in-coffee.gif'
import drip1 from '../images/dripCoffee4.png'
import drip2 from '../images/dripCoffee3.png'
import drip3 from '../images/dripCoffee2.png'
import drip4 from '../images/dripCoffee1.png'
import coffeeLoading from '../images/coffeeLoading.gif'
import { useInView } from 'react-intersection-observer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { red } from '@mui/material/colors';

function About() {

    const { ref: screen4, inView: screen4Visible } = useInView();
    const { ref: screen3, inView: screen3Visible } = useInView();
    const { ref: screen2, inView: screen2Visible } = useInView();

    console.log('screen 4', screen4Visible)
    console.log('screen 3', screen3Visible)
    console.log('screen 2', screen2Visible)

    return(
        <div className='About'>
            <div className='About-nav'>
                <Navbar/>
            </div>
            <div className='Progress'>
                { (screen4Visible) && (!screen3Visible) && (
                    <img id='img4' src={drip4} />
                )}
                { (screen3Visible) && (!screen2Visible) && (
                    <img id='img3' src={drip3} />
                )}
                { (screen2Visible) && (
                    <img id='img2' src={drip2} />
                )}
                { (!screen2Visible) && (!screen3Visible) && (!screen4Visible) && (
                    <img id='img1' src={drip1} />
                )}
            </div>
            <div className='About-container'>
                <div className='About-Summary'>
                    <div className='Progress-drops'>
                        <img id='img' src={drip4} />
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
                <div ref={screen2} className='About-Me-Summary'>
                    <h2>About Me!</h2>
                    <p>-college experience-</p>
                    <p>-double major-</p>
                    <p>-List of languages I'm comfortabe with-</p>
                </div>
            </div>
            <div className='About-container-3'>
                <div ref={screen3} className='About-Me-Summary'>
                    <h2>Hobbies!</h2>
                    <p>-how they help me-</p>
                    <p>-Electives-</p>
                </div>
            </div>
            <div className='About-container-4'>
                <div ref={screen4} className='About-Me-Summary'>
                    <h2>References</h2>
                    <ul className='ref-list'>
                        <a href="https://www.nicepng.com/maxp/u2e6t4q8i1r5q8a9/"><li>Bean Bullet Points</li></a>
                        
                        
                    </ul>
                </div>
            </div>
            <div className='Footer'>
                <a href="https://github.com/si0107" target="_blank"><LinkedInIcon fontSize="large" sx={{ color: red[300] }}/></a>
                <div className='coffeeload'>
                    <img id='coffeeLoading' src={coffeeLoading} />
                    <div class="github">
                        Github
                    </div>
                    <div class="linkedin">LinkedIn</div>
                </div>
                <a href="https://www.linkedin.com/in/sarika-islam-0914961b5/" target="_blank"><GitHubIcon fontSize="large" sx={{ color: red[300] }} /></a>
            </div>
        </div>
    );
}

export default About;