import "./ShivTech.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import type { GameState } from "../gameState";

type PlayProps = {
    gameState: GameState | undefined;
    setGameState(newGameState: GameState): void;
}

export function ShivTech({ gameState, setGameState }: PlayProps) {

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
        <p></p>
        <p>You type in the password, hit 'confirm', and just like that, the buzzing in the air is silenced. The lasers are off.</p>
        <Link to="/computer2" className="flavourtext"> Return </Link>
        </div>
    }
    else {
        return <div>
        <h1>Close-up of the computer screen</h1>
        <p>     </p>
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
        <p>Enter secondary password:</p>
        <p></p>
        <div>
            <form>
                <input type="text" 
                value={submittedSecondPassword}
                onChange={(e) => setSubmittedSecondPassword(e.target.value)}
                ></input>  
            </form>
        </div>
        <p>     </p>
        <Link to="/computer2" className="flavourtext"> Return </Link>
    </div>
    }
}