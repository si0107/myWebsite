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
                    'Used the TMDB API to create a movie dataset. Used this dataset to train a content-based machine learning model to recommend movies based on a list of liked movies. Compared and tested K-Means and Cosine Similarity based models using the Principal Component Analysis, Elbow Method and Silhouette Method. The final model was then hosted on Heroku.', 'Python', 
                    'https://github.com/si0107/ML_Movie_Recommender/tree/master', codeMug, 'Movie Recommender']}/>
                </div>


                <div className='Actual-Project' id='Project2'>
                    <ProjectItem content={[capp, movieRec, HTcapp, 
                    'Created the Recommendation screen that displays the contents of all recommended movies and allow users to add them to their watchlists. Recommendations are retrieved from my Movie Recommender ML Model using a RestAPI', 'Swift', 
                    'https://github.com/XLG123/Movie_Recommender', coffeeAndCode, 'Moovie Milkers']}/>
                </div>


                <div className='Actual-Project' id='Project3'>
                    <ProjectItem content={[frapp, flutterweb, HTfrapp, 
                    'Worked with a team to develop an app that utilizes the Flutter Calendar widget to create and display events. Events are saved to and retrieved from firebase. Used firebase authentication to authenticate emails and google accounts used to create accounts for the app', 'Flutter, Dart', 
                    'https://github.com/si0107/EventTracker', codeMug, 'Event Tracker']}/>
                </div>

                <div className='Actual-Project' id='Project4'>
                    <ProjectItem content={[icedCoffee, gameEngine, HTicedCoffee, 
                    'Built a game engine alongside my class using the glfw library to create a graphical window and stb library to use create, shade and render sprites. Created our own classes to utilize the libraries and practice information hiding.', 'Flutter, Dart', 
                    'https://github.com/si0107/S22_Game_Engines', coffeeAndCode, 'Coin Collector']}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;