import React, {useState} from 'react'
import {BsInfoCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Modal from "react-modal";
export default function Instructions() {
    Modal.setAppElement("#root");
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            
            <button onClick={toggleModal} className="realm-btn Innstructions btn"><BsInfoCircle></BsInfoCircle> INSTRUCTIONS</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="MortyInstructions"
        className="mymodal"
        overlayClassName="myoverlay"
      > 
      <div className="morty-instructions">
      <h1>Instructions</h1>
      
      <p>Speengle Meengle is a rick and morty version of rock paper scissors.</p>

      <p>Select a character through more than 600+ characters from the Rick and Morty show. Once you select a character, choose a weapon. Then continue to see who is the winner of the round. </p>
      <h3>The Conditions to win</h3>
      <p>SpaceShip Beats Portal Ray. Portal Ray Beats Robot. Robot Beats Spaceship </p>
      
        <Link to="/sm/characters"><button onClick={toggleModal} className="realm-btn">Enter the game</button></Link>
        <button onClick={toggleModal} className="realm-btn">Close modal</button>
      </div>
      
      </Modal>
        </div>
    )
}
