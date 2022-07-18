import { Link } from "react-router-dom";
import "./Sidebar.css";
import type { GameState } from "../gameState";

type PlayProps = {
    gameState: GameState | undefined;
    setGameState(newGameState: GameState): void;
}

export function Sidebar({ gameState, setGameState }: PlayProps) {
    return <header className="sidebar" id="sidebar">
        <div className="sidebar" id="sidebar"> 

            <h2 id="inventory"> Inventory </h2>
        </div>
    </header>
}
