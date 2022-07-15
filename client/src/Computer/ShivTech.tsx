import "./ShivTech.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export function ShivTech() {

    var [submittedSecondPassword, setSubmittedSecondPassword] = useState("");

    if ((submittedSecondPassword == "SCRAMBLED BELOW") || (submittedSecondPassword == "scrambled below")){
        return <div>
            <h1>Close-up of the computer screen</h1>
        <p></p>
        <p>You type in the password, hit 'confirm', and just like that, the buzzing in the air is silenced. The lasers are off.</p>
        <Link to="/computer2" className="flavourtext"> Return </Link>
        </div>
    }
    else {
        return <div>
        <h1>Close-up of the computer screen</h1>
        <p>     </p>
        <p>Enter secondary password:</p>
        <p></p>
        <div>
            <form>
                <input type="text" 
                value={submittedSecondPassword}
                onChange={(e) => setSubmittedSecondPassword(e.target.value)}
                ></input>  
            </form>
        </div>
        <p>     </p>
        <Link to="/play" className="flavourtext"> Return </Link>
    </div>
    }
}