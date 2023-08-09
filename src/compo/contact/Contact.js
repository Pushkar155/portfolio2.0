import React from 'react';
import "./contact.css";
import vedios from "./contact_bg.mp4";
// npm install @mui/material @emotion/react @emotion/styled
import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import DataArrayIcon from '@mui/icons-material/DataArray';

const Contact = () => {
  return (
    <div className='contact'>
        <video  loop autoPlay muted >
        <source src={vedios} type="video/mp4"/>
        </video>
        <div className="content">
            <div className="content_up">
              <div className="content_left">
                <h1>Contact Me</h1>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
              </div>
              <div className="content_right">
                <input type="text" className='input1' placeholder='Name :'/>
                <input type="email" className='input1'  placeholder='Email :'/>
                <textarea placeholder='Message :' className='message' ></textarea>
                <button className='but'>SEND</button>
              </div>
            </div>
            <div className="content_down">
                <div className="content_down_left">
                    <h1>PusHkaR</h1>
                </div>
                <div className="content_down_right">
                    <a href="https://github.com/Pushkar155" target='_blank' rel="noreferrer"><GitHubIcon style={{color:"white"}} /></a>
                    <a href="https://leetcode.com/pushkarcoding10/" target='_blank' rel="noreferrer"><CodeIcon style={{color:"white"}} /></a>
                    <a href="https://auth.geeksforgeeks.org/user/pushkarchaubey/practice" target='_blank'rel="noreferrer" ><DataArrayIcon style={{color:"white"}} /></a>
                    <h5>chaubeypushkar4@gmail.com</h5>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Contact

