
export interface GameState {
    players: Player;
    gameStatus: {
        endOfGame: boolean;
        winner: boolean;
        comment: String;
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
