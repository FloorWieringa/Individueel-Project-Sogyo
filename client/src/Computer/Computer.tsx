import "./Computer.css";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import React, { useState } from "react";

export function Computer() {

    var [submittedPassword, setSubmittedPassword] = useState("");

    if ((submittedPassword == "BEGIN") || (submittedPassword == "begin") || (submittedPassword == "Begin")){
        return <div>
            <h1>Close-up of the computer screen</h1>
        <p></p>
            <p> Correct Password! </p>
        <Link to="/computer2" className="flavourtext"> Enter </Link>
        <p></p>
        <Link to="/play" className="flavourtext"> Return </Link>
        </div>
    }
    else {
        return <div>
        <h1>Close-up of the computer screen</h1>
        <p></p>
        <p>Enter Password:</p>
        <p></p>
        <div>
            <form>
                <input type="text" 
                value={submittedPassword}
                onChange={(e) => setSubmittedPassword(e.target.value)}
                ></input>  
            </form>
        </div>
        <p>     </p>
        <Link to="/play" className="flavourtext"> Return </Link>
    </div>
    }
}