import React, {useState} from 'react'
import MortyWorld from '../../Images/mortyworld.png'
import { Link } from 'react-router-dom'
import Morty from '../../Images/morty.svg'
import Modal from "react-modal";
export default function Home() {
    Modal.setAppElement("#root");
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    return (
        <div className="morty-intro">
            <h1>Morty World</h1>
            <img src={MortyWorld} />
            <Link to="/morty/game"><button>Enter</button></Link>
            <button onClick={toggleModal} className="morty-button-instruction">Instructions</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="MortyInstructions"
        className="mymodal"
        overlayClassName="myoverlay"
      > 
      <div className="morty-instructions">
      <h1>Instructions</h1>
      <h3>click on the morty head as many times as you can within a 10 seconds.</h3>
      <h4>GOOD LUCK!</h4>
      <img src={Morty} className="shadow-graphic"/>
        <Link to="/morty/game"><button onClick={toggleModal} className="morty-enter">Enter the game</button></Link>
        <button onClick={toggleModal} className="morty-close">Close modal</button>
      </div>
      
      </Modal>

        </div>
    )
}
