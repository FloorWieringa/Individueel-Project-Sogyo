package escape.api.models;

import escape.domain.Playable;

public class EscapeDTO {

    public GameStatusDTO gameStatus;
    public PlayerDTO player;
    public changeFlavourTextDTO id;    
    public ItemInteractionDTO item;

    public EscapeDTO(
            Playable Escape) {
        player = new PlayerDTO(Escape, Escape.getName(), Escape.getItems());
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

    public ItemInteractionDTO getItem(){
        return item;
    }
}