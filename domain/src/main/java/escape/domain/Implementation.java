package escape.domain;

public class Implementation implements Playable {

    Player player;

    int id;
    
    public Implementation(String namePlayer){
        player = new Player(namePlayer);
    }

    @Override
    public String getName() {
        String namePlayer = player.name;
        return namePlayer;
    }

    @Override
    public String getComments() {
        return Items.retrieveComments(id);
    }

    @Override
    public Items getItems(String name) {
        return player.retrieveItems(name);
    }

    @Override
    public void setCommentID(int id) {
        this.id = id;        
    }

    @Override
    public int getCommentID() {
        return id;
    }

    // @Override
    // public String getItem() {
    //     return player.itemName;
    // }

    @Override
    public void addToInventory(String item) {
        player.addToInventory(item);
        
    }
}
