import React from 'react'
import {Link} from 'react-router-dom'
export default function Weapons(props) {
    return (
        <div className="weapon-base">
           <h1> Select Your Weapons</h1>
        <div className="weapon-choice-base">
        {[...Array(3)].map((x, i) => <div>  <Link to="/sm/game" onClick={()=>props.selectWeapon(i)} className="weapon-choice">
            <div><img src={process.env.PUBLIC_URL + '/images/weapon/' + i +".png"}></img></div>
            <div> {props.weapons[i].name}</div>
           </Link> </div>)}
        </div>
             
        </div>
    )
}
