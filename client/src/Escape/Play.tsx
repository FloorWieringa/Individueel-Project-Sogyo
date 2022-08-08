import React, { useState } from "react";
import type { GameState } from "../gameState";
import "./Play.css";
import { Link } from "react-router-dom";

export function Play({ gameState, setGameState }: {gameState : GameState | undefined; setGameState: React.Dispatch<React.SetStateAction<GameState | undefined>>}) {
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
            const newGameState = await response.json() as GameState;
            console.log(newGameState)
            setGameState(newGameState);
            setAiDee(JSON.stringify(id));
            eventMarkers(id);
        } else {
            console.error(response.statusText);
        }
        } catch (error) {
        }
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

    async function itemToFalse(item: String) {
        try{
            const response = await fetch('escape/api/itemfalse', {
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

    async function itemHeldToTrue(item: String) {
        try{
            const response = await fetch('escape/api/itemheldtrue', {
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

    async function changeAllText(id: number){
        await changeText(id);
        editableText(id);
        addItem(id);
        setHoldItem("");
        //setIntroText("");
    }

    var [casePassword, setCasePassword] = useState("");
    var [lasersVisible, setLasersVisible] = useState(false);
    var [laserNoteFound, setLaserNoteFound] = useState(false);
    var [blueMeasure, setBlueMeasure] = useState("");
    var [redMeasure, setRedMeasure] = useState("");
    var [yellowMeasure, setYellowMeasure] = useState("");
    var [lookingForModulanium, setLookingForModulanium] = useState (false);
    const itemsInPossession = gameState?.players.items.filter((item) => (item.inPossession == true));
  

    async function eventMarkers(id: number){
        switch(id){
            case 27: // after trying on the mask
                setLookingForModulanium(true);
            break;
            case 28:
                await itemToTrue("Working mask");
            break;
        }
    }

    function editableText(id: number){
        switch(id){
            case 1: // costume stand
            if (gameState?.players.items[1].heldStatus == true || gameState?.players.items[1].inPossession == true){
                return (<div><div id="textBeforeAddItem"> Now that you're getting a closer look at the costume stand, you see that this is <div id="addItem" className="flavourtext" onClick={()=>changeText(27)}> Viperyon's backup costume. </div><div>It's still sturdy and intimidating, but the colours are a lot more modest and the stitching more haphazard.</div></div>
                <p></p>
                <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(6)}</p></div>);
            }
            else {
                return (<div><div id="textBeforeAddItem"> Now that you're getting a closer look at the costume stand, you see that this is <div id="addItem" className="flavourtext" onClick={()=>changeText(27)}> Viperyon's backup costume. </div><div>It's still sturdy and intimidating, but the colours are a lot more modest and the stitching more haphazard. The chest guard part looks like it opens up, and you notice a small panel around where the right ribs would be. There's a little screen there: it says, “Insert biological sample to activate.”</div></div>
                <p></p>
                <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(6)}</p></div>);
            }
            case 2: // chemistry table
            if ((blueMeasure == "0.5" || blueMeasure == "0,5") && (yellowMeasure == "1.5" || yellowMeasure == "1,5") && (redMeasure == "2" || redMeasure == "2.0" || redMeasure == "2,0")){
                return (<div><div id="addItem" onClick={()=>addItem(22)}>Following some strange rules of chemistry that you don't 100% understand, 
                the mixture shines bright gold. It matches the picture on the cover of the Modulanium book exactly.</div>
                <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(5)}</p></div>);
            }
            if ((redMeasure != "2") && gameState?.players.items[5].inPossession == false && gameState?.players.items[5].heldStatus == true){
                return (<div>
                    <p>You guess that you could try mixing them, if you knew how and what for.</p>
                    <form>
                        <div className="flavourtext">Amount of red: </div>
                        <input type="text" 
                        value={redMeasure}
                        onChange={(e) => setRedMeasure(e.target.value)}
                        ></input>  
                    </form>
                    <form>
                        <div className="flavourtext">Amount of blue: </div>
                        <input type="text" 
                        value={blueMeasure}
                        onChange={(e) => setBlueMeasure(e.target.value)}
                        ></input>  
                    </form>
                    <form>
                        <div className="flavourtext">Amount of yellow: </div>
                        <input type="text" 
                        value={yellowMeasure}
                        onChange={(e) => setYellowMeasure(e.target.value)}
                        ></input>  
                    </form>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>changeText(41)}> Check notes </p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(5)}</p></div>);
            }
            else {
                return (<div>
                    <p>You guess that you could try mixing them, if you knew how and what for.</p>
                    <form>
                        <div className="flavourtext">Amount of red: </div>
                        <input type="text" 
                        value={redMeasure}
                        onChange={(e) => setRedMeasure(e.target.value)}
                        ></input>  
                    </form>
                    <form>
                        <div className="flavourtext">Amount of blue: </div>
                        <input type="text" 
                        value={blueMeasure}
                        onChange={(e) => setBlueMeasure(e.target.value)}
                        ></input>  
                    </form>
                    <form>
                        <div className="flavourtext">Amount of yellow: </div>
                        <input type="text" 
                        value={yellowMeasure}
                        onChange={(e) => setYellowMeasure(e.target.value)}
                        ></input>  
                    </form>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(5)}</p></div>);
            }
            case 3: // desk
                return (<div><button id="deskButtons" onClick={()=>openElevator()}> Press button 1 </button> <button id="deskButtons" onClick={()=>openTrapDoor()}> Press button 2 </button></div>);
            case 4: // computer
                return (<div>
                    <Link to="/computer" className="flavourtext"> Take a closer look at the computer </Link>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
            case 5: // world map
                return (<div>
                <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
            case 6: // weapon case
                if ((casePassword == "AFHNZ") || (casePassword == "afhnz")){
                    return (<div><div id="textBeforeAddItem"> The lock pops off, and you swing the door open. 
                        Inside there are lots of spaces for weapons, but it's almost completely empty at the 
                        moment. Viperyon must have taken them out for a while. The only thing he's left behind 
                        is <div id="addItem" onClick={()=>addItem(37)}>an aerosol can labelled 'Instant Fog'.</div></div>
                        <p></p>
                        <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                        <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
                }
                else {return (<div>
                    <p className="flavourtext">Enter password:</p>
                    <form>
                        <input type="text" 
                        value={casePassword}
                        onChange={(e) => setCasePassword(e.target.value)}
                        ></input>  
                    </form>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
                }         
            case 7: // robot hand
            if (gameState?.players.items[0].heldStatus == true && gameState.players.items[0].inPossession == false){
                return (<div>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(4)}</p></div>);
            }
            else {
                return (<div>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(0)}</p></div>);
            }
            case 8: // barrier
                return (<div>
                <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(3)}</p></div>);
            case 9: // chair
                return (<div>
                <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(3)}</p></div>);
            case 10: // rope
                if (lasersVisible == false){
                    return (<div>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(3)}</p></div>);
                } else {
                    return (
                        <div>
                    <div id="addItem" onClick={()=>addItem(20)}>You try to reach the rope through the bars. You have to move slowly and carefully, but your arm fits through the bars of the laser cage and you manoeuvre the rope out without so much as a singe.</div>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
                };
            case 11: // elevator
            if ((gameState?.players.items[10].heldStatus == true) && ((gameState?.players.items[8].heldStatus == false) || (gameState?.players.items[9].heldStatus == false))) {
                return (<div>
                    <Link to="/lift" className="flavourtext"> Enter the elevator </Link>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
            }
             if ((gameState?.players.items[8].heldStatus == true) && (gameState?.players.items[9].heldStatus == true)){
                return (<div>
                    <Link to="/lift" className="flavourtext"> Enter the elevator </Link>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
            }
            else {
                return (<div><p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
            }
            break;
            case 12: //trap door
            if (laserNoteFound == true || (gameState?.players.items[2].heldStatus == true && gameState.player.items[2].inPossession == false)){
                return (<div>
                    <p className="italicText">This is the shutdown password for your ShivTech computer LASER system. Please memorise 
                    after reading and discard this letter for security purposes.</p>
                    <p className="italicText">YOUR PASSWORD IS SCRAMBLED BELOW.</p>
                    <p className="italicText">NHIRERG.</p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(2)}</p></div>);
            }
            else {
                return (<div>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(2)}</p></div>);
            }
            case 13: // pictures
                return (<div>
                <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
            case 14: //bed
                return (<div><div id="textBeforeAddItem"><div> This bed is clearly not someone's first choice of sleeping arrangements. 
                    It's small and not well kept, and the sheets are paper thin. <div id="addItem" className="flavourtext" onClick={()=>addItem(38)}> A couple of stray hairs </div> litter the pillow, and one of the posts on this four-poster bed has been broken off, making it a three-poster. 
                    If you had to guess, you'd say it was Viperyon's old childhood bed, repurposed.</div></div>
                <p></p>
                <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
            case 15: // bookcase
            if  (gameState?.players.items[12].heldStatus == true){
                return (<div><div id="textBeforeAddItem"><div>The bookcase is packed, but very neatly so. Each shelf is full but not overflowing, mostly filled with <div id="addItem" className="flavourtext" onClick={()=>addItem(39)}> thick chemistry tomes. </div> You take another look in the secret vault: full of cabinets and cupboards, all of them labelled with the names of various world currencies. Dollars, Yen, Rupiah, everything. One area catches your eye: on a cupboard labelled 'Francs', there's an entire shelf empty. Viperyon must have cleared it out recently.</div></div>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(1)}</p></div>);
            }
            else {
                return (<div><div id="textBeforeAddItem"><div>The bookcase is packed, but very neatly so. Each shelf is full but not overflowing –- except one. The very top shelf has a single space between <div id="addItem" className="flavourtext" onClick={()=>addItem(39)}> thick chemistry tomes </div> where a very thin book could fit. It must be Viperyon's favourite.</div></div>
                    <p></p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(1)}</p></div>);
            }
            case 16: // next to bed
                return (<div>
                <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
            case 17:
                return (<div>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(9)}</p></div>);
            case 26:
                return (<div>
                    <div>You hear a satisfying click, and the chest of the suit swings open. There's a secret compartment inside, and it contains <div id="addItem" onClick={()=>addItem(26)}> a slim book. You glance at the cover: Close to your Heart: Bulletproof Books for Protective Purposes.</div></div>
                </div>)
            case 27:
                return (<div>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(7)}</p></div>);
            case 34:
                return (<div>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(4)}</p></div>);
            case 36:
                return (<div>
                    <p className="italicText">This is the shutdown password for your ShivTech computer LASER system. Please memorise 
                    after reading and discard this letter for security purposes.</p>
                    <p className="italicText">YOUR PASSWORD IS SCRAMBLED BELOW.</p>
                    <p className="italicText">NHIRERG.</p>
                    <p className="flavourtext" id="useItem" onClick={()=>setHoldItemUseState()}> Use item from inventory </p>
                    <p className="flavourtext">{displayInventoryItem(2)}</p></div>);
        }
    }

    async function openElevator(){
        await changeText(29);
    }

    function turnLasersVisible(){
        setLasersVisible(true);
    }

    function findLaserNote(){
        setLaserNoteFound(true);
    }

    async function openTrapDoor(){
        changeText(30);
        await itemHeldToTrue("Trap door");
    }

    async function addItem(id: number) {
        switch(id){
            case 20: // rope
                if (gameState?.players?.items[4].inPossession == false) {
                    var deepCopy = {...gameState};
                    deepCopy.players.items[4].inPossession = true;
                    setGameState(deepCopy);
                    await itemToTrue("Rope");
                }
                break;
            case 22: // modulanium
                if (gameState?.players?.items[7].inPossession == false) {
                    var deepCopy = {...gameState};
                    deepCopy.players.items[7].inPossession = true;
                    setGameState(deepCopy);
                    await itemToTrue("Modulanium");
                }
                break;
            case 26: // slim book
                if (gameState?.players?.items[1].inPossession == false) {
                    var deepCopy = {...gameState};
                    deepCopy.players.items[1].inPossession = true;
                    setGameState(deepCopy);
                    await itemToTrue("Slim book");
                }
                break;
            case 35: // robot hand
                if (gameState?.players?.items[2].inPossession == false) {
                    var deepCopy = {...gameState};
                    deepCopy.players.items[2].inPossession = true;
                    setGameState(deepCopy);
                    await itemToTrue("Robot hand");
                }
                break;
            case 37: // fog spray
                if (gameState?.player?.items[3].inPossession == false) {
                    var deepCopy = {...gameState};
                    deepCopy.players.items[3].inPossession = true;
                    setGameState(deepCopy);
                    await itemToTrue("Fog spray");
                }
                break;
            case 38: // hair strands
                if (gameState?.players?.items[6].inPossession == false) {
                    var deepCopy = {...gameState};
                    deepCopy.players.items[6].inPossession = true;
                    setGameState(deepCopy);
                    await itemToTrue("Hair strands");
                }
                break;
            case 39: // book modulanium
                if (gameState?.players?.items[5].inPossession == false) {
                    var deepCopy = {...gameState};
                    deepCopy.players.items[5].inPossession = true;
                    setGameState(deepCopy);
                    await itemToTrue("Book on modulanium");
                }
                break;
        }  
    }

    function setHoldItemUseState() {
        if (gameState?.players.items[0].inPossession == true) {
            setHoldItem("Holding slim book");
            return;
        }
        if (gameState?.players.items[1].inPossession == true) {
            setHoldItem("Holding wire");
            return;
        }
        if (gameState?.players.items[2].inPossession == true) {
            setHoldItem("Holding book on Modulanium");
            return;
        }
        if (gameState?.players.items[3].inPossession == true) {
            setHoldItem("Holding wire");
            return;
        }
        if (gameState?.players.items[4].inPossession == true) {
            setHoldItem("Holding hair strands");
            return;
        }
        if (gameState?.players.items[5].inPossession == true) {
            setHoldItem("Holding robot hand");
            return;
        } 
        if (gameState?.players.items[6].inPossession == true) {
            setHoldItem("Holding rope");
            return;
        } else {
        setHoldItem("")}
    }

    function displayInventoryItem(placement: number){
        var placement = placement;
        var wire;
        if (gameState?.players?.items[0].inPossession == true){
            wire = gameState?.players?.items[0].name;
        } else {
            wire = null;
        }
        var slimBook;
        if (gameState?.players?.items[1].inPossession == true){
            slimBook = gameState?.players?.items[1].name;
        } else {
            slimBook = null;
        }
        var robotHand;
        if (gameState?.players?.items[2].inPossession == true){
            robotHand = gameState?.players?.items[2].name;
        } else {
            robotHand = null;
        }
        var fogSpray;
        if (gameState?.players?.items[3].inPossession == true){
            fogSpray = gameState?.players?.items[3].name;
        } else {
            fogSpray = null;
        }
        var rope;
        if (gameState?.players?.items[4].inPossession == true){
            rope = gameState?.players?.items[4].name;
        } else {
            rope = null;
        }
        var bookModulanium;
        if (gameState?.players?.items[5].inPossession == true){
            bookModulanium = gameState?.players?.items[5].name;
        } else {
            bookModulanium = null;
        }
        var hairStrands;
        if (gameState?.players?.items[6].inPossession == true){
            hairStrands = gameState?.players?.items[6].name;
        } else {
            hairStrands = null;
        }
        var modulanium;
        if (gameState?.players?.items[7].inPossession == true){
            modulanium = gameState?.players?.items[7].name;
        } else {
            modulanium = null;
        }
        console.log("click");
        return ( HoldItem != "" && <div className="flavourtext">
            <div>
                <div id="inventoryDisplay" onClick={()=>usingItem(0, placement)}> {wire} </div>
                <div id="inventoryDisplay" onClick={()=>usingItem(1, placement)}> {slimBook} </div>
                <div id="inventoryDisplay" onClick={()=>usingItem(2, placement)}> {robotHand} </div>
                <div id="inventoryDisplay" onClick={()=>usingItem(3, placement)}> {fogSpray} </div>
                <div id="inventoryDisplay" onClick={()=>usingItem(4, placement)}> {rope} </div>
                <div id="inventoryDisplay" onClick={()=>usingItem(5, placement)}> {bookModulanium} </div>
                <div id="inventoryDisplay" onClick={()=>usingItem(6, placement)}> {hairStrands} </div>
                <div id="inventoryDisplay" onClick={()=>usingItem(7, placement)}> {modulanium} </div>
            </div></div>)  
    }

    async function usingItem(id: number, placement: number){
        switch(id){
            case 0: // wire
            if (placement == 0){
                if (gameState?.players.items[0].heldStatus == false){
                    var deepCopy = {...gameState};
                    deepCopy.players.items[0].heldStatus = true;
                    setGameState(deepCopy);}
            changeAllText(34);
            await itemToFalse("Wire");
            } else {
                console.log("Nothing happens.");
            }
            break;
            case 1: // slim book
            if (placement == 1){
                if (gameState?.players.items[1].heldStatus == false){
                    var deepCopy = {...gameState};
                    deepCopy.players.items[1].heldStatus = true;
                    setGameState(deepCopy);}
            changeAllText(17);
            await itemToFalse("Slim book");
            await itemHeldToTrue("Secret vault");
            } else {
                console.log("Nothing happens.");
            }
            break;
            case 2: // robot hand
            if (placement == 2 && gameState?.players.items[11].heldStatus == true){
                if (gameState?.players.items[2].heldStatus == false){
                    var deepCopy = {...gameState};
                    deepCopy.players.items[2].heldStatus = true;
                    setGameState(deepCopy);}
            changeAllText(36);
            findLaserNote();
            await itemToFalse("Robot hand");
            } else {
                console.log("Nothing happens.");
            }
            break;
            case 3: // fog spray
            if (placement == 3){
                if (gameState?.players.items[3].heldStatus == false){
                    var deepCopy = {...gameState};
                    deepCopy.players.items[3].heldStatus = true;
                    setGameState(deepCopy);}
            changeAllText(19);
            await itemToFalse("Fog spray");
            turnLasersVisible();
            } else {
                console.log("Nothing happens.");
            }
            break;
            case 4: // rope
            if (placement == 4){
                if (gameState?.players.items[4].heldStatus == false){
                    var deepCopy = {...gameState};
                    deepCopy.players.items[4].heldStatus = true;
                    setGameState(deepCopy);}
            changeAllText(35);
            await itemToFalse("Rope");
            } else {
                console.log("Nothing happens.");
            }
            break;
            case 5: // book modulanium
            if (placement == 5){
                if (gameState?.players.items[5].heldStatus == false){
                    var deepCopy = {...gameState};
                    deepCopy.players.items[5].heldStatus = true;
                    setGameState(deepCopy);}
            await itemToFalse("Book on modulanium");
            await changeText(40);
            } else {
                console.log("Nothing happens.");
            }
            break;
            case 6: // hair strands
            if (placement == 6){
                if (gameState?.players.items[6].heldStatus == false){
                    var deepCopy = {...gameState};
                    deepCopy.players.items[6].heldStatus = true;
                    setGameState(deepCopy);}
                    await changeText(26);
                    editableText(26);
                    setHoldItem("");
                    await itemToFalse("Hair strands");
            } else {
                console.log("Nothing happens.");
            }
            break;
            case 7: // modulanium
            if (placement == 7){
                if (gameState?.players.items[7].heldStatus == false){
                    var deepCopy = {...gameState};
                    deepCopy.players.items[7].heldStatus = true;
                    setGameState(deepCopy);                    }
            changeAllText(28);
            await itemToFalse("Modulanium");
            } else {
                console.log("Nothing happens.");
            }
            break;
            default:
                return ""; 
        }
    }

    return (
        <div id="body">
            <div className="lair"></div>
                <div className="room">
                    <table className="roomtable">           
                        <tbody>        
                        <tr>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> A1 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 2 </td>
                            <td className="space" id="costumerack" onClick={()=>changeAllText(1)}> 3 </td>
                            <td className="space" id="costumerack" onClick={()=>changeAllText(1)}> 4 </td>
                            <td className="space" id="costumerack" onClick={()=>changeAllText(1)}> 5 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 6 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 7 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 8</td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 9 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 10 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 11 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 12 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 13 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 14 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="pc" onClick={()=>changeAllText(4)}> 17 </td>
                            <td className="space" id="pc" onClick={()=>changeAllText(4)}> 18 </td>
                        </tr>                    
                        <tr>
                            <td className="space" id="glasscase" onClick={()=>changeAllText(6)}> B1 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 2 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 3 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 4 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 5 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 6 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 7 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 8 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 9 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 10 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 11 </td>
                            <td className="space" id="chemtable" onClick={()=>changeAllText(2)}> 12 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 13 </td> 
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 14 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="pc" onClick={()=>changeAllText(4)}> 17 </td>
                            <td className="space" id="pc" onClick={()=>changeAllText(4)}> 18 </td>
                        </tr>
                        <tr>
                            <td className="space" id="glasscase" onClick={()=>changeAllText(6)}> C1 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 2 </td>
                            <td className="space" id="robothand" onClick={()=>changeAllText(7)}> 3 </td>
                            <td className="space" id="robothand" onClick={()=>changeAllText(7)}> 4 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 5 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 6 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 7 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 8 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 9 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 10 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 11 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 12 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 13 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 14 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 17 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> D1 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 2 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 3 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 4 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 5 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 6 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 7 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 8 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 9 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 10 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 11 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 12 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 13 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 14 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 17 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> E1 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 2 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 3 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 4 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 5 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 6 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 7 </td>
                            <td className="space" id="chair" onClick={()=>changeAllText(9)}> 8 </td>
                            <td className="space" id="chair" onClick={()=>changeAllText(9)}> 9 </td>
                            <td className="space" id="coiledrope" onClick={()=>changeAllText(10)}> 10 </td>
                            <td className="space" id="coiledrope" onClick={()=>changeAllText(10)}> 11 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 12 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 13 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 14 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 15 </td>
                            <td className="space" id="desk" onClick={()=>changeAllText(3)}> 16 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 17 </td>
                            <td className="space" id="worldmap" onClick={()=>changeAllText(5)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="liftdoor" onClick={()=>changeAllText(11)}> F1 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 2 </td>
                            <td className="space" id="trapdoor" onClick={()=>changeAllText(12)}> 3 </td>
                            <td className="space" id="trapdoor" onClick={()=>changeAllText(12)}> 4 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 5 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 6 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 7 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 8 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 9 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 10 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 11 </td>
                            <td className="space" id="invisiblebarrier" onClick={()=>changeAllText(8)}> 12 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 13 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 14 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 15 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 16 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 17 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="liftdoor" onClick={()=>changeAllText(11)}> G1 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 2 </td>
                            <td className="space" id="trapdoor" onClick={()=>changeAllText(12)}> 3 </td>
                            <td className="space" id="trapdoor" onClick={()=>changeAllText(12)}> 4 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 5 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 6 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 7 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 8 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 9 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 10 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 11 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 12 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 13 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 14 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 15 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 16 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 17 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> H1 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 2 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 3 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 4 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 5 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 6 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 7 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 8 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 9 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 10 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 11 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 12 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 13 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 14 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 15 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 16 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 17 </td>
                            <td className="space" id="bookcase" onClick={()=>changeAllText(15)}> 18 </td>
                        </tr> 
                        <tr>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> I1 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 2 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 3 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 4 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 5 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 6 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 7 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 8 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 9 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 10 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 11 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 12 </td>
                            <td className="space" id="bed" onClick={()=>changeAllText(14)}> 13 </td>
                            <td className="space" id="nexttobed" onClick={()=>changeAllText(16)}> 14 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 15 </td>
                            <td className="space" id="empty" onClick={()=>changeAllText(40)}> 16 </td>
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
                    <p className="commenttext">{gameState?.gameStatus.comment}</p>
                    <p>{editableText(parseInt(AiDee))}</p>
                    <p></p>
                    <div className="sidebar" id="sidebar"> 
                    <>
                    <h2 id="inventory"> Inventory </h2>
                    {itemsInPossession?.map((item)=>{return <div id="inventoryItems">{item.name}</div>})}
                    </>
                    </div>
                </div>
            <p className="holdItem">{HoldItem}</p>
        </div>
    ) 
}
