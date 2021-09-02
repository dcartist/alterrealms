import React, { Component } from 'react'

import Image from "../Images/paulaBannerman.jpeg"
export default class About extends Component {
    render() {
        return (
            <div className="about-base">
                <div className="about-info">
                    <div className="">
                        <h1>Alter Realm</h1>
                        <ul>
                    <li><span>When: </span>built during the Mintbean hackathon</li>
                    <li><span>Duration of Creation: </span>1 week</li>
                </ul>
                    
                    <div className="about-section">
                    <img src={Image} className="shadow"></img>
                    <div>
                    <h3><span>Created by: </span>Paula Bannerman</h3>
                        <ul>
               <li>
               <span>Portfolio: </span> <br></br><a href="https://www.dcartist.studio" target="_blank" rel="noreferrer" >www.dcartist.studio</a>
               </li>
               <li><span>LinkedIn: </span> <br></br><a href="https://www.linkedin.com/in/dcartist" rel="noreferrer" target="_blank">www.linkedin.com/in/dcartist</a></li>
               <li className="github"><span>Github: </span> <br></br><a href="https://github.com/dcartist" rel="noreferrer" target="_blank">www.github.com/dcartist</a></li>
               <li><span>Github Repo: </span><br></br><br></br> Frontend: <br></br><a href="https://github.com/dcartist/alterrealms-api" rel="noreferrer" target="_blank">www.github.com/dcartist/alterrealms-api</a><br></br><br></br>Backend:<br></br> <a href="https://github.com/dcartist/alterrealms-api" rel="noreferrer" target="_blank">www.github.com/dcartist/alterrealms-api</a></li>
           </ul></div>
                    </div>
          
                    </div>
                
                
          

           
           <div className="about-infotech">
           <div className="about-technology">
           <h2><span>Technologies Used:</span></h2>
           <ul>
               <li>ReactJS Framework<br></br>(hooks and classes)</li>
               <li>Javascript</li>
               <li>Axios</li>
               <li>Express</li>
               <li>Mongo DB</li>
               <li>Rick and Morty API</li>
           </ul>
           </div>
            <div className="about-technology"> <h2><span>Reasoning:</span></h2><p>As a boot camp graduate from General Assembly DC Chapter (Sep. 2019) and a mentor to other boot camp students. I desired to build this game out for a while now. Also, I enjoy building apps.  </p>
            <h2><span>Future Plan:</span></h2><p>To have autocompletion on searching characters and moving images so they load correctly, a leader board and also a space ship game with canvas. A </p>
            </div>
            
           </div>
           
           
           
           
           
                </div>
            </div>
        )
    }
}
