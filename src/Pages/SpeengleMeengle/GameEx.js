import React from 'react'
import Profile from "../../Components/Image/Profile"
export default function GameEx() {
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
    return (
        <div className="ready-game">
              <div className="card">
                <h1>Winner</h1>
                <div className="weapon shadow">
                <img src={process.env.PUBLIC_URL + '/images/weapon/' + 1 +".png"}></img>
                </div>
                <Profile {...sample}></Profile>
            </div>
            <div class="vs">
                <h2>something</h2>
                <h1>beats</h1>
                <h2>something</h2>
            </div>
            <div className="card">
                <h1>Loser</h1>
                <div className="weapon shadow">
                <img src={process.env.PUBLIC_URL + '/images/weapon/' + 1 +".png"}></img>
                </div>
                <Profile {...sample}></Profile>
            </div>
        </div>
    )
}
