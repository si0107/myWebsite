import React, {useState, useEffect} from 'react';
import './ProjectItem.css';

{/**
Props parameters:
    0: type of coffee
    1: image of project
    2: image of how to make coffee
    3: description of project
    4: languages used [array format]
    5: github repo link
    6: github mug picture
    7: title of project
*/}

function ProjectItem(props) {
    
    const [togglePic, setTogglePic] = useState(true)

    const toggleProjPic = () => {
        setTogglePic(!togglePic)
    }

  return (
    <div className='ProjectItem'>
        <div className='ProjectItem-container'>
            <div className='coffee'>
                    <img src={props.content[0]}/>
                </div>
            <div className='project-card'>
                {/* <div className='coffee'>
                    <img src={props.content[0]}/>
                </div> */}
                <div className='project-card-content'>
                    <div className='project-picture'>
                        {togglePic ? 
                        <img id= 'projpic1' onClick= {toggleProjPic} src={props.content[1]}/> : 
                        <img id= 'HTcoffee' onClick= {toggleProjPic} src={props.content[2]}/>}
                    </div>

                    <div className='project-card-text'>
                        <div className='project-title'>{props.content[7]}</div>
                        <div className='project-description'>{props.content[3]}</div>
                        <div className='project-lang'>{props.content[4]}</div>
                    </div>
                </div>
                
                <div className='project-link'>
                    <a href= {props.content[5]} target='_blank'>
                        <img src={props.content[6]}></img>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProjectItem