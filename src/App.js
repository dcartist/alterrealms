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
import GameEx from "./Pages/SpeengleMeengle/Trial"
import Home from "./Pages/Home"
import Testing from "./Pages/MortyWorld/TestingGround"
import Tester from "./Tester"
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
        score: 0,
         weapons: [{name: "spaceship"}, {name: "portal ray"}, {name: "robot"}],
        winnerWeapon: 0,
        loserWeapon: 0,
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

  setWinner = (data) => {
    
  }
//* Setting up winner looser

selectingWinner =  (winner, loser, winWeapon, loseWeapon) => {
  this.setState({tied: false})
  axios.get(`https://immense-refuge-56824.herokuapp.com/api/gameplay/lose/${loser.id}`).then(results1=> {this.setState({results: true, loser: results1.data, loserWeapon: loseWeapon})
  console.log("looser:")
  console.log(results1.data)
})
 console.log( `https://immense-refuge-56824.herokuapp.com/api/gameplay/win/${winner.id}`)
  axios.get(`https://immense-refuge-56824.herokuapp.com/api/gameplay/win/${winner.id}`).then(results=> {
    this.setState({results: true, winner: results.data, winnerWeapon: winWeapon})
    console.log("winner:")
    console.log(results.data)

}).catch(err=>console.log(err))
this.setState({results:true})
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
  // 1 beats 0 spaceship beats portal ray
  // 2 beats 1 portal ray beats robot
  // 0 beats 2 robot beats spaceship

  Speengle = () => {
    let fight = this.state.fights + 1
    this.setState({fights: fight})
    if (this.state.computerWeapon == this.state.playerWeapon){
       this.tiedGame()
    } else if (this.state.computerWeapon == 0){
      //0 Spaceship
      // 0 Spaceship beats portal gun 1
      if(this.state.playerWeapon == 1){
        this.selectingWinner(this.state.computer, this.state.player, this.state.computerWeapon, this.state.playerWeapon)
      } else {
      // 2 Robot beats 0 Spaceship
       this.selectingWinner(this.state.player, this.state.computer, this.state.playerWeapon, this.state.computerWeapon)
      }
    } else if (this.state.computerWeapon == 1){
      // 1 Portal Gun
      // 1 Portal Gun beats Robot 2
      if(this.state.playerWeapon == 2){
        this.selectingWinner(this.state.computer, this.state.player, this.state.computerWeapon, this.state.playerWeapon)
      } else {
        // 0 Spaceship beats portal gun 1
       this.selectingWinner(this.state.player, this.state.computer, this.state.playerWeapon, this.state.computerWeapon)
      } 

    } else {
      // 2 Robot
      // 2 Robot beats spaceship
      if(this.state.playerWeapon == 0){
        this.selectingWinner(this.state.computer, this.state.player, this.state.computerWeapon, this.state.playerWeapon)
      } else {
 // 1 Portal Gun beats Robot 2
       this.selectingWinner(this.state.player, this.state.computer, this.state.playerWeapon, this.state.computerWeapon)
      } 

    }
  }

  //* Replay and Reset

  replay = () => {
  
    this.setState({
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
      winnerWeapon: 0,
      loserWeapon: 0,
    })

    
  }

  render() {
    console.log = console.warn = console.error = () => {};
    return (
      <div className="">
       <Navigation></Navigation>
       <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/test" exact component={Testing}></Route>
         <Route path="/axios" exact ><Tester {...this.state} selectingWinner={this.selectingWinner}></Tester></Route>
         <Route path="/home" exact component={Home}></Route>
         <Route path="/about" exact component={About}></Route>
         <Route path="/trial" exact component={GameEx}></Route>
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

