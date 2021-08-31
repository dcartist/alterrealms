import React from 'react'
import { Link } from 'react-router-dom'
export default function Button(props) {
    return (
        <Link to={props.path}>
            <button className="realm-btn default">

            {props.name}
            </button>
        </Link>
    )
}
