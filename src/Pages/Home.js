
// import AlterImage from "../Images/alterrealmintro.png"
import RickandMorty from "../Images/alterRealm.png"
import AlterRickandMorty from "../Images/artrealmart.png"

import React from 'react'

export default function Home() {
    if (document.body.classList.contains('main-body1')) {
        return (
            <div className="intro-base">
                    
                    
                    <div className="realm-intro">
                    <img src={RickandMorty} alt="rick and morty" className="rick-logo" id="alterLogo"/>
                    </div>
                </div>
        )
    } else {
        return (
            <div className="intro-base">
                    
                    
                    <div className="realm-intro">
                    <img src={AlterRickandMorty} alt="rick and morty" className="rick-logo" id="alterLogo"/>
                    </div>
                </div>
        )

    }
    
}
