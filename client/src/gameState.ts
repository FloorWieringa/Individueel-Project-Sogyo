
export interface GameState {
    players: Player;
    gameStatus: {
        endOfGame: boolean;
        winner: boolean;
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
