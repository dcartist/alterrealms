import "./style.scss";
import About from "./Pages/About";
import AlterHome from "./Pages/AlterRealm/Home";
import AlterGame from "./Pages/AlterRealm/Game";
import AlterInstructions from "./Pages/AlterRealm/Instructions";
import AlterScoreboard from "./Pages/AlterRealm/Leaderboard"
import Home from "./Pages/Home"
import Navigation from "./Components/Navigation/Navigation"
import {Route, Link, Switch, Redirect} from "react-router-dom";
import axios from "axios"
import React, { Component } from 'react'


export default class App extends Component {
  constructor(){
    super()
    this.state={
      player:[],
      computer:[],
      weapon: 0,
      score: 0
    }
  }
  componentDidMount(){
    axios.get("https://immense-refuge-56824.herokuapp.com/").then(
      results => console.log("Waking up")
    ).catch(err=> console.log("not awake"))
  }
  render() {
    return (
      <div className="">
       <Navigation></Navigation>
       <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/about" exact component={About}></Route>
         <Route path="/alter" exact component={AlterHome}></Route>
         <Route path="/alter/game" exact component={AlterGame}></Route>
         <Route path="/alter/scoreboard" exact component={AlterScoreboard}></Route>
         <Route path="/alter/instructions" exact component={AlterInstructions}></Route>
       </Switch>
      </div>
    )
  }
}
