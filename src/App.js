import "./style.scss"
import Home from "./Pages/Home"
import AlterHome from "./Pages/AlterRealm/Home"
import AlterInstructions from "./Pages/AlterRealm//Instructions"
import {Route, Link, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="">
     
     <Switch>
       <Route path="/alter" component={AlterHome}></Route>
       <Route path="/alter/instructions" component={AlterInstructions}></Route>
     </Switch>
    </div>
  );
}

export default App;
