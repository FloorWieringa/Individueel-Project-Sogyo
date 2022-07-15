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
                const gameState = await response.json();
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
            <input value={playerOne}
                placeholder="Your name here"
                onChange={(e) => setPlayerOne(e.target.value)}
            />

            <p className="errorMessage">{errorMessage}</p>

            <button className="startGameButton" type="submit">
                Enter the room
            </button>
        </form>
        <p></p>
        <p>Maybe a little explanation here.</p>
        <p>Or maybe not :&#41;</p>
        </div>
    )
}