import React from 'react'
import {Link, useLocation} from 'react-router-dom'


export default function Navigation() {
    const location = useLocation();
    if (location.pathname == "/"){
        return(
            <div></div>
        )
    } else {
        return (
            <div className="Navigation">
                    <ul>
                        <li><Link to="/home">home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/sm">Speengle-Meengle</Link></li>
                        <li><Link to="/morty">Morty World</Link></li>
                    </ul>
                    
                    
                    
                </div>
        )
    }
 
}
