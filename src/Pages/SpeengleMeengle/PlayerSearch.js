import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Profile from '../../Components/Image/Profile'
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
        axios.get(`https://immense-refuge-56824.herokuapp.com/api/character/name/${info}`).then(results => {this.setState({characters: results.data});console.log(this.state.characters)})
        
    }

    searchTime = (e) => {
        e.preventDefault()
        this.findByName(this.state.name)
    }

    
    render() {
        return (
            <div className="players-section-base">
                <div className="player-form">
                    <form>
                    <input
                    placeholder="Enter a character"
                    type='text'
                    onChange={(e)=>this.inputCharacter(e)}
      /> <button onClick={this.searchTime} className="realm-btn">Submit</button>
                    </form>
                    <div className="player-buttons">
                        <button onClick={()=>this.findByName("rick")}> All Ricks </button>
                        <button onClick={()=>this.findByName("morty")}> All Morties </button>
                        <button onClick={()=>this.findByName("beth")}> All Beths </button>
                        <button onClick={()=>this.findByName("summer")}> All Summers </button>
                        <button onClick={()=>this.findByName("jerry")}> And Jerry </button>
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
