import React from 'react'

export default function Profile(props) {
    console.log(props.image_url)
    return (
        <div className="profile">
            <img src={props.image_url} />
            <p>{props.name}</p>

        </div>
    )
}
