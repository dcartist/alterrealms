import React, {useState} from 'react'
import Morty from "../../Images/morty.svg"
import { Stage, Sprite } from '@inlet/react-pixi';
export default function Games() {
    const [morty, setmorty] = useState({class:{height:"200px"}, score:20})
    const [morties, setmorties] = useState([morty])
    const [score, setscore] = useState(0)
    const [size, setsize] = useState(150)

    function multiMorty(info){
        console.log("something")
        setscore(morties[info].score + score)
        let newSize = size - 50
        setsize(newSize)
        setmorties(morties.concat({class:{height:`${size}px`}, score:10}))

    }
    return (
        <div className="Morty">
            Score : {score}
           
  {morties.map((item, index) =>
   <div class="path">
   <img src={Morty} style={item.class}className="shape" onClick={()=>multiMorty(index)}></img>
 </div>)}
     
            
            
        </div>
    )
}
