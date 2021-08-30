import "./style.scss";
import About from "./Pages/About";
import SMHome from "./Pages/SpeengleMeengle/Home";
import SMGame from "./Pages/SpeengleMeengle/Game";
import SMInstructions from "./Pages/SpeengleMeengle/Instructions";
import SMScoreboard from "./Pages/SpeengleMeengle/Leaderboard";
import SMCharactersSelect from "./Pages/SpeengleMeengle/PlayerSearch";
import SMWeaponSelect from "./Pages/SpeengleMeengle/Weapons"
import SMResults from "./Pages/SpeengleMeengle/Results"
import MortyWorld from "./Pages/MortyWorld/Home"
import MortyGame from "./Pages/MortyWorld/Games"
import GameEx from "./Pages/SpeengleMeengle/GameEx"
import Home from "./Pages/Home"
import Testing from "./Pages/MortyWorld/TestingGround"
import Navigation from "./Components/Navigation/Navigation"
import React, { Component } from 'react'
import {Route, Link, Switch, Redirect, useHistory} from "react-router-dom";
import axios from "axios";
import { GiThirdEye } from "react-icons/gi";


// Speengle-Meengle RPS
// Get your morty
export default class App extends Component {
  constructor(){
    super()
    this.state={
      player:{},
      computer:{},
      ready: false,
      tied: false,
      results: false,
      fights: 0,
      playerWeapon: 0,
      computerWeapon: 0,
      computerId: 0,
      winner: {},
      loser: {},
      score: 0,
      weapons: [{name: "spaceship"}, {name: "portal ray"}, {name: "robot"}],
      winnerWeapon: 0,
      loserWeapon: 0,
      initalstate: {
        player:{},
        computer:{},
        ready: false,
        tied: false,
        results: false,
        fights: 0,
        playerWeapon: 0,
        computerWeapon: 0,
        computerId: 0,
        winner: {},
        loser: {},
        score: 0
      }
    }
    
  }
  //* Starting to wake up heroku
  componentDidMount(){
    axios.get("https://immense-refuge-56824.herokuapp.com/").then(
      results => console.log("Waking up")
    ).catch(err=> console.log("not awake"))
  }

//* Allows player to be completely random
 selectRandom = () => {
  let playerData = Math.floor(Math.random() * 670);
  let compWeapon = Math.floor(Math.random() * 3);
  let userWeapon = Math.floor(Math.random() * 3);
  this.setState({player: playerData, computerWeapon: compWeapon, playerWeapon: userWeapon})
  let compPlayer = Math.floor(Math.random() * 670);
  axios.get(`https://immense-refuge-56824.herokuapp.com/api/character/id/${compPlayer}`).then(
    results => {
      this.setState({computer: results.data, ready: true})})
  
 }

 //* Player selects who they want to be
  selectPlayer = (data) => {
    let compWeapon = Math.floor(Math.random() * 3);
    this.setState({player: data, computerWeapon: compWeapon})
    let compPlayer = Math.floor(Math.random() * 670);
    axios.get(`https://immense-refuge-56824.herokuapp.com/api/character/id/${compPlayer}`).then(
      results => {this.setState({computer: results.data})})
  }
  //* Player selecting weapon
  selectWeapon = (data) => {
    this.setState({playerWeapon: data, ready: true})
  }

//* Setting up winner looser
//if playernumber (player wins)  is 0 then set results[0] to player 
//if playernumber {player looses} is 1 then set results[1] to player
selectingWinner =  (winner, loser, playernumber) => {
  this.setState({tied: false})
  axios.get(`https://immense-refuge-56824.herokuapp.com/api/gameplay/results/${winner.id}/${loser.id}`).then(
    results=>{
      playernumber !== 0 ? this.setState({player: results.data[0], computer: results.data[1], winner: results.data[0], loser: results.data[1], results: true, winnerWeapon: this.state.playerWeapon, loserWeapon: this.state.computerWeapon}) : this.setState({player: results.data[1], computer: results.data[0], winner: results.data[0], loser: results.data[1], results: true, winnerWeapon: this.state.computerWeapon, loserWeapon: this.state.playerWeapon })
    }
  )
}
  
tiedGame = () => {
console.log("tied")
axios.get(`https://immense-refuge-56824.herokuapp.com/api/gameplay/tie/${this.state.player.id}/${this.state.computer.id}`).then(
  results => {
    this.setState({player: results.data[0], computer: results.data[1], tied: true, })
  }
)
}
  //* Speengle-Meengle Game Logic
  // 1 beats 0
  // 2 beats 1
  // 0 beats 2

  Speengle = () => {
    let fight = this.state.fights + 1
    this.setState({fights: fight})
    if (this.state.computerWeapon == this.state.playerWeapon){
      return this.tiedGame()
    }
    switch(this.state.playerWeapon){
      // case (this.state.computerWeapon == this.state.playerWeapon):
        
      //   break;
      // player is 0
      case 0:
        //computer wins
        if (this.state.computerWeapon == 1){

          this.setState({tied: false})
          this.selectingWinner(this.state.computer, this.state.player, 1)
        } else {

          this.setState({tied: false})
          this.selectingWinner(this.state.player, this.state.computer, 0)
        }

        break;
      // player is 1
      case 1:
//computer wins
        if (this.state.computerWeapon == 2){

          this.setState({tied: false})
          this.selectingWinner(this.state.computer, this.state.player, 1)
        } else {

          this.setState({tied: false})
          this.selectingWinner(this.state.player, this.state.computer, 0)
        }

        break;

      //player is 2
      default:
        //computer wins
        if (this.state.computerWeapon == 0){

          this.setState({tied: false})
          this.selectingWinner(this.state.computer, this.state.player, 1)
        } else {

          this.setState({tied: false})
          this.selectingWinner(this.state.player, this.state.computer, 0)
        }

        break;
    }
  }

  //* Replay and Reset

  replay = (check) => {
  
    // if check is 0 reset everything and go back to main page
    // if check is 1 reset everything and go back to character select page
    // if check is 2 reset just weapon and go to player select weapon

    if (check == 0){
      this.setState(this.state.initalstate)
    } else if (check == 1){
      this.setState(this.state.initalstate)
      // let compWeapon = Math.floor(Math.random() * 3);
      // let compPlayer = Math.floor(Math.random() * 670);
      // axios.get(`https://immense-refuge-56824.herokuapp.com/api/character/id/${compPlayer}`).then(
      // results => {this.setState({computer: results.data, computerWeapon: compWeapon})})
    } else {
      let compWeapon = Math.floor(Math.random() * 3);
      this.setState({playerWeapon: 0, computerWeapon: compWeapon })
    }
    
  }

  render() {
    return (
      <div className="">
       <Navigation></Navigation>
       <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/test" exact component={Testing}></Route>
         <Route path="/home" exact component={Home}></Route>
         <Route path="/about" exact component={About}></Route>
         <Route path="/game" exact component={GameEx}></Route>
         <Route path="/sm" exact><SMHome  {...this.state}></SMHome></Route>
         <Route path="/sm/game" exact><SMGame {...this.state} Speengle={this.Speengle}></SMGame></Route>
         <Route path="/sm/results" exact><SMResults {...this.state} replay={this.replay}></SMResults></Route>
         <Route path="/sm/weapon" exact><SMWeaponSelect selectWeapon={this.selectWeapon} {...this.state}></SMWeaponSelect></Route>
         <Route path="/sm/scoreboard" exact component={SMScoreboard}></Route>
         <Route path="/sm/instructions" exact component={SMInstructions}></Route>
         <Route path="/sm/characters"><SMCharactersSelect selectPlayer={this.selectPlayer}></SMCharactersSelect></Route>
         <Route path="/morty" exact component={MortyWorld}></Route>
         <Route path="/morty/game" exact><MortyGame></MortyGame></Route>
       </Switch>
      </div>
    )
  }
}

