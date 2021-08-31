import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../Components/Image/Profile'
export default function Game(props) {
    if (props.ready){
        return (
          <div className="ready-game">
          <div className="card">
            <h1>You</h1>
            <div className="weapon shadow">
            <img src={process.env.PUBLIC_URL + '/images/weapon/' + props.playerWeapon +".png"}></img>
            </div>
            <Profile {...props.player }></Profile>
        </div>
        <div class="vs"><h1>VS.</h1>
        <Link to="/sm/results"><button className="shadow btn" onClick={props.Speengle}>Fight!</button></Link>
        </div>
        <div className="card">
            <h1>Computer</h1>
            {/* <div className="weapon shadow">
            <img src={process.env.PUBLIC_URL + '/images/weapon/' + props.computerWeapon +".png"}></img>
            </div> */}
            <Profile {...props.computer}></Profile>
       
    </div>
    </div>
        )
    } else {
        console.log("returning false")
      return (
        <div>
            NOT WORKING
        </div>
      )

    }
    
}
