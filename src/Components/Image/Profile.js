import React from 'react'
import Species from './Species'
export default function Profile(props) {
    console.log(props.image_url)
    return (
        <div className="profile">

            <img src={props.image_url} />
            <div className="profile-body">
            
            <p>{props.name}</p>
            <div><span>Species: </span><Species {...props}></Species> | {props.species}</div>
            <div><span>Origin:</span> <br></br>{props.origin_name}</div>
            <div><span>Last Seen:</span> <br></br>{props.location_name}</div>
            <div className="profile-stats"><div><span>Wins:</span> {props.wins}</div> <div><span>Loss:</span> {props.losses}</div> <div><span>Ties:</span> {props.ties}</div></div>
            
            </div>
           

        </div>
    )
}
