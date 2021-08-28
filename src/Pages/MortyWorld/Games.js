import React, {useState} from 'react'
import Morty from "../../Images/morty.svg"
export default function Games() {
    const [morty, setmorty] = useState({class:{height:"200px"}, score:20})
    const [morties, setmorties] = useState([morty])
    const [score, setscore] = useState(0)
    const [size, setsize] = useState(150)

    function multiMorty(info){
        setscore(morties[info].score + score)
        let newSize = size - 50
        setmorties(morties.concat({class:{height:`${size}px`}, score:10}))

    }
    return (
        <div>
            Score : {score}
            {/* <img src={Morty} style={morty}></img> */}
            {morties.map((item, index) => <p>
                <img src={Morty} style={item.class} onClick={()=>multiMorty(index)}></img></p>)}
            
        </div>
    )
}
