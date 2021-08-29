import React, {useState, useEffect} from 'react'
import useCountDown from 'react-countdown-hook';
export default function Games() {
    const image = [
        "/images/morty.svg", 
        "/images/morty1.svg",
        "/images/morty2.svg"
    ]
    const [timeLeft, actions] = useCountDown(10000, 100);
    const [morty, setmorty] = useState({class:{height:"200px"}, score:20, imgurl: image[0]})
    const [morties, setmorties] = useState([morty])
    const [score, setscore] = useState(0)
    const [size, setsize] = useState(100)
    const [count, setcount] = useState(0)
    // const [final, setfinal] = useState(false)
    
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
    function resetMorty(){
        setmorties(morties.length = 1)
        setscore(0)
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

    useEffect(() => {
        actions.start();
      }, []);


    if(timeLeft !== 0){
        return (
            <div className="Morty">
                Score : {score}
                <h1 id="time-left">{(timeLeft / 1000).toFixed(2)}</h1>
               
      {morties.map((item, index) =>
       <div class="path">
       <img src={process.env.PUBLIC_URL + item.imgurl} style={item.class}className="shape mortyhead shadow-graphic" onClick={()=>multiMorty(index)}></img>
     </div>)}
            </div>
        )

    } else {
        return(
            <div>
        <p>    YOUR SCORE:  {score}</p>
        
        </div>
        )
    }
    
}
