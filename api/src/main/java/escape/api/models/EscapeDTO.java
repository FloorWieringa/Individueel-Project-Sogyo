package escape.api.models;

import escape.domain.Playable;

public class EscapeDTO {

    public GameStatusDTO gameStatus;
    public PlayerDTO[] players;

    public EscapeDTO(
            Playable Escape) {
        players = new PlayerDTO[2];
        //players[0] = new PlayerDTO(Escape, Escape.getNameOfPlayerOne());
        gameStatus = new GameStatusDTO(Escape);
    }

    public PlayerDTO[] getPlayers() {
        return players;
    }

    public GameStatusDTO getGameStatus() {
        return gameStatus;
    }
}