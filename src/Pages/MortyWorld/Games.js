import React, {useState} from 'react'
import Morty from "../../Images/morty.svg"
export default function Games() {
    const image = [
        "/images/morty.svg", 
        "/images/morty1.svg"
    ]
    const [morty, setmorty] = useState({class:{height:"200px"}, score:20, imgurl: image[0]})
    const [morties, setmorties] = useState([morty])
    const [score, setscore] = useState(0)
    const [size, setsize] = useState(100)
    const [count, setcount] = useState(0)
    

    function multiMorty(info){

        if (count <= 3){
            let newState = [...morties];
            newState[info].imgurl = image[1];
            setmorty(newState)
            setscore(morties[info].score + score)
            setcount(count + 1)
            let newSize = size - 20
            setsize(newSize)
            setmorties(morties.concat({class:{height:`${size}px`}, score:10, imgurl: image[0]}))
        } else {
            setscore(morties[info].score + score)
        }
        

    }
    // console.log(imgurl)
    return (
        <div className="Morty">
            Score : {score}
           
  {morties.map((item, index) =>
   <div class="path">
   <img src={process.env.PUBLIC_URL + item.imgurl} style={item.class}className="shape mortyhead" onClick={()=>multiMorty(index)}></img>
 </div>)}
     
            
            
        </div>
    )
}
