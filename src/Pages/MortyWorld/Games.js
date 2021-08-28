import React, {useState} from 'react'
import Morty from "../../Images/morty.svg"
import { Stage, Sprite } from '@inlet/react-pixi';
export default function Games() {
    const [morty, setmorty] = useState({class:{height:"200px"}, score:20})
    const [morties, setmorties] = useState([morty])
    const [score, setscore] = useState(0)
    const [size, setsize] = useState(100)
    const [count, setcount] = useState(0)

    function multiMorty(info){
        console.log(count)
        if (count <= 3){
            setscore(morties[info].score + score)
            setcount(count + 1)
            let newSize = size - 20
            setsize(newSize)
            setmorties(morties.concat({class:{height:`${size}px`}, score:10}))
        } else {
            setscore(morties[info].score + score)
        }
        

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
