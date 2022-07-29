import React, { useState } from "react";
import type { GameState } from "../gameState";
import "./StartGame.css";

type StartGameProps = {
    setGameState(newGameState: GameState): void;
}

export function StartGame({ setGameState }: StartGameProps) {

    const [errorMessage, setErrorMessage] = useState("");
    const [playerOne, setPlayerOne] = useState("");
    

    async function tryStartGame(e: React.FormEvent) {
        e.preventDefault(); // Prevent default browser behavior of submitting forms
        // if (!playerOne) {
        //     setErrorMessage("We do need to know which name to put on your hypothetical gravestone");
        //     return;
        // }
        setErrorMessage("");

        try {
            const response = await fetch('escape/api/start', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: playerOne})
            });

            if (response.ok) {
                const gameState = await response.json() as GameState;
                setGameState(gameState);
            } else {
                console.error(response.statusText);
            }
        } 
        catch (error) {
            console.error("something went wrong");
        }
    }

    return (
        <div>
        <form onSubmit={(e) => tryStartGame(e)}>
            <input id="input" value={playerOne}
                placeholder="Your name here"
                onChange={(e) => setPlayerOne(e.target.value)}
            />
            <p></p>

            <button className="startGameButton" type="submit">
                Enter the room
            </button>
        </form>
        <p></p>
        <p>Gameplay:</p>
        <p>- Story not by me; credits listed at the end! The pictures are only mine if they look like they were made by a third-grader in Paint. </p>
        <p>- Both text and images may be clickable in different parts. Be sure to try clicking on items you are interested in, to see if you can inspect it closer. When text is clickable, the mouse will turn into a pointer.</p>
        <p>- You can see which items you currently have available by looking at the inventory at the bottom of the page. If you want to use an item, you can click 'use item from inventory' at the top of the page, and select an item from the list that appears.</p>
        <p>- Untagged spaces might be interactable. For example, if you would like to try looking under a desk, you might have to click the space next to the actual desk, as the 'you' in the room would be crouching next to it in order to look under.</p>
        <p>- It might be smart to revisit some places after gaining new information.</p>
        <p>- The golden rule of escape rooms still applies: breaking things is never the solution. </p>
        <p>- Don't refresh the page after starting!</p>
        <p>- Different screen resolutions not yet supported: if you see white around the image, please change back to full screen. The mapping will be off otherwise.</p> 
        </div>
    )
}