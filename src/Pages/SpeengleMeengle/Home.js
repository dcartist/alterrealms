import React from 'react'
import LeaderBoard from "./Leaderboard"
import {Route, Link, Switch, Redirect} from "react-router-dom";

import Rickface from "../../Images/rickface.png"
import Speengle from "../../Images/SpeengleMeengle.png"
export default function Home(props) {
    console.log(props)
    return (
        <div className="SpeengleIntro1">
            <div>
            <img src={Rickface} />
            <img src={Speengle} className="logo" />
            </div>
            
            
            Speengle-Meengle
            <Link to="/sm/characters"><button> Character Select</button></Link>

    <Switch>
       <Route path="/sm/leaderboard" component={LeaderBoard}></Route>
     </Switch>
        </div>
    )
}
