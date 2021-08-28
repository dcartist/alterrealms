import React from 'react'

export default function Results(props) {
    // console.log(props)
    

    if (props.results){
        console.log(props.winner)
        return (
            <div>
                Results
               <p> winner:</p>
               {props.winner.name}
                {/* {props.winner.name} */}
                <p>looser:</p>
                <button onClick={()=>props.replay(0)}>Reset Game</button>
                {/* {props.looser.name} */}
            </div>
        )

    } else if (props.tied){
       return(  <div> Tied!</div>)
    } else {
        return(  <div> Broken</div>)
    }
    
}
