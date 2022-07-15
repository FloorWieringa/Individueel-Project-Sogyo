package escape.api.models;

public class ItemDTO {

	public int index;
	public boolean heldStatus;
	public boolean inPossession;

	public ItemDTO(int index, boolean heldStatus) {
		this.index = index;
		this.heldStatus = false;
		this.inPossession = false;
	}

	public int getIndex() {
		return index;
	}

	public boolean getHeldStatus() {
		return heldStatus;
	}

	public boolean getInPossession(){
		return inPossession;
	}

}