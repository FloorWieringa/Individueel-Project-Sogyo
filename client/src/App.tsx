import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { About } from "./About/About";
import { Escaped } from "./Escaped/Escaped";
import { Escape } from "./Escape/Escape";
import { FailedEscape } from "./FailedEscape/FailedEscape";
import { Computer } from "./Computer/Computer";
import { Bookcase } from "./Bookcase/Bookcase";
import { Lift } from "./Lift/Lift";
import { Play } from "./Escape/Play"
import { ShivTech } from "./Computer/ShivTech";
import { Heroes } from "./Computer/Heroes";
import { Computer2 } from "./Computer/Computer2";
import { Credits } from "./Credits/Credits";

import "./App.css";
import { GameState } from "./gameState";

export function App() {

    const [ gameState, setGameState ] = useState<GameState | undefined>(undefined); 
    

    return (

        <Router>
            <Header />
            
            <div className="main-content" id="cover">
                <>
                <Routes>
                    <Route path="/" element={<About />} />

                    <Route path="/start" element={<Escape gameState={gameState} setGameState={setGameState}/>} />
                    <Route path="/play" element={
                        <Play gameState={gameState} setGameState={setGameState}/>
                    }/>
                    {
                    <Route path="/escaped" element={<Escaped />} />
                    }
                    <Route path="/failedescape" element={<FailedEscape />} />
                    <Route path="/computer" element={<Computer gameState={gameState} setGameState={setGameState}/>} />
                    <Route path="/bookcase" element={<Bookcase />} />
                    <Route path="/lift" element={<Lift gameState={gameState} setGameState={setGameState}/>} />
                    <Route path="/shivtech" element={<ShivTech gameState={gameState} setGameState={setGameState}/>} />
                    <Route path="/heroes" element={<Heroes />} />
                    <Route path="/computer2" element={<Computer2 gameState={gameState} setGameState={setGameState}/>} />
                    <Route path="/credits" element={<Credits />} />
                </Routes>
                </>
            </div>
        </Router>

    )
}