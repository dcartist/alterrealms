import React from 'react'
import { Link } from 'react-router-dom'
export default function Button(props) {
    return (
        <Link to={props.path}>
            <button className="realm-btn default btn">

            {props.name}
            </button>
        </Link>
    )
}
