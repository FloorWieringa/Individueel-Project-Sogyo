import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import urlLogo from "./logo.jpg";

/**
 * A Header component with a Sogyo logo, the name of the application and several links to different pages
 */
export function Header() {
    return <header className="main-header">
        <div>
            <img src={urlLogo} /> 
            The Lair
        </div>
        <div className="main-navigation">
            <Link to="/">Intro</Link>
            <Link to="/start"></Link>
            <Link to="/play">Play</Link>
            <Link to="/escaped"> </Link>
            <Link to="/failedescape"> </Link>
            <Link to="/computer"></Link>
            <Link to="/bookcase"></Link>
            <Link to="/lift"></Link>
        </div>
    </header>
}