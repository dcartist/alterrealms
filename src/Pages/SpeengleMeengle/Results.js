import React from 'react'
import {Link} from 'react-router-dom'
import Profile from '../../Components/Image/Profile'
import ProfileWeapon from "../../Components/Image/ProfileWithWeapon"
export default function Results(props) {
    // console.log(props)
    
    if (props.tied){
        return(  <div className="ready-game">
        <div className="card">
          <h1>You</h1>
          <div className="weapon shadow">
          <img src={process.env.PUBLIC_URL + '/images/weapon/' + props.playerWeapon +".png"}></img>
          </div>
          <Profile {...props.player }></Profile>
      </div>
      <div class="vs"><h1>Tied</h1>
      <Link to="/sm/results"><button className="shadow" onClick={props.Speengle}>Fight!</button></Link>
      </div>
      <div className="card">
          <h1>Computer</h1>
          <div className="weapon shadow">
          <img src={process.env.PUBLIC_URL + '/images/weapon/' + props.computerWeapon +".png"}></img>
          </div>
          <Profile {...props.computer}></Profile>
     
  </div>
  </div>)
     } 
    else if (props.results){
        console.log(props.winner)
        return (
           
<div className="ready-game">
<div className="card">
  <h1>Winner</h1>
  <div className="weapon shadow">
  <img src={process.env.PUBLIC_URL + '/images/weapon/' + props.winnerWeapon +".png"}></img>
  </div>
  <Profile {...props.winner}></Profile>
</div>
<div class="vs">
  <h2>{props.weapons[props.winnerWeapon].name}</h2>
  <h1>beats</h1>
  <h2>{props.weapons[props.loserWeapon].name}</h2>
</div>
<div className="card">
  <h1>Loser</h1>
  <div className="weapon shadow">
  <img src={process.env.PUBLIC_URL + '/images/weapon/' + props.loserWeapon +".png"}></img>
  </div>
  <Profile {...props.loser}></Profile>
</div>
</div>
        )

    } else {
        return(  <div> Broken</div>)
    }
    
}
