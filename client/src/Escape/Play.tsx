import React, { useState } from "react";
import type { GameState } from "../gameState";
import { Mancala } from "./Mancala";
import "./Play.css";
import { Link } from "react-router-dom";

type PlayProps = {
    gameState: GameState;
    setGameState(newGameState: GameState): void;
}

export function Play({ gameState, setGameState }: PlayProps) {

    gameState.gameStatus.endOfGame
    const [winnerMessage, setWinnerMessage] = useState("");

    async function changeText(id:number){
        try{
            const response = await fetch('mancala/api/change', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: id})
            });
        if (response.ok) {
            const gameState = await response.json();
            setGameState(gameState);
        } else {
            console.error(response.statusText);
        }
        } catch (error) {
        }
    }

    function retrieveWinner() {
        if (gameState.gameStatus.endOfGame == true) {
            setWinnerMessage("Player 1 won!");
            return;
        }
        setWinnerMessage("");
        //"There are still moves that can be done."
    }

    return (
        <div>
            <p> You find yourself in a squat, low-ceilinged room. For a second you're ecstatic –- there's no doubt whatsoever that this is a lair.</p> 
            <p>In the corner opposite you is a large desk with a high-tech computer and a world map sitting on the surface, and stretching along the wall beside it is some kind of DIY chemistry lab. There's a large bookcase on the other side of the desk, 
                and a small bed for when all the hero work tires them out.</p> 
            <p>But then a funny feeling comes over you. In the centre of the room is a chair with a coil of rope beside it, like it's been used for tying someone up and torturing them. On the wall closest to you is a series of photos, but they're hung in less of
                a 'family memories' way and more of a 'murderous stalker' way. To your left is a pedestal, on which sits a stationary, robotic prosthetic hand. Just behind that is a glass case that
                looks like it should hold weapons, and further back still is the most damning thing: a costume rack. But it isn't the costume of Force of Nature. </p>
            <p>It's the costume of Viperyon, the most heinous hero massacre-ist on this side of the planet.</p>
            <p>Looks like you may have screwed up.</p>
            <p>Now you're in somewhat of a sticky situation. You absolutely don't want to be here when Viperyon returns, but you have no idea how to get the elevator working again. Also, although you may have failed in your search for Force of Nature's lair, Viperyon is an expert at disseminating the identities of heroes and tracking them down. You might be able to get the information you need from here and still get that reward money. At the very least, you would need their full name and their home city.</p>
            <p>Whatever you're going to do, do it fast.</p>
            <Link to="/Escaped" className="flavourtext"> Imagine you escaped</Link>
            <div className="lair"></div>
                <div className="room">
                    <table>           
                        <tbody>        
                        <tr>
                            <td className="space"> A1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr>                    
                        <tr>
                            <td className="space"> B1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr>
                        <tr>
                            <td className="space"> C1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> D1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> E1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> F1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> G1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> H1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> I1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> J1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        </tbody> 
                    </table>
                </div>
            <p onClick={()=>changeText(gameState.textID)}> {gameState.textID}</p>
            <p className="winnerMessage">{winnerMessage}</p>
        </div>
    )
}
