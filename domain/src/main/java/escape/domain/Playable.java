package escape.domain;

public interface Playable {
    
    String getName();

    String getComments();

    Items[] getItems();

    void setCommentID(int id);

    int getCommentID();

    // String getItem();

    void addToInventory(String item);

    Items getItem();

}
