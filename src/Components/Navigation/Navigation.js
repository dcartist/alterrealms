import React from 'react'
import {Link, useLocation} from 'react-router-dom'


export default function Navigation() {
    const location = useLocation();
    /* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("sidepanel").style.width = "350px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
  }
    if (location.pathname == "/"){
        return(
           <div>
               <button className="openbtn" onClick={openNav}>&#9776; Alter Menu</button>
               <div id="sidepanel" className="sidepanel">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
 
                        <Link to="/home" onClick={closeNav}>Home</Link>
                        <Link to="/about" onClick={closeNav}>About</Link>
                        <Link to="/sm" onClick={closeNav}>Speengle-Meengle</Link>
                        <Link to="/morty" onClick={closeNav}>Morty World</Link>
                
</div>
           </div>

        )
    } else {
        return (
            <div>
            <button className="openbtn" onClick={openNav}>&#9776; Galatic Menu</button>
            <div id="sidepanel" className="sidepanel">
<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

                     <Link to="/home" onClick={closeNav}>home</Link>
                     <Link to="/about" onClick={closeNav}>About</Link>
                     <Link to="/sm" onClick={closeNav}>Speengle-Meengle</Link>
                     <Link to="/morty" onClick={closeNav}>Morty World</Link>
             
</div>
        </div>
        )
    }
 
}
