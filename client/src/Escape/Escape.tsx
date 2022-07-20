import React, { useState } from "react";
import { StartGame } from "./StartGame";
import { Play } from "./Play";
import type { GameState } from "../gameState";
import "./Escape.css";

export function Escape({ gameState, setGameState }: {gameState : GameState | undefined; setGameState: React.Dispatch<React.SetStateAction<GameState | undefined>>}) {

    if (!gameState) {
        return <StartGame setGameState={setGameState} />
    }

    return <Play gameState={gameState} setGameState={setGameState} />
}