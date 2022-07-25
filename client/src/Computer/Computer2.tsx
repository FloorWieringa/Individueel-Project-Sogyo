import "./Computer.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import type { GameState } from "../gameState";

type PlayProps = {
    gameState: GameState | undefined;
    setGameState(newGameState: GameState): void;
}

export function Computer2({ gameState, setGameState }: PlayProps) {

    const itemsInPossession = gameState?.players.items.filter((item) => (item.inPossession == true));

        return <div>
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
        <p>The computer loads up. There's virtually nothing on the desktop; one icon that says 'ShivTech' and one that says 'Heroes'.</p>
        <Link to="/shivtech" className="flavourtext"> Click on 'ShivTech'</Link>
        <p></p>
        <Link to="/heroes" className="flavourtext"> Click on 'Heroes'</Link>
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