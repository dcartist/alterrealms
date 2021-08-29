import React, {useState} from 'react'
import Morty from "../../Images/morty.svg"
export default function Games() {
    const image = [
        "/images/morty.svg", 
        "/images/morty1.svg",
        "/images/morty2.svg"
    ]
    const [morty, setmorty] = useState({class:{height:"200px"}, score:20, imgurl: image[0]})
    const [morties, setmorties] = useState([morty])
    const [score, setscore] = useState(0)
    const [size, setsize] = useState(100)
    const [count, setcount] = useState(0)
    
    function mortyHead(number){
        let newState = [...morties];
        if (newState[number].imgurl == image[0] ){
            
            newState[number].imgurl = image[1];
            setmorty(newState)
        } else if (newState[number].imgurl == image[1]){
            newState[number].imgurl = image[2];
            setmorty(newState)
        } else {
            newState[number].imgurl = image[0];
            setmorty(newState)
        }
       
    }
    function multiMorty(info){
            if (count <= 2){
            setcount(count + 1)
            mortyHead(info)
            setscore(morties[info].score + score)
            let newSize = size - 20
            setsize(newSize)
            setmorties(morties.concat({class:{height:`${size}px`}, score:10, imgurl: image[0]}))
        } else {
            mortyHead(info)
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
