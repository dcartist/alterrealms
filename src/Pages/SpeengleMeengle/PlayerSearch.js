import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Profile from '../../Components/Image/Profile'
import axios from 'axios'
export default class PlayerSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            characters : []
        }
    }
    componentDidMount(){
       axios.get("http://localhost:8080/api/top/20").then(results => {this.setState({characters: results.data});console.log(this.state.characters)})
       
    }
    render() {
        return (
            <div className="players-section-base">
                <div className="players">
                {this.state.characters.map((item, index) => 
                    <Link to="/sm/weapon" key={index} onClick={() =>this.props.selectPlayer(item)}> <Profile {...item}></Profile></Link>
                )}
                </div>
               
            </div>
        )
    }
}
