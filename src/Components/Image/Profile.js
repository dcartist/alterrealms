import React from 'react'
export default function Profile(props) {
    return (
        <div className="profile shadow">

            <img src={props.image_url} />
            <div className="profile-body">
            
            <p>{props.name}</p>
            <div><span>Species: </span> {props.species}</div>
            <div><span>Origin:</span> <br></br>{props.origin_name}</div>
            <div><span>Last Seen:</span> <br></br>{props.location_name}</div>
            <div className="profile-stats"><div><span>Wins:</span> {props.wins}</div> <div><span>Loss:</span> {props.losses}</div> <div><span>Ties:</span> {props.ties}</div></div>
            
            </div>
           

        </div>
    )
}
