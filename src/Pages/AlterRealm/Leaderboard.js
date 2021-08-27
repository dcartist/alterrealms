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
       axios.get("http://localhost:8080/api/top/wins").then(
           results => {
               this.setState({leaders: results.data})
               console.log(this.state.leaders)
           }

       )
    }

     topWinners = () => {
            
    }
    render() {
        return (
            <div>
                LEADER BOARD
                
            </div>
        )
    }
}
