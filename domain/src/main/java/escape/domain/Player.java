package escape.domain;

public class Player {
    public String name;
    public Items items;

    public Player(String name){
        this.name = name;
    }

    Items wire = new Items("Wire", false, false);
    Items slimBook = new Items("Slim book", false, false);
    Items robotHand = new Items("Robot hand", false, false);
    Items fogSpray = new Items("Fog spray", false, false);
    Items rope = new Items("Rope", false, false);
    Items bookModulanium = new Items("Book on modulanium", false, false);
    Items hairStrands = new Items("Hair strands", false, false);
    Items modulanium = new Items("Modulanium", false, false);

    public Items retrieveItems(String name){
        switch(name){
            case "Wire":
                return wire;
            case "Slim book":
                return slimBook;
            case "Robot hand":
                return robotHand;
            case "Fog spray":
                return fogSpray;
            case "Rope":
                return rope;
            case "Book on modulanium":
                return bookModulanium;
            case "Hair strands":
                return hairStrands;
            case "Modulanium":
                return modulanium;
            default:
                return null;
        }
    }

    public void addToInventory(String item){
        retrieveItems(item).found = true;
    }

    public Items[] getInventory(){
        Items[] inventoryItems = {wire, slimBook, robotHand, fogSpray, rope, bookModulanium, hairStrands, modulanium};
        return inventoryItems;
    }
}
