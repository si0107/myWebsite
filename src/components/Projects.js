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
import HTfrapp from '../images/HTfrappe.png';
import frapp from '../images/frappe.png';
import flutterweb from '../images/flutterweb.png';
import icedCoffee from '../images/icedCoffee.png';
import HTicedCoffee from '../images/HTicedCoffee.png';
import gameEngine from '../images/gameEngines.png';



function Projects() {
    return(
        <div className='Projects'>
            <div className='Projects-Nav'>
                <Navbar/>
            </div>
            <div className='Projects-container'>
                <div className='Actual-Project' id='Project1'>
                    <ProjectItem content={[espresso, capstoneML, HTespresso, 
                    'For our movie recommender I had tested two different types of ML algorithms to calculate similarities between movies: K-Means and Cosine Similarity. I had done the data collection by using the Imdb API to retrieve contents of every movie listed.', 'Python', 
                    'https://github.com/si0107/ML_Movie_Recommender/tree/master', codeMug, 'Movie Recommender']}/>
                </div>


                <div className='Actual-Project' id='Project2'>
                    <ProjectItem content={[capp, movieRec, HTcapp, 
                    'description of Capstone Swift Project', 'Swift', 
                    'https://github.com/XLG123/Movie_Recommender', coffeeAndCode, 'Movie Recommender App']}/>
                </div>


                <div className='Actual-Project' id='Project3'>
                    <ProjectItem content={[frapp, flutterweb, HTfrapp, 
                    'description of flutter website', 'Flutter, Dart', 
                    'https://github.com/si0107/ML_Movie_Recommender/tree/master', codeMug, 'Budget Tracker']}/>
                </div>

                <div className='Actual-Project' id='Project4'>
                    <ProjectItem content={[icedCoffee, gameEngine, HTicedCoffee, 
                    'description of game', 'Flutter, Dart', 
                    'https://github.com/si0107/S22_Game_Engines', coffeeAndCode, 'Game Engines']}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;