package escape.api.models;

import escape.domain.Playable;
import escape.domain.Implementation;

public class EscapeDTO {

    public GameStatusDTO gameStatus;
    public PlayerDTO player;
    public changeFlavourTextDTO id;

    public EscapeDTO(
            Playable Escape) {
        player = new PlayerDTO(Escape, Escape.getName());
        gameStatus = new GameStatusDTO(Escape);
    }

    public PlayerDTO getPlayers() {
        return player;
    }

    public GameStatusDTO getGameStatus() {
        return gameStatus;
    }

    public changeFlavourTextDTO getID(){
        return id;
    }
}