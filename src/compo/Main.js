import React from 'react'
// import image from "./bg.png";
import "./main.css";
import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import DataArrayIcon from '@mui/icons-material/DataArray';
import image from "./toadd.png";

const Main = () => {
  return (
    <div className='main' >
      <div className="main_nav">
        <div className="main_nav_left">
            <h1>PusHkaR</h1>
        </div>
        <div className="main_nav_right">
          <a href="https://github.com/Pushkar155" target='_blank' rel="noreferrer"><GitHubIcon style={{color:"white"}} /></a>
          <a href="https://leetcode.com/pushkarcoding10/" target='_blank' rel="noreferrer"><CodeIcon style={{color:"white"}} /></a>
          <a href="https://auth.geeksforgeeks.org/user/pushkarchaubey/practice" target='_blank'rel="noreferrer" ><DataArrayIcon style={{color:"white"}} /></a>
          <h5>chaubeypushkar4@gmail.com</h5>
        </div>
      </div>
      <div className="main_body">
        <div className="main_body_left">
          <h1>Frontend devloper</h1>
          <p>Hello, I'm Pushkar Chaubey, a passionate software
             developer with a focus on both frontend and backend
              technologies. With a flair for creating engaging 
              user interfaces and seamless user experiences, 
              I specialize in frontend development. My expertise
              extends to backend development as well, allowing
              me to architect and build robust server-side solutions.
              Through my journey, I've had the opportunity to work on
              diverse projects that have honed my skills in creating
              responsive designs, optimizing performance, and 
              integrating APIs. As a driven and creative developer, 
              I'm dedicated to delivering high-quality solutions that 
              marry form and function to create meaningful digital experiences.
          </p>
        </div>
        <div className="main_body_right">
          <div className="main_body_right_img">
            <img src={image} alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Main