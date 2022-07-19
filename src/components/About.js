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
            <div className='About-Me-Description'>
                <div ref={screen2} className='About-container-2'>
                    <h2 className='header'>About Me!</h2>
                    <p>I graduated Hunter College with two B.A.'s in Biology and Computer Science. 
                        My switch from Pre-Med to CS sparked when I discovered I had a passion for coding.
                        Over my journey I garnered many analytical and problem solving skills which has helped me flourish in my classes.
                        As a transfer student, I have maintained a 4.0 gpa in my CS degree. I'm eager to apply these skills in a new 
                        environment that will challenge me to grow and learn.
                    </p>
                    <div className='table'>
                        <div className= 'table-column'>
                            <h2>Electives</h2>
                            <ul>
                                <li>Data Mining (Machine Learning)</li>
                                <li>iOS Development</li>
                                <li>Dart & Flutter</li>
                                <li>Game Engines</li>
                            </ul>
                        </div>
                        <div className= 'table-column'>
                            <h2>Languages</h2>
                            <ul>
                                <li>C++</li>
                                <li>Dart</li>
                                <li>Python</li>
                                <li>Swift</li>
                                <li>HTML/CSS/JS/REACT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='About-Me-Description'>
                <div ref={screen3} className='About-container-3'>
                    <h2 className='header'>Hobbies!</h2>
                    <p>I've had a passion for art since I was young. I love to channel my creativity in everything I do
                        whether it be drawing, journaling, studying or even coding! I think this is a great asset of mine
                        especially when it comes to front-end mobile, web development and game design. I have a meticulous hand driven by
                        perfectionist eyes.  
                    </p>
                    <p>My other hobbies include going to cafes, taking strolls in the park, bullet journaling and playing
                        video games! 
                    </p>
                </div>
            </div>
            <div className='About-Me-Description'>
                <div ref={screen4} className='About-container-4'>
                    <h2 className='header'>References</h2>
                    <ul className='ref-list'>
                        <a target="_blank" href="https://www.kindpng.com/imgv/iRiThJ_coffee-bean-icon-element-shiny-sign-natural-coffee/"><li>Bean Bullet Points</li></a>
                        <a target="_blank" href="https://dribbble.com/shots/11339668-Coffee-Preloader-Animation"><li>Coffee Preloader Animation</li></a>
                        <a target="_blank" href="https://www.freepik.com/premium-vector/coffee-types-illustration-concept_8724721.htm"><li>Coffee Card Header Illustrations</li></a>
                        <a target="_blank" href="https://www.webstaurantstore.com/article/397/types-of-coffee-drinks.html"><li>Hidden Coffee Card Illustrations</li></a>
                        <a target="_blank" href="https://ar.lifeisgoodontbesad.xyz/"><li>Drip Coffee Progress</li></a>
                        <a target="_blank" href="https://dribbble.com/shots/3989372-Tea-time"><li>Home Page Tea Time Animation</li></a>
                    </ul>
                </div>
            </div>
            <div className='Footer'>
                <a href="https://github.com/si0107" target="_blank"><LinkedInIcon fontSize="large" sx={{ color: red[300] }}/></a>
                <div className='coffeeload'>
                    <img id='coffeeLoading' src={coffeeLoading} />
                    <div class="github">Github</div>
                    <div class="linkedin">LinkedIn</div>
                </div>
                <a href="https://www.linkedin.com/in/sarika-islam-0914961b5/" target="_blank"><GitHubIcon fontSize="large" sx={{ color: red[300] }} /></a>
            </div>
        </div>
    );
}

export default About;