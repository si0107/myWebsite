import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ProjectItem from './ProjectItem';
import './ProjectItem.css';
import './Projects.css';
import espresso from '../images/espresso.png';
import capstoneML from '../images/capstoneML.png';
import HTespresso from '../images/croppedEspresso.png';
import codeMug from '../images/codeMug.png';
import coffeeAndCode from '../images/coffeeAndCodeMug.png';
import capp from '../images/cappucino.png';
import movieRec from '../images/movieRec.png';
import HTcapp from '../images/HTcappuccino.png';

function Projects() {
    return(
        <div className='Projects'>
            <div className='Projects-Nav'>
                <Navbar/>
            </div>
            <div className='Projects-container'>
                <div className='Actual-Project' id='Project1'>
                    <ProjectItem content={[espresso, capstoneML, HTespresso, 
                    'description of Capstone ML Project', 'Python', 
                    'https://github.com/si0107/ML_Movie_Recommender/tree/master', codeMug, 'Machine Learning: Movie Recommender']}/>
                </div>


                <div className='Actual-Project' id='Project2'>
                    <ProjectItem content={[capp, movieRec, HTcapp, 
                    'description of Capstone Swift Project', 'Swift', 
                    'https://github.com/XLG123/Movie_Recommender', coffeeAndCode, 'Movie Recommender App']}/>
                </div>


                <div className='Actual-Project' id='Project3'>
                    <ProjectItem content={[espresso, capstoneML, HTespresso, 
                    'description of Capstone ML Project', 'Python', 
                    'https://github.com/si0107/ML_Movie_Recommender/tree/master', codeMug, 'Title of Project']}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;