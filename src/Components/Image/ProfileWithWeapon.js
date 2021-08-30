import React from 'react'
import Profile from '../../Components/Image/Profile'
export default function ProfileWithWeapon(props) {
    return (
        <div className="player-card">
        <h1>You</h1>
        <div className="weapon shadow">
        <img src={process.env.PUBLIC_URL + '/images/weapon/' + props.playerWeapon +".png"}></img>
        </div>
        <Profile {...props.player }></Profile>
    </div>
    )
}
