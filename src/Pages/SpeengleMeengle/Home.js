import React from 'react'
import LeaderBoard from "./Leaderboard"
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Button from "../../Components/Button/Button"
import Rickface from "../../Images/rickface.png"
import Speengle from "../../Images/SpeengleMeengle.png"
import Instructions from "./Instructions"
export default function Home(props) {
    return (
        <div className="SpeengleIntro1">
            
           
            <div className="rick-images">
            <img src={Rickface} />
            <img src={Speengle} className="logo shadow-graphic" />
            </div>
            
            
            
            <div className="speengle-buttons">
            <Button name={"SELECT A CHARACTER"} path={"/sm/characters"}></Button>
            <Instructions></Instructions>
            </div>

    <Switch>
       <Route path="/sm/leaderboard" component={LeaderBoard}></Route>
     </Switch>
        </div>
    )
}
