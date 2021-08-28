import React, { Component } from 'react'
import axios from "axios";

export default class Leaderboard extends Component {
    constructor(){
        super()
        this.state = {
            leaders : []
        }
    }
    componentDidMount(){
       axios.get("http://localhost:8080/api/top/wins").then(results => {this.setState({leaders: results.data})})
    }

     topWinners = () => {axios.get("http://localhost:8080/api/top/wins").then(results => {this.setState({leaders: results.data})})}
     topLoosers = () => {axios.get("http://localhost:8080/api/top/losses").then(results => {this.setState({leaders: results.data})})}
     topTied = () => {axios.get("http://localhost:8080/api/top/tied").then(results => {this.setState({leaders: results.data})})}
     topPlayers = () => {axios.get("http://localhost:8080/api/top/player").then(results => {this.setState({leaders: results.data})})}


    render() {
        return (
            <div>
                LEADER BOARD
                <button onClick={this.topWinners}>Winners</button>
                <button onClick={this.topLoosers}>Loosers</button>
                <button onClick={this.topWinners}>Tied</button>
                <button onClick={this.topPlayers}>Players played</button>
                {this.state.leaders.map((item, index) => 
                    <p key={index}> {item.name}</p>
                )}
            </div>
        )
    }
}
