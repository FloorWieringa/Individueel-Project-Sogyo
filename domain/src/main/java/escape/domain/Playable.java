package escape.domain;

public interface Playable {
    
    String getName();

    String getComments();

    Items getItems(String name);

    void setCommentID(int id);

    int getCommentID();

    // String getItem();

    void addToInventory(String item);

}
