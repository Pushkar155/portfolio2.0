import React from 'react';
import './project.css';
import New from '../New';
import Projectcard from './Project__card';

const Project = () => {
  return (
    <div className='project'>
        <New/>
        <div className="project_content">
            <div className="project_content_up">
                <h1>Projects</h1>
            </div>
            <div className="project_content_down">
              <Projectcard/>
              <Projectcard/>
              <Projectcard/>
              <Projectcard/>
              <Projectcard/>
              <Projectcard/>
              <Projectcard/>
              <Projectcard/>
              <Projectcard/>
              <Projectcard/>
            </div>
        </div>
    </div>
  )
}

export default Project