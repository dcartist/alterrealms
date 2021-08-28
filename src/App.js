import "./style.scss";
import About from "./Pages/About";
import AlterHome from "./Pages/AlterRealm/Home";
import AlterGame from "./Pages/AlterRealm/Game";
import AlterInstructions from "./Pages/AlterRealm/Instructions";
import AlterScoreboard from "./Pages/AlterRealm/Leaderboard";
import AlterCharactersSelect from "./Pages/AlterRealm/PlayerSearch";
import Home from "./Pages/Home"
import Navigation from "./Components/Navigation/Navigation"
import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from "react-router-dom";
import axios from "axios";



export default class App extends Component {
  constructor(){
    super()
    this.state={
      player:{},
      computer:{},
      fights: 0,
      computerWeapon: 0,
      computerId: 0,
      winner: "",
      loser: "",
      weapon: 0,
      score: 0
    }
  }
  componentDidMount(){
    axios.get("https://immense-refuge-56824.herokuapp.com/").then(
      results => console.log("Waking up")
    ).catch(err=> console.log("not awake"))
  }


  selectPlayer = (data) => {
    this.setState({player: data})
    let compPlayer = Math.floor(Math.random() * 670);
    axios.get(`http://localhost:8080/api/character/id/${compPlayer}`).then(
      results => {
        this.setState({computer: results.data})
      })
    console.log(this.state.player)
    console.log("oompa")
  }


  render() {
    return (
      <div className="">
       <Navigation></Navigation>
       <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/about" exact component={About}></Route>
         <Route path="/alter" exact component={AlterHome}></Route>
         <Route path="/alter/game" exact><AlterGame></AlterGame></Route>
         <Route path="/alter/scoreboard" exact component={AlterScoreboard}></Route>
         <Route path="/alter/instructions" exact component={AlterInstructions}></Route>
         <Route path="/alter/characters"><AlterCharactersSelect selectPlayer={this.selectPlayer}></AlterCharactersSelect></Route>
       </Switch>
      </div>
    )
  }
}

