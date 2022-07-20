import "./Lift.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import type { GameState } from "../gameState";

export function Lift() {

    var [PhoneBox, setPhoneBox] = useState("");

    return <div>
        <h1>Elevator</h1>
        <p className="flavourtext">It's still beeping, but the inside looks like an 
        ordinary elevator. It has all the usual buttons, the weight capacity sign, the box with an 
        emergency phone, nothing extraordinary.</p>
        <div className="liftRoom">
                <table className="liftTable">           
                    <tbody>        
                    <tr>
                        <td className="liftspace"></td>
                        <td className="liftspace"></td>
                        <td className="liftspace"></td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onBlackBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onBlackBackground" onClick={()=>examinePhoneBox()}>.</td>
                    </tr>
                    <tr>
                        <td className="liftspace"></td>
                        <td className="liftspace"></td>
                        <td className="liftspace"></td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                    </tr>
                    <tr>
                        <td className="liftspace"></td>
                        <td className="liftspace"></td>
                        <td className="liftspace"></td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                    </tr>
                    <tr>
                        <td className="liftspace"></td>
                        <td className="liftspace"></td>
                        <td className="liftspace"></td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onBlackBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                    </tr>
                    <tr>
                        <td className="liftspace"> </td>
                        <td className="liftspace"> </td>
                        <td className="liftspace"> </td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                        <td className="liftspace" id="onWhiteBackground" onClick={()=>examinePhoneBox()}>.</td>
                    </tr>
                    </tbody>
                </table>
                <p>     </p>
                {
                    PhoneBox != "" && <div className="flavourtext">
                        <div id="textBeforeAddItem">You open the emergency phone box. The cord for the phone has been cut. Typical. But sitting in the box is <div id="addItem" onClick={()=>addItem()}> 
                             a small piece of wire.</div></div>
                            <div> It doesn't belong here, but it does look like it would be functional if put in the right place.</div>
                    </div>
                }
                <p></p>
            <Link to="/play" className="flavourtext"> Return </Link>
        </div>
    </div>

    function examinePhoneBox(){
        setPhoneBox("tekst")
    }

    function addItem() {
 // under construction
        console.log("click");
    }
}
