import React from 'react';
import "./project__card.css";
import image from "./spotify.png";

const Projectcard = () => {
  return (
    <div className='project_card'>
      <div className="project__card__img">
        <img src={image} alt="" />
      </div>
      <div className="project__card__name">
        <h2>Spotify Clone</h2>
        <h5>React js , Css , Jsx , Express , Node</h5>
      </div>
      <div className="project__card__button">
        <a href="https://github.com/Pushkar155/social" target='_blank' rel="noreferrer" className='but1'>VIEW CODE</a>
        <a href="https://pushkarbook.netlify.app" target='_blank' rel="noreferrer" className='but1'>DEMO</a>
      </div>
    </div>
  )
}

export default Projectcard