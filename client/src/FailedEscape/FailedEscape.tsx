import React from "react";
import "./FailedEscape.css";
import { Link } from "react-router-dom";

export function FailedEscape() {
    return <div>
        <h1>Success... ?</h1>
        <p className="flavourtext">
        The angry beeping in the elevator stops. For a second there's total silence, then a deep 
        rumbling shakes the elevator into action. Before you know it you're back at street level. 
        You're free from Viperyon's clutches – but you can't say the same for poor Force of Nature, 
        can you? You haven't learned enough to procure your reward, or save them from Viperyon. 
        Are you going to walk away, content with your own freedom? Or are you going to return to 
        the lair and fix this?
        </p>
        <p>     </p>
        <Link to="/play" className="flavourtext"> Return </Link>
    </div>
}