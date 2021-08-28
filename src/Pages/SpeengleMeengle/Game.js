import React from 'react'

export default function Game(props) {
    console.log(props)
    console.log(props.player);
    // return (
    //     <div>

    //     </div>
    //   )
    if (props.ready){
        console.log("returning true")
        return (
            <div>
                something
              {props.player.name} 
              {props.playerWeapon}
              
              {props.computer.name} 
              {props.computerWeapon}
              
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
