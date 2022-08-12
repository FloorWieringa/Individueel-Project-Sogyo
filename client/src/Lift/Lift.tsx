import "./Lift.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import type { GameState } from "../gameState";

export function Lift({ gameState, setGameState }: {gameState : GameState | undefined; setGameState: React.Dispatch<React.SetStateAction<GameState | undefined>>}) {

    var [PhoneBox, setPhoneBox] = useState("");
    const itemsInPossession = gameState?.players.items.filter((item) => (item.inPossession == true));
    var [nameForceOfNature, setNameForceOfNature] = useState("");
    var [townForceOfNature, setTownForceOfNature] = useState("");
    var [namePreviousVictim, setNamePreviousVictim] = useState("");

    return <div id="body">
        <h1>Elevator</h1>
        <p className="flavourtext">It's still beeping, but the inside looks like an 
        ordinary elevator. It has all the usual buttons, the weight capacity sign, the box with an 
        emergency phone, nothing extraordinary.</p>
        <div className="liftRoom">
                <div className="liftTable">           
                        <div className="liftspace" id="liftA1"></div>
                        <div className="liftspaceclickable" id="liftA2" onClick={()=>examinePhoneBox()}>.</div>

                        <div className="liftspace" id="liftB1"></div>
                        <div className="liftspaceclickable" id="liftB2" onClick={()=>examinePhoneBox()}>.</div>

                        <div className="liftspace" id="liftC1"></div>
                        <div className="liftspaceclickable" id="liftC2" onClick={()=>examinePhoneBox()}>.</div>

                        <div className="liftspace" id="liftD1"></div>
                        <div className="liftspaceclickable" id="liftD2" onClick={()=>examinePhoneBox()}>.</div>

                        <div className="liftspace" id="liftE1"></div>
                        <div className="liftspaceclickable" id="liftE2" onClick={()=>examinePhoneBox()}>.</div>
                </div>
                <p>     </p>
                {
                    PhoneBox != "" && <div className="flavourtext">
                        <div id="textBeforeAddItem">You open the emergency phone box. The cord for the phone has been cut. Typical. But sitting in the box is <div id="addItem" onClick={()=>addItem(32)}> 
                             a small piece of wire.</div><div> It doesn't belong here, but it does look like it would be functional if put in the right place.</div></div>
                    </div>
                }
                <p></p>
                {escaping()}
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

    function escaping(){
        if ((gameState?.players.items[8].heldStatus == true) && (gameState?.players.items[9].heldStatus == true)){
            if (namePreviousVictim == "Maxwell Martin" || namePreviousVictim == "maxwell martin" || namePreviousVictim == "MAXWELL MARTIN") {
                if ((nameForceOfNature == "Taylor Prescott" || nameForceOfNature == "taylor prescott" || nameForceOfNature == "TAYLOR PRESCOTT") && (townForceOfNature == "Bern" || townForceOfNature == "bern" || townForceOfNature == "BERN")) {
                    return (<div><Link to="/escaped" className="flavourtext"> Escape! </Link></div>)
                }
                else {
                    return (<div><Link to="/failedescape" className="flavourtext"> Escape! </Link></div>)
                }
            }
            else {
            return (<div>
                <p className="flavourtext">Have you discovered the name and hometown of Force of Nature? </p>
                <form>
                    <p className="flavourtext">Name Force Of Nature: </p>
                    <input type="text" 
                    value={nameForceOfNature}
                    onChange={(e) => setNameForceOfNature(e.target.value)}
                    ></input>  
                </form>
                <form>
                    <p className="flavourtext">Hometown Force of Nature: </p>
                    <input type="text" 
                    value={townForceOfNature}
                    onChange={(e) => setTownForceOfNature(e.target.value)}
                    ></input>  
                </form>
                <p className="flavourtext">Wearing the mask, your voice modulated to sound like Viperyon, you state the name of his previous victim: </p>
                <form>
                    <input type="text" 
                    value={namePreviousVictim}
                    onChange={(e) => setNamePreviousVictim(e.target.value)}
                    ></input>  
                </form></div>)
            };
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
