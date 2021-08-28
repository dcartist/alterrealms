import React, { Component } from 'react'
import AlterImage from "../Images/alterrealmintro.png"
import RickandMorty from "../Images/rickandmorty.png"

export default class Home extends Component {
    render() {
        return (
            <div className="intro-base">
                <div>
                <img src={RickandMorty} alt="rick and morty" className="rick-logo"/>
                </div>
                <div>
                <img src={AlterImage} alt="rick and morty alter realm" className="rick-alter"/>
                </div>
            </div>
        )
    }
}
