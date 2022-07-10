import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ProjectItem from './ProjectItem';
import './Projects.css';
import espresso from '../images/espresso.png';
import capstoneML from '../images/capstoneML.png';
import HTespresso from '../images/croppedEspresso.png';
import codeMug from '../images/codeMug.png';


function Projects() {
    return(
        <div className='Projects'>
            

            <div className='Projects-container'>
                <div className='Project1'>
                    <ProjectItem content={[espresso, capstoneML, HTespresso, 
                    'description of Capstone ML Project', 'Python', 
                    'https://github.com/si0107/ML_Movie_Recommender/tree/master', codeMug]}/>
                </div>
                <div className='Project1'></div>
                <div className='Project1'></div>
            </div>

        </div>
    );
}

export default Projects;