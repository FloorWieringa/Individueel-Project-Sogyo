import "./Computer.css";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import React, { useState } from "react";
import type { GameState } from "../gameState";

type PlayProps = {
    gameState: GameState | undefined;
    setGameState(newGameState: GameState): void;
}

export function Computer({ gameState, setGameState }: PlayProps) {

    var [submittedPassword, setSubmittedPassword] = useState("");
    var [Mouse, setMouse] = useState("");
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

    if ((submittedPassword == "BEGIN") || (submittedPassword == "begin") || (submittedPassword == "Begin")){

        return <div id="body">
            <h1>Close-up of the computer screen</h1>
        <p></p>
        <table className="computerTable">
            <tbody>
                <tr>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                </tr>
                <tr>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                </tr>
                <tr>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                </tr>
                <tr>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                </tr>
                <tr>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                    <td className="computerSpace"></td>
                </tr>
            </tbody>
        </table>
        <p></p>
            <p className="flavourtext"> Correct Password! </p>
        <Link to="/computer2" className="flavourtext"> Enter </Link>
        <p></p>
        <Link to="/play" className="flavourtext"> Return </Link>
        <div className="sidebar" id="sidebar"> 
        <>
        <h2 id="inventory"> Inventory </h2>
        {itemsInPossession?.map((item)=>{return <div id="inventoryItems">{item.name}</div>})}
        </>
        </div>
        </div>
    }
    else {
        return <div id="body">
        <h1>Close-up of the computer screen</h1>
        <p></p>
        <div className="computerTable">
            <div className="computerSpace" id="computerSpaceA1"></div>
            <div className="computerSpace" id="computerSpaceA2"></div>
            <div className="computerSpace" id="computerSpaceA3"></div>
            <div className="computerSpace" id="computerSpaceA4"></div>
            <div className="computerSpace" id="computerSpaceA5"></div>

            <div className="computerSpace" id="computerSpaceB1"></div>
            <div className="computerSpace" id="computerSpaceB2"></div>
            <div className="computerSpace" id="computerSpaceB3"></div>
            <div className="computerSpace" id="computerSpaceB4"></div>
            <div className="computerSpace" id="computerSpaceB5"></div>

            <div className="computerSpace" id="computerSpaceC1"></div>
            <div className="computerSpace" id="computerSpaceC2"></div>
            <div className="computerSpace" id="computerSpaceC3"></div>
            <div className="computerSpace" id="computerSpaceC4"></div>
            <div className="computerSpace" id="computerSpaceC5"></div>

            <div className="computerSpace" id="computerSpaceD1"></div>
            <div className="computerSpace" id="computerSpaceD2"></div>
            <div className="computerSpace" id="computerSpaceD3"></div>
            <div className="computerSpace" id="computerSpaceD4"></div>
            <div className="computerSpace" id="computerSpaceD5" onClick={()=>examineMouse()}>.</div>

            <div className="computerSpace" id="computerSpaceE1"></div>
            <div className="computerSpace" id="computerSpaceE2"></div>
            <div className="computerSpace" id="computerSpaceE3"></div>
            <div className="computerSpace" id="computerSpaceE4"></div>
            <div className="computerSpace" id="computerSpaceE5" onClick={()=>examineMouse()}>.</div>
        </div>
        <p></p>
        <p className="Mouse">{Mouse}</p>
        <p></p>
        <p className="flavourtext">Enter Password:</p>
        <p></p>
        <div>
            <form>
                <input type="text" 
                value={submittedPassword}
                onChange={(e) => setSubmittedPassword(e.target.value)}
                ></input>  
            </form>
        </div>
        <p>     </p>
        <Link to="/play" className="flavourtext"> Return </Link>
        <div className="sidebar" id="sidebar"> 
        <>
        <h2 id="inventory"> Inventory </h2>
        {itemsInPossession?.map((item)=>{return <div id="inventoryItems">{item.name}</div>})}
        </>
        </div>
        </div>
    }

    function examineMouse(){
        setMouse("You pick up the mouse. Well, that’s why it’s not working: there’s a post-it stuck to the bottom. Written on it are four words. Password: map’s missing firsts.")
    }
}