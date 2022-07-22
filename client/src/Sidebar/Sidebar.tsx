import "./Sidebar.css";
import type { GameState } from "../gameState";

export function Sidebar({ gameState }:  {gameState: GameState | undefined} ) {

    /*
    var sidebarArray = [];

    for (let i=0; i<8; i++){
        if (gameState?.players?.items[i].inPossession == true){
            sidebarArray.push(gameState.players.items[i].name)
        }
    }
        
    console.log(gameState)
    console.log(sidebarArray);
        */

    console.log(gameState?.players?.items[3].name);
    console.log(gameState?.players?.items[3].inPossession);


    const itemsInPossession = gameState?.players.items.filter((item) => (item.inPossession == true))

    return <header className="sidebar" id="sidebar">
        <div className="sidebar" id="sidebar"> 
            <>
            <h2 id="inventory"> Inventory </h2>
            {itemsInPossession?.map((item)=>{return <div id="inventoryItems">{item.name}</div>})}
            </>
        </div>
    </header>
}
