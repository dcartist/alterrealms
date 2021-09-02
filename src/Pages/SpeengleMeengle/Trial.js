import React, {useState} from 'react'
import Profile from "../../Components/Image/Profile"

import RickandMorty from "../../Images/alterRealm.png"
import loading from "../../Images/mortyrickmissing.png"
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


    const [altering, setaltering] = useState(true)
        function trial(){
            // document.body.style.background = 'red'

            // document.body.className = document.body.className.replace("main-body","main-body1");


            if(altering){
                document.body.className = document.body.className.replace("main-body","main-body1");
                setaltering(!altering)
              } else {
          
                  document.body.className = document.body.className.replace("main-body1","main-body");
                  setaltering(!altering)
              }
           

        }
    return (
       
<div className="players-section-base">
                
                <div className="players">
                    <div className="loading">
                    <img src={loading} className="shadow-graphic"/>
                    <h1 className="shadow-graphic">Loading...</h1>
                    </div>
                
                
                {/* <button onClick={trial}> switch </button> */}
                </div>
               
            </div>
    )
}
