import React from 'react'
import { Link } from 'react-router-dom'
export default function Game(props) {
    if (props.ready){
        return (
            <div>
                something
              {props.player.name} 
              {props.playerWeapon}
              
              {props.computer.name} 
              {props.computerWeapon}
            <Link to="/sm/results"><button onClick={props.Speengle}>Fight!</button></Link>
              
              
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
