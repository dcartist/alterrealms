import React from 'react'
import MortyWorld from '../../Images/mortyworld.png'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            Morty World
            <img src={MortyWorld} />
            <Link to="/morty/game"><button>Enter</button></Link>

        </div>
    )
}
