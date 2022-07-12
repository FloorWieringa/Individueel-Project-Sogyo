package escape.api.models;

import escape.domain.Playable;

public class GameStatusDTO {

    public boolean endOfGame;
    public boolean winner;

    public GameStatusDTO(
            Playable escape) {
        this.endOfGame = false;
        this.winner = false;
        }
    

    public boolean getEndOfGame() {
        return endOfGame;
    }

    public boolean getWinner() {
        return winner;
    }
}
