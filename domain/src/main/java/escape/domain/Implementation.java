package escape.domain;

public class Implementation implements Playable {

    Player player;

    int id;
    String name;
    
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
    public Items getItem() {
        return player.retrieveItems(name);
    }

    @Override
    public Items[] getItems() {
        return player.getInventory();
    }

    @Override
    public void setCommentID(int id) {
        this.id = id;        
    }

    @Override
    public int getCommentID() {
        return id;
    }

    @Override
    public void addToInventory(String item) {
        player.addToInventory(item);
        
    }
}
