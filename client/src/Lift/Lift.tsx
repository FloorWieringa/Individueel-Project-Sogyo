import "./Lift.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import type { GameState } from "../gameState";

export function Lift({ gameState, setGameState }: {gameState : GameState | undefined; setGameState: React.Dispatch<React.SetStateAction<GameState | undefined>>}) {

    var [PhoneBox, setPhoneBox] = useState("");
    const itemsInPossession = gameState?.players.items.filter((item) => (item.inPossession == true));

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
                        <div id="textBeforeAddItem">You open the emergency phone box. The cord for the phone has been cut. Typical. But sitting in the box is <div id="addItem" onClick={()=>addItem(32)}> 
                             a small piece of wire.</div></div>
                            <div> It doesn't belong here, but it does look like it would be functional if put in the right place.</div>
                    </div>
                }
                <p></p>
            <Link to="/play" className="flavourtext"> Return </Link>
        </div>
        <div className="sidebar" id="sidebar"> 
        <>
        <h2 id="inventory"> Inventory </h2>
        {itemsInPossession?.map((item)=>{return <div id="inventoryItems">{item.name}</div>})}
        </>
        </div>
    </div>

    function examinePhoneBox(){
        setPhoneBox("tekst")
    }

    async function itemToTrue(item: String) {
        try{
            const response = await fetch('escape/api/item', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({item: item})
            });
        if (response.ok) {
            const newGameState = await response.json() as GameState;
            setGameState(newGameState);
        } else {
            console.error(response.statusText);
        }
        } catch (error) {
        }
    }
    
    async function addItem(id:number) {
     switch(id){
        case 32: // wire
        if (gameState?.players?.items[0].inPossession == false) {
        var deepCopy = {...gameState};
        deepCopy.players.items[0].inPossession = true;
        setGameState(deepCopy);
        await itemToTrue("Wire");
    }
        console.log("click");
    }
}
}
