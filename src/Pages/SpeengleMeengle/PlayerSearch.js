import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Profile from '../../Components/Image/Profile'
import loading from "../../Images/loading.svg"
import missing from "../../Images/mortyrickmissing.png"
import axios from 'axios'
export default class PlayerSearch extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            characters : [],
            found: true,
            name: ""

        }
    }
    componentDidMount(){
       axios.get("https://immense-refuge-56824.herokuapp.com/api/top/20").then(results => {this.setState({characters: results.data});console.log(this.state.characters)})
       
    }
    inputCharacter(e){
        e.preventDefault()
        let info = e.target.value
        console.log(info)
        this.setState({name: info})

    }
    clearCharacters = () => {
        this.setState({characters: []})
    }
    findByName = (info) => {
        this.clearCharacters()
        axios.get(`https://immense-refuge-56824.herokuapp.com/api/character/name/${info}`).then(results => {
        if (results.data.length == 0){
            this.setState({found: false});
        } else {

            this.setState({characters: results.data});
        }   
    })
        
    }

    searchTime = (e) => {
        e.preventDefault()
        this.setState({found: true});
        this.findByName(this.state.name)
    }


    render() {
       
        if(!this.state.found && this.state.characters.length == 0){
            return (
                <div className="players-section-base">
                    <div className="player-form">
                        <form>
                        <input
                        id="basics" 
                        placeholder="Enter a character"
                        type='text'
                        onChange={(e)=>this.inputCharacter(e)}
          /> <button onClick={this.searchTime} className="realm-btn btn">Submit</button>
                        </form>
                        <div className="player-buttons">
                            <button onClick={()=>this.findByName("rick")} className="btn"> All Ricks </button>
                            <button onClick={()=>this.findByName("morty")} className="btn"> All Morties </button>
                            <button onClick={()=>this.findByName("beth")} className="btn"> All Beths </button>
                            <button onClick={()=>this.findByName("summer")} className="btn"> All Summers </button>
                            <button onClick={()=>this.findByName("jerry")} className="btn"> And Jerry </button>
                        </div>
                    </div>
                    <div className="players">
                   <div className="missing-character">
                       <div>
                       <img src={missing} className="shadow-graphic"/>
                       </div>
                       <h1 className="shadow-graphic"> {this.state.name} was not found </h1>
                   </div>
                    </div>
                   
                </div>
            )


        } else if (this.state.found && this.state.characters.length == 0){
            return (
                <div className="players-section-base">
                <div className="player-form">
                    <form>
                    <input
                    id="basics" 
                    placeholder="Enter a character"
                    type='text'
                    onChange={(e)=>this.inputCharacter(e)}
      /> <button onClick={this.searchTime} className="realm-btn btn">Submit</button>
                    </form>
                    <div className="player-buttons">
                        <button onClick={()=>this.findByName("rick")} className="btn"> All Ricks </button>
                        <button onClick={()=>this.findByName("morty")} className="btn"> All Morties </button>
                        <button onClick={()=>this.findByName("beth")} className="btn"> All Beths </button>
                        <button onClick={()=>this.findByName("summer")} className="btn"> All Summers </button>
                        <button onClick={()=>this.findByName("jerry")} className="btn"> And Jerry </button>
                    </div>
                </div>
                <div className="players">
                <div className="loading">
                    <img src={loading} className="shadow-graphic"/>
                    <h1 className="shadow-graphic">Loading...</h1>
                    </div>
                </div>
               
            </div>
            )

        } else {

            return (
                <div className="players-section-base">
                    <div className="player-form">
                        <form>
                        <input
                        id="basics" 
                        placeholder="Enter a character"
                        type='text'
                        onChange={(e)=>this.inputCharacter(e)}
          /> <button onClick={this.searchTime} className="realm-btn btn">Submit</button>
                        </form>
                        <div className="player-buttons">
                            <button onClick={()=>this.findByName("rick")} className="btn"> All Ricks </button>
                            <button onClick={()=>this.findByName("morty")} className="btn"> All Morties </button>
                            <button onClick={()=>this.findByName("beth")} className="btn"> All Beths </button>
                            <button onClick={()=>this.findByName("summer")} className="btn"> All Summers </button>
                            <button onClick={()=>this.findByName("jerry")} className="btn"> And Jerry </button>
                        </div>
                    </div>
                    <div className="players">
                    {this.state.characters.map((item, index) => 
                        <Link to="/sm/weapon" key={index} onClick={() =>this.props.selectPlayer(item)}> <Profile {...item}></Profile></Link>
                    )}
                    </div>
                   
                </div>
            )
        }
        
    }
}
