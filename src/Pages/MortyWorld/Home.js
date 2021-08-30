import React, {useState} from 'react'
import MortyWorld from '../../Images/mortyworld.png'
import { Link } from 'react-router-dom'
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
            <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>

        </div>
    )
}
