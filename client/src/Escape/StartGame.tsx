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
        <p className="flavourtext"> You find yourself in a squat, low-ceilinged room. For a second you're ecstatic –- there's no doubt whatsoever that this is a lair.</p> 
        <p className="flavourtext">In the corner opposite you is a large desk with a high-tech computer and a world map sitting on the surface, and stretching along the wall beside it is some kind of DIY chemistry lab. There's a large bookcase on the other side of the desk, 
            and a small bed for when all the hero work tires them out.</p> 
        <p className="flavourtext">But then a funny feeling comes over you. In the centre of the room is a chair with a coil of rope beside it, like it's been used for tying someone up and torturing them. On the wall closest to you is a series of photos, but they're hung in less of
            a 'family memories' way and more of a 'murderous stalker' way. To your left is a pedestal, on which sits a stationary, robotic prosthetic hand. Just behind that is a glass case that
            looks like it should hold weapons, and further back still is the most damning thing: a costume rack. But it isn't the costume of Force of Nature. </p>
        <p className="flavourtext">It's the costume of Viperyon, the most heinous hero massacre-ist on this side of the planet.</p>
        <p className="flavourtext">Looks like you may have screwed up.</p>
        <p className="flavourtext">Now you're in somewhat of a sticky situation. You absolutely don't want to be here when Viperyon returns, but you have no idea how to get the elevator working again. Also, although you may have failed in your search for Force of Nature's lair, Viperyon is an expert at disseminating the identities of heroes and tracking them down. You might be able to get the information you need from here and still get that reward money. At the very least, you would need their full name and their home city.</p>
        <p className="flavourtext">Whatever you're going to do, do it fast.</p>
        <hr></hr>
        <form onSubmit={(e) => tryStartGame(e)}>
            <input id="input" value={playerOne}
                placeholder="Your name here"
                onChange={(e) => setPlayerOne(e.target.value)}
            />
            <p></p>

            <button className="startGameButton" type="submit">
                Start game
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
        <p>- You *never* need to press enter! Doing so will mess up the page.</p>
        </div>
    )
}