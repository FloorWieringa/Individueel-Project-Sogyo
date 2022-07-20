package escape.domain;

public class Items {
    public String itemName;
    public boolean holding;
    public boolean found;

    public Items (String name, boolean heldStatus, boolean inPossession){
        this.itemName = name;
        this.holding = heldStatus;
        this.found = inPossession;
    }
}
