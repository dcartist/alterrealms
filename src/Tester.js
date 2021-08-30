import React from 'react'

export default function Tester(props) {

    let test1 = {
        "_id": "612c4c0395a4b3378fd367a6",
        "id": 50,
        "name": "Blim Blam",
        "species": "Alien",
        "origin_name": "unknown",
        "origin_url": "",
        "location_name": "Earth (Replacement Dimension)",
        "location_url": "https://rickandmortyapi.com/api/location/20",
        "type": "Korblock",
        "wins": 1,
        "rounds": 1,
        "image_url": "https://rickandmortyapi.com/api/character/avatar/50.jpeg",
        "losses": 0,
        "ties": 0,
        "__v": 0
        }
    let test2 = {
        "_id": "612c4c0395a4b3378fd367a9",
        "id": 53,
        "name": "Blue Shirt Morty",
        "species": "Human",
        "origin_name": "unknown",
        "origin_url": "",
        "location_name": "Citadel of Ricks",
        "location_url": "https://rickandmortyapi.com/api/location/3",
        "type": "",
        "wins": 0,
        "rounds": 0,
        "image_url": "https://rickandmortyapi.com/api/character/avatar/53.jpeg",
        "losses": 0,
        "ties": 0,
        "__v": 0
        }
    return (
        <div>
            <button onClick={()=>props.selectingWinner(test1, test2, 1, 0)}>
                Click this
            </button>
        </div>
    )
}
