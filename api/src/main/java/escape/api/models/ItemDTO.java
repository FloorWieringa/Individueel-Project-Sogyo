package escape.api.models;

public class ItemDTO {

	public int index;
	public int nrOfStones;
	public boolean heldStatus;

	public ItemDTO(int index, boolean heldStatus) {
		this.index = index;
		this.heldStatus = false;
	}

	public int getIndex() {
		return index;
	}

	public boolean getHeldStatus() {
		return heldStatus;
	}
}