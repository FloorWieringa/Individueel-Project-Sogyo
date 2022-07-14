package escape.api.models;

import com.fasterxml.jackson.databind.cfg.ContextAttributes.Impl;

import escape.api.ChangeText;
import escape.domain.Implementation;
import escape.domain.Playable;

public class GameStatusDTO {

    public boolean endOfGame;
    public boolean won;
    public String comment;

    public GameStatusDTO(
            Playable escape) {
        this.endOfGame = false;
        this.won = false;
        this.comment = escape.getComments(changeFlavourTextDTO.getID()); 
        }
    

    public boolean getEndOfGame() {
        return endOfGame;
    }

    public boolean getWinner() {
        return won;
    }
}
