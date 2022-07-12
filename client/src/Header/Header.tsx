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
            <Link to="/about">Start</Link>
            <Link to="/"></Link>
            <Link to="/escaped"> Success </Link>
            <Link to="/failedescape"> Failure </Link>
            <Link to="/computer"> Computer screen</Link>
            <Link to="/bookcase"> Bookcase contents</Link>
        </div>
    </header>
}