import React from 'react'
import LeaderBoard from "./Leaderboard"
import {Route, Link, Switch, Redirect} from "react-router-dom";
export default function Home() {
    return (
        <div>
            Speengle-Meengle
            <Link to="/sm/characters"><button> Character Select</button></Link>

    <Switch>
       <Route path="/sm/leaderboard" component={LeaderBoard}></Route>
     </Switch>
        </div>
    )
}
