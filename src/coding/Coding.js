import React from 'react'
import "./coding.css";

const Coding = () => {
  return (
    <div className='coding'>
        <div className="coding_nav">
            <h1>Coding</h1>
        </div>
        <div className="coding_body">
            <div className="coding_body_card">
                <div className="coding_body_card_img">
                    <img src="https://www.linkpicture.com/q/achiv1.png" alt="" />
                </div>
                <h2>Leetcode </h2>
                <div className="coding_body_card_button">
                    <a href="https://leetcode.com/pushkarcoding10/"  target="__blank"  rel="noopener" className='but2'>Rank</a>
                </div>
            </div>
            <div className="coding_body_card">
                <div className="coding_body_card_img">
                        <img src="https://www.linkpicture.com/q/achiv_2.png" alt="" />
                    </div>
                    <h2>Geeks For Geeks</h2>
                    <div className="coding_body_card_button">
                        <a href="https://auth.geeksforgeeks.org/user/pushkarchaubey/practice"  target="__blank"  rel="noopener" className='but2'>Rank</a>
                    </div>
            </div>

        </div>
        
    </div>
  )
}

export default Coding