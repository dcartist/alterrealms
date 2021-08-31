import React from 'react'
import {FaUserAlt, FaRobot} from "react-icons/fa"
import {RiAliensFill} from "react-icons/ri"
import {GiAnimalSkull} from "react-icons/gi"
import {MdPets} from "react-icons/md"

export default function Species(props) {
    if(props.name.includes("Hum")){
        return(
            <FaUserAlt></FaUserAlt>
            )
    } 
    else if(props.name.includes("Robot")){
        return(
            <FaRobot></FaRobot>
            )
    }
    else if(props.name.includes("Alien")){
        return(
           <RiAliensFill></RiAliensFill>
            )
    }
    else if(props.name.includes("Animal")){
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
