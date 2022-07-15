package escape.domain;

public class Implementation implements Playable {

    Player player;
    Items items;
    
    public Implementation(String namePlayer){
        player = new Player(namePlayer);
    }

    @Override
    public String getName() {
        String namePlayer = player.name;
        return namePlayer;
    }

    @Override
    public String getComments(int id) {
        return Items.retrieveComments(id);
    }

    @Override
    public Items getItems() {
        return items;
    }
}
