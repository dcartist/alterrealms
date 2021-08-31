import React, { Component } from 'react'
// import AlterImage from "../Images/alterrealmintro.png"
import RickandMorty from "../Images/alterRealm.png"

export default class Home extends Component {
    render() {
        return (
            <div className="intro-base">
                
                
                <div className="realm-intro">
                <img src={RickandMorty} alt="rick and morty" className="rick-logo"/>
                </div>
            </div>
        )
    }
}
