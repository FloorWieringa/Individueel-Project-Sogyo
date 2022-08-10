import "./ShivTech.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import type { GameState } from "../gameState";

type PlayProps = {
    gameState: GameState | undefined;
    setGameState(newGameState: GameState): void;
}

const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
} // prevents the page from reloading when They Who Do Not Read Instructions press enter

export function ShivTech({ gameState, setGameState }: PlayProps) {

    const itemsInPossession = gameState?.players.items.filter((item) => (item.inPossession == true));

    async function changeText(id:number){
        try{
            const response = await fetch('escape/api/change', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: id})
            });
        if (response.ok) {
            const gameState = await response.json() as GameState;
            setGameState(gameState);
        } else {
            console.error(response.statusText);
        }
        } catch (error) {
        }
    }

    var [submittedSecondPassword, setSubmittedSecondPassword] = useState("");

    if ((submittedSecondPassword == "SCRAMBLED BELOW") || (submittedSecondPassword == "scrambled below")){
        changeText(25);
        return <div>
        <h1>Close-up of the computer screen</h1>
        <div className="computerTable" id="computerTable">
            <div className="computerSpaceRow" id="computerSpaceA1"></div>
            <div className="computerSpaceRow" id="computerSpaceB1"></div>
            <div className="computerSpaceRow" id="computerSpaceC1"></div>
            <div className="computerSpaceRow" id="computerSpaceD1"></div>
            <div className="computerSpaceRow" id="computerSpaceE1"></div>
        </div>
        <p></p>
        <p></p>
        <p>You type in the password, hit 'confirm', and just like that, the buzzing in the air is silenced. The lasers are off.</p>
        <Link to="/computer2" className="flavourtext"> Return </Link>
        <div className="sidebar" id="sidebar"> 
            <>
            <h2 id="inventory"> Inventory </h2>
            {itemsInPossession?.map((item)=>{return <div id="inventoryItems">{item.name}</div>})}
            </>
        </div>
        </div>
    }
    else {
        return <div>
        <h1>Close-up of the computer screen</h1>
        <p>     </p>
        <div className="computerTable" id="computerTable">
            <div className="computerSpaceRow" id="computerSpaceA1"></div>
            <div className="computerSpaceRow" id="computerSpaceB1"></div>
            <div className="computerSpaceRow" id="computerSpaceC1"></div>
            <div className="computerSpaceRow" id="computerSpaceD1"></div>
            <div className="computerSpaceRow" id="computerSpaceE1"></div>
        </div>
        <p></p>
        <p>Enter secondary password:</p>
        <p></p>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={submittedSecondPassword}
                onChange={(e) => setSubmittedSecondPassword(e.target.value)}
                ></input>  
            </form>
        </div>
        <p>     </p>
        <Link to="/computer2" className="flavourtext"> Return </Link>
        <div className="sidebar" id="sidebar"> 
            <>
            <h2 id="inventory"> Inventory </h2>
            {itemsInPossession?.map((item)=>{return <div id="inventoryItems">{item.name}</div>})}
            </>
        </div>
    </div>
    }
}