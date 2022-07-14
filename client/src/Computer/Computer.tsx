import "./Computer.css";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import React, { useState } from "react";

export function Computer() {

    var [submittedPassword, setSubmittedPassword] = useState("");

    if ((submittedPassword == "BEGIN") || (submittedPassword == "begin") || (submittedPassword == "Begin")){
        return <div>
            <h1>Close-up of the computer screen</h1>
            <p className="flavourtext">--------------------------------------</p>

        <p className="flavourtext">--------------------------------------</p>
        <p>     </p>
        <p>The computer loads up. There's virtually nothing on the desktop; one icon that says 'ShivTech' and one that says 'Heroes'.</p>
        <Link to="/shivtech" className="flavourtext"> Click on 'ShivTech'</Link>
        <p></p>
        <Link to="/heroes" className="flavourtext"> Click on 'Heroes'</Link>
        </div>
    }
    else {
        return <div>
        <h1>Close-up of the computer screen</h1>
        <p className="flavourtext">--------------------------------------</p>

        <p className="flavourtext">--------------------------------------</p>
        <p>     </p>
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