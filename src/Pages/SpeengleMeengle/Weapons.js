import React from 'react'
import {Link} from 'react-router-dom'
export default function Weapons(props) {
    return (
        <div className="weapon-base">
          <div className="instructions shadow">
          <h1> Select Your Weapons</h1>
           <h3>The Conditions to win:</h3>
      <p>SpaceShip Beats Portal Ray. Portal Ray Beats Robot. Robot Beats Spaceship </p>
          </div>
          
        <div className="weapon-choice-base">
        {[...Array(3)].map((x, i) => <div className="shadow">  <Link to="/sm/game" onClick={()=>props.selectWeapon(i)} className="weapon-choice">
              <button className="realm-btn">{props.weapons[i].name}</button>
            <div><img src={process.env.PUBLIC_URL + '/images/weapon/' + i +".png"}></img></div>
            
           </Link> </div>)}
        </div>
             
        </div>
    )
}
