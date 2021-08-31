import React from 'react'
import Profile from "../../Components/Image/Profile"

import RickandMorty from "../../Images/alterRealm.png"
export default function Trial() {
    const sample = 
    {
        "_id": "6129b914d6505fa419f81328",
        "id": 62,
        "name": "Canklanker Thom",
        "species": "Alien",
        "origin_name": "Gromflom Prime",
        "origin_url": "https://rickandmortyapi.com/api/location/19",
        "location_name": "unknown",
        "location_url": "",
        "type": "Gromflomite",
        "wins": 0,
        "rounds": 0,
        "image_url": "https://rickandmortyapi.com/api/character/avatar/62.jpeg",
        "losses": 0,
        "ties": 0,
        "__v": 0
        }

        function trial(){
            // document.body.style.background = 'red'

            document.body.className = document.body.className.replace("main-body","main-body1");
           

        }
    return (
       

<div className="intro-base">
                
                
<div className="realm-intro">
<button onClick={trial}>click on this</button>
<img src={RickandMorty} alt="rick and morty" className="rick-logo"/>
</div>
</div>
    )
}
