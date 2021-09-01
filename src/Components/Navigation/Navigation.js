import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'


export default function Navigation() {
    const location = useLocation();
    const [altering, setaltering] = useState(true)
    /* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("sidepanel").style.width = "350px";
  }
  
 
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
  }

  function alterIt(){
    if(altering){
      document.body.className = document.body.className.replace("main-body","main-body1");
      closeNav()
      setaltering(!altering)
    } else {

        document.body.className = document.body.className.replace("main-body1","main-body");
        closeNav()
        setaltering(!altering)
    }
}

return (
    <div>
    <button className="openbtn" onClick={openNav}>&#9776; ALTER REALM MENU</button>
    <div id="sidepanel" className="sidepanel">
<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

             <Link to="/home" onClick={closeNav}>home</Link>
             <Link to="/about" onClick={closeNav}>About</Link>
             <Link to="/sm" onClick={closeNav}>Speengle-Meengle</Link>
             <Link to="/morty" onClick={closeNav}>Morty World</Link>
             <Link to="/home" onClick={alterIt}>Alter</Link>
     
</div>
</div>
)

//     if (location.pathname == "/"){
//         return(
//            <div>
//                <button className="openbtn" onClick={openNav}>&#9776; Alter Realm Menu</button>
//                <div id="sidepanel" className="sidepanel">
//   <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
 
//                         <Link to="/home" onClick={closeNav}>Home</Link>
//                         <Link to="/about" onClick={closeNav}>About</Link>
//                         <Link to="/sm" onClick={closeNav}>Speengle-Meengle</Link>
//                         <Link to="/morty" onClick={closeNav}>Morty World</Link>
//                         <Link> Alter it</Link>
                
// </div>
//            </div>

//         )
//     } else {
//         return (
//             <div>
//             <button className="openbtn" onClick={openNav}>&#9776; ALTER REALM MENU</button>
//             <div id="sidepanel" className="sidepanel">
// <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

//                      <Link to="/home" onClick={closeNav}>home</Link>
//                      <Link to="/about" onClick={closeNav}>About</Link>
//                      <Link to="/sm" onClick={closeNav}>Speengle-Meengle</Link>
//                      <Link to="/morty" onClick={closeNav}>Morty World</Link>
//                      <Link> Alter it</Link>
             
// </div>
//         </div>
//         )
//     }
 
}
