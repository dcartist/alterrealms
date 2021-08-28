import "./style.scss";
import About from "./Pages/About";
import AlterHome from "./Pages/SpeengleMeengle/Home";
import AlterGame from "./Pages/SpeengleMeengle/Game";
import AlterInstructions from "./Pages/SpeengleMeengle/Instructions";
import AlterScoreboard from "./Pages/SpeengleMeengle/Leaderboard";
import AlterCharactersSelect from "./Pages/SpeengleMeengle/PlayerSearch";
import AlterWeaponSelect from "./Pages/SpeengleMeengle/Weapons"
import Home from "./Pages/Home"
import Navigation from "./Components/Navigation/Navigation"
import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from "react-router-dom";
import axios from "axios";


//Speengle-Meengle RPS

export default class App extends Component {
  constructor(){
    super()
    this.state={
      player:{},
      computer:{},
      ready: false,
      fights: 0,
      playerWeapon: 0,
      computerWeapon: 0,
      computerId: 0,
      winner: "",
      loser: "",
      score: 0
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
  axios.get(`http://localhost:8080/api/character/id/${compPlayer}`).then(
    results => {
      console.log(this.state.ready)
      this.setState({computer: results.data, ready: true})})
  
 }

 //* Player selects who they want to be
  selectPlayer = (data) => {
    let compWeapon = Math.floor(Math.random() * 3);
    this.setState({player: data, computerWeapon: compWeapon})
    let compPlayer = Math.floor(Math.random() * 670);
    axios.get(`http://localhost:8080/api/character/id/${compPlayer}`).then(
      results => {this.setState({computer: results.data})})
  }
  //* Player selecting weapon
  selectWeapon = (data) => {

    this.setState({ready: true})
    this.setState({playerWeapon: data, ready: true})
    console.log(this.state.ready)
  }

  render() {
    return (
      <div className="">
       <Navigation></Navigation>
       <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/home" exact component={Home}></Route>
         <Route path="/about" exact component={About}></Route>
         <Route path="/sm" exact component={AlterHome}></Route>
         <Route path="/sm/game" exact><AlterGame {...this.state}></AlterGame></Route>
         <Route path="/sm/weapon" exact><AlterWeaponSelect selectWeapon={this.selectWeapon}></AlterWeaponSelect></Route>
         <Route path="/sm/scoreboard" exact component={AlterScoreboard}></Route>
         <Route path="/sm/instructions" exact component={AlterInstructions}></Route>
         <Route path="/sm/characters"><AlterCharactersSelect selectPlayer={this.selectPlayer}></AlterCharactersSelect></Route>
       </Switch>
      </div>
    )
  }
}

