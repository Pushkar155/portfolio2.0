import React from 'react';
import "./skills.css";

const Skills = () => {
  return (
    <div className='skills'>
        <div className="skills__h1">
             <h1>Skills</h1>
        </div>
        <div className="skills_top">
            <div className="skills_top_all">
                <h1>React Js</h1>
                {/* <h5>0.5 years</h5> */}
            </div>
            <div className="skills_top_all">
                <h1>Node Js</h1>
                {/* <h5>0.5 years</h5> */}
            </div>
            <div className="skills_top_all">
                <h1>Python</h1>
                {/* <h5>2 years</h5> */}
            </div>
        </div>
        <div className="skills_down">
            <div className="skills_down_all">
                <h1>Css</h1>
                {/* <h5>0.5 years</h5> */}
            </div>
            <div className="skills_down_all">
                <h1>Jsx</h1>
                {/* <h5>0.5 years</h5> */}
            </div>
            <div className="skills_down_all">
                <h1>Express Js</h1>
                {/* <h5>0.5 years</h5> */}
            </div>
        </div>
    </div>
  )
}

export default Skills