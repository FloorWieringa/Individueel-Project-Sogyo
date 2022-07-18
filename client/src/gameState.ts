
export interface GameState {
    players: Player | undefined;
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
    heldStatus: boolean;
    inPossession: boolean;
}
