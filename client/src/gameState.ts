
export interface GameState {
    players: Player;
    textID: number;
    gameStatus: {
        endOfGame: boolean;
        winner: string;
    };
}

interface Player {
    name: string;
    items: Item[];
}

interface Item {
    name: String;
    ID: number;
    heldStatus: boolean;
}
