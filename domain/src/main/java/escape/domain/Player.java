package escape.domain;

public class Player {
    public String name;
    public Items items;

    public Player(String name){
        this.name = name;
    }

    Items wire = new Items("wire", false, false);
    Items slimBook = new Items("slimBook", false, false);
    Items robotHand = new Items("robotHand", false, false);
    Items fogSpray = new Items("fogSpray", false, false);
    Items rope = new Items("rope", false, false);
    Items bookModulanium = new Items("bookModulanium", false, false);
    Items hairStrands = new Items("hairStrands", false, false);
    Items modulanium = new Items("modulanium", false, false);

    public Items retrieveItems(String name){
        switch(name){
            case "wire":
                return wire;
            case "slimBook":
                return slimBook;
            case "robotHand":
                return robotHand;
            case "fogSpray":
                return fogSpray;
            case "rope":
                return rope;
            case "bookModulanium":
                return bookModulanium;
            case "hairStrands":
                return hairStrands;
            case "modulanium":
                return modulanium;
            default:
                return robotHand;
        }
    }

    public void addToInventory(String item){
        retrieveItems(item).found = true;
}
}
