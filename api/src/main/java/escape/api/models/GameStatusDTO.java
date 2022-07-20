package escape.api.models;

import escape.domain.Playable;

public class GameStatusDTO {

    public boolean endOfGame;
    public boolean won;
    public String comment;

    public GameStatusDTO(
            Playable escape) {
        this.endOfGame = false;
        this.won = false;
        this.comment = escape.getComments(); 
        }


    public boolean getEndOfGame() {
        return endOfGame;
    }

    public boolean getWinner() {
        return won;
    }
}
