import React from 'react'
import {Link} from 'react-router-dom'
export default function Weapons(props) {
    return (
        <div>
            Select Your Weapons

             {[...Array(3)].map((x, i) =><div>  <Link to="/sm/game"> <button>{i}</button></Link> </div>)}
        </div>
    )
}
