import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { About } from "./About/About";
import { Escaped } from "./Escaped/Escaped";
import { Escape } from "./Escape/Escape";
import { FailedEscape } from "./FailedEscape";
import { Computer } from "./Computer/Computer";
import { Bookcase } from "./Bookcase/Bookcase";
import { Play } from "./Escape/Play";

import "./App.css";

export function App() {
    return (
        <Router>
            <Header />

            <div className="main-content">
                <Routes>
                    <Route path="/about" element={<About />} />

                    <Route path="/" element={<Escape />} />

                    {
                    <Route path="/escaped" element={<Escaped />} />
                    }
                    <Route path="/failedescape" element={<FailedEscape />} />
                    <Route path="/computer" element={<Computer />} />
                    <Route path="/bookcase" element={<Bookcase />} />
                </Routes>
            </div>
        </Router>
    )
}