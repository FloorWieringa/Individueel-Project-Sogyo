import "./Computer.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Computer2() {

        return <div>
        <h1>Close-up of the computer screen</h1>
        <p></p>
        <p>The computer loads up. There's virtually nothing on the desktop; one icon that says 'ShivTech' and one that says 'Heroes'.</p>
        <Link to="/shivtech" className="flavourtext"> Click on 'ShivTech'</Link>
        <p></p>
        <Link to="/heroes" className="flavourtext"> Click on 'Heroes'</Link>
        <p></p>
        <Link to="/play" className="flavourtext"> Return </Link>
        </div>
    
}