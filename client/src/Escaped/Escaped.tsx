import React from "react";
import "./Escaped.css";
import { Link } from "react-router-dom";

export function Escaped() {
    return <div>
        <h1>You made it!</h1>
        <p className="flavourtext">
        The angry beeping in the elevator stops. For a second there's total silence, then a deep
        rumbling shakes the elevator into action. Before you know it you're back at street level.
        You're free from Viperyon's clutches – but you can't say the same for poor Force of Nature,
        can you? As you hoped, you did gain a lot of information about her identity and
        whereabouts, so that reward could be yours... but you aren't really sure if you'll get it if
        she turns up dead tomorrow. There must be some way you can procure a good outcome
        for everyone here!
        </p>
        <Link to="/Credits" className="flavourtext"> Credits </Link>
    </div>
}