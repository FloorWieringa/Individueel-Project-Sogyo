import React, { useState } from "react";
import type { GameState } from "../gameState";
import "./Play.css";
import { Link } from "react-router-dom";
import { Escape } from "./Escape";
import { idText } from "typescript";

type PlayProps = {
    gameState: GameState | undefined;
    setGameState(newGameState: GameState): void;
}

export function Play({ gameState, setGameState }: PlayProps) {
    const [Message, setMessage] = useState("");
    const [HoldItem, setHoldItem] = useState("");
    const [AiDee, setAiDee] = useState("");

    async function changeText(id:number){
        try{
            const response = await fetch('escape/api/change', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: id})
            });
        if (response.ok) {
            const gameState = await response.json() as GameState;
            setGameState(gameState);
            setAiDee(JSON.stringify(id));
        } else {
            console.error(response.statusText);
        }
        } catch (error) {
        }
    }

    async function itemInteraction(item: String) {
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
            const gameState = await response.json() as GameState;
            setGameState(gameState);
        } else {
            console.error(response.statusText);
        }
        } catch (error) {
        }
    }

    function changeAllText(id: number){
        changeText(id);
        redirectionText(id);
        editableText(id);
    }

    var [casePassword, setCasePassword] = useState("");

    function editableText(id: number){
        switch(id){
            case 3:
                return (<div><button onClick={()=>changeText(16)}> Press button 1 </button> <button onClick={()=>changeText(17)}> Press button 2 </button></div>);
            case 4:
                return (<div>
                    <Link to="/computer" className="flavourtext"> Take a closer look at the computer </Link>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>takeItem()}> Use item from inventory </p></div>);
            case 6:
                if ((casePassword == "AFHNZ") || (casePassword == "afhnz")){
                    return (<div><div id="textBeforeAddItem"> The lock pops off, and you swing the door open. 
                        Inside there are lots of spaces for weapons, but it's almost completely empty at the 
                        moment. Viperyon must have taken them out for a while. The only thing he's left behind 
                        is <div id="addItem" onClick={()=>addItem()}>an aerosol can labelled 'Instant Fog'.</div></div>
                        <p></p>
                        <p className="flavourtext" id="useItem" onClick={()=>takeItem()}> Use item from inventory </p></div>);
                }
                else {return (<div>
                    <p>Enter password:</p>
                    <form>
                        <input type="text" 
                        value={casePassword}
                        onChange={(e) => setCasePassword(e.target.value)}
                        ></input>  
                    </form>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>takeItem()}> Use item from inventory </p>
                </div>);}
            case 7:
                return (<div>
                    <p className="flavourtext" id="useItem" onClick={()=>takeItem()}> Use item from inventory </p></div>);
                
            case 11:
                return (<div><Link to="/lift" className="flavourtext"> Enter the lift </Link>
                        <p></p>
                        <p className="flavourtext" id="useItem" onClick={()=>takeItem()}> Use item from inventory </p></div>);
            case 14:
                // link to action: examine bed from domain items here
                return (<div>

                </div>)
            case 15:
                return (<div><Link to="/bookcase" className="flavourtext"> Take a closer look at the shelves </Link>
                        <p></p>
                        <p className="flavourtext" id="useItem" onClick={()=>takeItem()}> Use item from inventory </p></div>);
        }
    }

    function addItem() {
        //add item to inventory (change status)    
    }

    function redirectionText(id: number){
        if (id == 1) {
            setMessage("this is a test text");
            return;
        }
        if (id == 2) {
            setMessage("")
            return;
        }
        if (id == 3) {
            setMessage("")
            return;
        }
        if (id == 4) {
            setMessage("")
            return;
        }
        if (id == 5) {
            setMessage("")
            return;
        }
        if (id == 6) {
            setMessage("")
            return;
        }
        if (id == 7) {
            setMessage("")
            return;
        }
        if (id == 8) {
            setMessage("")
            return;
        }
        if (id == 9) {
            setMessage("")
            return;
        }
        if (id == 10) {
            setMessage("")
            return;
        }
        if (id == 11) {
            setMessage("")
            return;
        }
        if (id == 12) {
            setMessage("")
            return;
        }
        if (id == 13) {
            setMessage("")
            return;
        }
        if (id == 14) {
            setMessage("")
            return;
        }
        if (id == 15) {
            setMessage("")
            return;
        }
        if (id == 16) {
            setMessage("")
            return;
        }
        if (id == 17) {
            setMessage("")
            return;
        }
    }
    

    // function showHoldItem() {
    //     if (gameState?.players.items[0].heldStatus == true) {
    //         setHoldItem("Holding slim book");
    //         return;
    //     }
    //     if (gameState?.players.items[1].heldStatus == true) {
    //         setHoldItem("Holding wire");
    //         return;
    //     }
    //     if (gameState?.players.items[2].heldStatus == true) {
    //         setHoldItem("Holding book on Modulanium");
    //         return;
    //     }
    //     if (gameState?.players.items[3].heldStatus == true) {
    //         setHoldItem("Holding wire");
    //         return;
    //     }
    //     if (gameState?.players.items[4].heldStatus == true) {
    //         setHoldItem("Holding hair strands");
    //         return;
    //     }
    //     if (gameState?.players.items[5].heldStatus == true) {
    //         setHoldItem("Holding robot hand");
    //         return;
    //     } 
    //     if (gameState?.players.items[6].heldStatus == true) {
    //         setHoldItem("Holding rope");
    //         return;
    //     }
    //     setHoldItem("");
    // }

    function takeItem(){
        // something should probably happen here. look at it after the inventory system is up and running.
        console.log("click");
        return (
            <div>
                <p> Which item would you like to use? </p>
                <p> insert items here somehow</p>
            </div>)  
    }
    
    

    return (
        <div>
            <p> You find yourself in a squat, low-ceilinged room. For a second you're ecstatic –- there's no doubt whatsoever that this is a lair.</p> 
            <p>In the corner opposite you is a large desk with a high-tech computer and a world map sitting on the surface, and stretching along the wall beside it is some kind of DIY chemistry lab. There's a large bookcase on the other side of the desk, 
                and a small bed for when all the hero work tires them out.</p> 
            <p>But then a funny feeling comes over you. In the centre of the room is a chair with a coil of rope beside it, like it's been used for tying someone up and torturing them. On the wall closest to you is a series of photos, but they're hung in less of
                a 'family memories' way and more of a 'murderous stalker' way. To your left is a pedestal, on which sits a stationary, robotic prosthetic hand. Just behind that is a glass case that
                looks like it should hold weapons, and further back still is the most damning thing: a costume rack. But it isn't the costume of Force of Nature. </p>
            <p>It's the costume of Viperyon, the most heinous hero massacre-ist on this side of the planet.</p>
            <p>Looks like you may have screwed up.</p>
            <p>Now you're in somewhat of a sticky situation. You absolutely don't want to be here when Viperyon returns, but you have no idea how to get the elevator working again. Also, although you may have failed in your search for Force of Nature's lair, Viperyon is an expert at disseminating the identities of heroes and tracking them down. You might be able to get the information you need from here and still get that reward money. At the very least, you would need their full name and their home city.</p>
            <p>Whatever you're going to do, do it fast.</p>
            <hr></hr>
            <p>{gameState?.gameStatus.comment}</p>
            <p className="Message">{Message}</p>
            <p>{editableText(parseInt(AiDee))}</p>
            <p></p>
            <div className="lair"></div>
                <div className="room">
                    <table className="roomtable">           
                        <tbody>        
                        <tr>
                            <td className="space"> A1 </td>
                            <td className="space"> 2 </td>
                            <td className="space" id="costumerack" onClick={()=>changeAllText(1)}> 3 </td>
                            <td className="space" id="costumerack" onClick={()=>changeAllText(1)}> 4 </td>
                            <td className="space" id="costumerack" onClick={()=>changeAllText(1)}> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 8</td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 9 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 10 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 11 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="pc" onClick={()=>changeAllText(4)}> 17 </td>
                            <td className="space" id="pc" onClick={()=>changeAllText(4)}> 18 </td>
                        </tr>                    
                        <tr>
                            <td className="space" id="glasscase" onClick={()=>changeAllText(6)}> B1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 8 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 9 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 10 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 11 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="pc" onClick={()=>changeAllText(4)}> 17 </td>
                            <td className="space" id="pc" onClick={()=>changeAllText(4)}> 18 </td>
                        </tr>
                        <tr>
                            <td className="space" id="glasscase" onClick={()=>changeAllText(6)}> C1 </td>
                            <td className="space"> 2 </td>
                            <td className="space" id="robothand" onClick={()=>changeAllText(7)}> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space"> 9 </td>
                            <td className="space"> 10 </td>
                            <td className="space"> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 17 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> D1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 8 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 9 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 10 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 17 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> E1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 8 </td>
                            <td className="space" id="chair" onClick={()=>changeAllText(9)}> 9 </td>
                            <td className="space" id="coiledrope" onClick={()=>changeAllText(10)}> 10 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 17 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="liftdoor" onClick={()=>changeAllText(11)}> F1 </td>
                            <td className="space"> 2 </td>
                            <td className="space" id="trapdoor" onClick={()=>changeAllText(12)}> 3 </td>
                            <td className="space" id="trapdoor" onClick={()=>changeAllText(12)}> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 8 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 9 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 10 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 11 </td>
                            <td className="space"> 12 </td>
                            <td className="space"> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space"> 17 </td>
                            <td className="space"> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="liftdoor" onClick={()=>changeAllText(11)}> G1 </td>
                            <td className="space"> 2 </td>
                            <td className="space" id="trapdoor" onClick={()=>changeAllText(12)}> 3 </td>
                            <td className="space" id="trapdoor" onClick={()=>changeAllText(12)}> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space"> 8 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 9 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 10 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 11 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 12 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 13 </td>
                            <td className="space"> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 17 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> H1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 8 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 9 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 10 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 11 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 12 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 13 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 17 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> I1 </td>
                            <td className="space"> 2 </td>
                            <td className="space"> 3 </td>
                            <td className="space"> 4 </td>
                            <td className="space"> 5 </td>
                            <td className="space"> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 8 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 9 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 10 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 11 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 12 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 13 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 17 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space"> J1 </td>
                            <td className="space" id="stalkerpictures" onClick={()=>changeAllText(13)}> 2 </td>
                            <td className="space" id="stalkerpictures" onClick={()=>changeAllText(13)}> 3 </td>
                            <td className="space" id="stalkerpictures" onClick={()=>changeAllText(13)}> 4 </td>
                            <td className="space" id="stalkerpictures" onClick={()=>changeAllText(13)}> 5 </td>
                            <td className="space" id="stalkerpictures" onClick={()=>changeAllText(13)}> 6 </td>
                            <td className="space"> 7 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 8 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 9 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 10 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 11 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 12 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 13 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 14 </td>
                            <td className="space"> 15 </td>
                            <td className="space"> 16 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 17 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 18 </td>
                        </tr> 
                        </tbody> 
                    </table>
                    <p className="inventorycheat">down</p>
                    <hr></hr>
                </div>
            <p className="HoldItem">{HoldItem}</p>
            <p></p>
        </div>
    )
}
