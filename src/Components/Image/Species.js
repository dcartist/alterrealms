import React from 'react'
import {FaUserAlt, FaRobot} from "react-icons/fa"
import {RiAliensFill} from "react-icons/ri"
import {GiAnimalSkull} from "react-icons/gi"
import {MdPets} from "react-icons/md"

export default function Species(props) {
    if(props.species.includes("Hum")){
        return(
            <FaUserAlt></FaUserAlt>
            )
    } 
    else if(props.species.includes("Robot")){
        return(
            <FaRobot></FaRobot>
            )
    }
    else if(props.species.includes("Alien")){
        return(
           <RiAliensFill></RiAliensFill>
            )
    }
    else if(props.species.includes("Animal")){
        return(
            <MdPets></MdPets>
            )
    }
    
    else {
        return(
           <GiAnimalSkull></GiAnimalSkull>
            )
    }
  
}
