import React from 'react'
import MortyWorld from '../../Images/mortyworld.png'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className="morty-intro">
            <h1>Morty World</h1>
            <img src={MortyWorld} />
            <Link to="/morty/game"><button>Enter</button></Link>

        </div>
    )
}
