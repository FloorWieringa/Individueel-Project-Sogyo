import React, { useState } from "react";
import type { GameState } from "../gameState";
import "./Play.css";
import { Link } from "react-router-dom";

type PlayProps = {
    gameState: GameState;
    setGameState(newGameState: GameState): void;
}

export function Play({ gameState, setGameState }: PlayProps) {

    const [Message, setMessage] = useState("");

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
            const gameState = await response.json();
            setGameState(gameState);
        } else {
            console.error(response.statusText);
        }
        } catch (error) {
        }
    }

    function showHoldItem() {
        if (gameState.players.items[0].heldStatus == true) {
            setMessage("Holding book");
            return;
        }
        if (gameState.players.items[1].heldStatus == true) {
            setMessage("Holding wire");
            return;
        }
        if (gameState.players.items[2].heldStatus == true) {
            setMessage("Holding book on Modulanium");
            return;
        }
        if (gameState.players.items[3].heldStatus == true) {
            setMessage("Holding wire");
            return;
        }
        if (gameState.players.items[4].heldStatus == true) {
            setMessage("Holding hair strands");
            return;
        }
        if (gameState.players.items[5].heldStatus == true) {
            setMessage("Holding robot hand");
            return;
        } 
        if (gameState.players.items[6].heldStatus == true) {
            setMessage("Holding rope");
            return;
        }
        setMessage("");
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
                            <td className="space" id="costumerack"> 3 </td>
                            <td className="space" id="costumerack"> 4 </td>
                            <td className="space" id="costumerack"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="chemtable"> 8</td>
                            <td className="space" id="chemtable"> 9 </td>
                            <td className="space" id="chemtable"> 10 </td>
                            <td className="space" id="chemtable"> 11 </td>
                            <td className="space" id="chemtable"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space" id="desk"> 16 </td>
                            <td className="space" id="pc"> 17 </td>
                            <td className="space" id="pc"> 18 </td>
                        </tr>                    
                        <tr>
                            <td className="space" id="glasscase"> B1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="chemtable"> 8 </td>
                            <td className="space" id="chemtable"> 9 </td>
                            <td className="space" id="chemtable"> 10 </td>
                            <td className="space" id="chemtable"> 11 </td>
                            <td className="space" id="chemtable"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space" id="desk"> 16 </td>
                            <td className="space" id="pc"> 17 </td>
                            <td className="space" id="pc"> 18 </td>
                        </tr>
                        <tr>
                            <td className="space" id="glasscase"> C1 </td>
                            <td className="space"> 2 </td>
                            <td className="space" id="robothand"> 3 </td>
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
                            <td className="space" id="desk"> 16 </td>
                            <td className="space" id="worldmap"> 17 </td>
                            <td className="space" id="worldmap"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> D1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="invisiblebarrier"> 8 </td>
                            <td className="space" id="invisiblebarrier"> 9 </td>
                            <td className="space" id="invisiblebarrier"> 10 </td>
                            <td className="space" id="invisiblebarrier"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space" id="desk"> 16 </td>
                            <td className="space" id="worldmap"> 17 </td>
                            <td className="space" id="worldmap"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> E1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="invisiblebarrier"> 8 </td>
                            <td className="space" id="chair"> 9 </td>
                            <td className="space" id="coiledrope"> 10 </td>
                            <td className="space" id="invisiblebarrier"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space" id="desk"> 16 </td>
                            <td className="space" id="worldmap"> 17 </td>
                            <td className="space" id="worldmap"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="liftdoor"> F1 </td>
                            <td className="space"> 2 </td>
                            <td className="space" id="trapdoor"> 3 </td>
                            <td className="space" id="trapdoor"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="invisiblebarrier"> 8 </td>
                            <td className="space" id="invisiblebarrier"> 9 </td>
                            <td className="space" id="invisiblebarrier"> 10 </td>
                            <td className="space" id="invisiblebarrier"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="liftdoor"> G1 </td>
                            <td className="space"> 2 </td>
                            <td className="space" id="trapdoor"> 3 </td>
                            <td className="space" id="trapdoor"> 4 </td>
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
                            <td className="space" id="bookcase"> 17 </td>
                            <td className="space" id="bookcase"> 18 </td>
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
                            <td className="space" id="bed"> 9 </td>
                            <td className="space" id="bed"> 10 </td>
                            <td className="space" id="bed"> 11 </td>
                            <td className="space" id="bed"> 12 </td>
                            <td className="space" id="bed"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space" id="bookcase"> 17 </td>
                            <td className="space" id="bookcase"> 18 </td>
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
                            <td className="space" id="bed"> 9 </td>
                            <td className="space" id="bed"> 10 </td>
                            <td className="space" id="bed"> 11 </td>
                            <td className="space" id="bed"> 12 </td>
                            <td className="space" id="bed"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space" id="bookcase"> 17 </td>
                            <td className="space" id="bookcase"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> J1 </td>
                            <td className="space" id="stalkerpictures"> 2 </td>
                            <td className="space" id="stalkerpictures"> 3 </td>
                            <td className="space" id="stalkerpictures"> 4 </td>
                            <td className="space" id="stalkerpictures"> 5 </td>
                            <td className="space" id="stalkerpictures"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space" id="bed"> 9 </td>
                            <td className="space" id="bed"> 10 </td>
                            <td className="space" id="bed"> 11 </td>
                            <td className="space" id="bed"> 12 </td>
                            <td className="space" id="bed"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space" id="bookcase"> 17 </td>
                            <td className="space" id="bookcase"> 18 </td>
                        </tr> 
                        </tbody> 
                    </table>
                </div>
            <p className="Message">{Message}</p>
        </div>
    )
}
