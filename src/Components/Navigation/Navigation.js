import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <ul>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/alter">Altered Realm</Link></li>
                </ul>
                
                
                
            </div>
        )
    }
}
