package escape.api.models;

import escape.domain.Items;

public class ItemDTO {

	public String name;
	public boolean heldStatus;
	public boolean inPossession;

	public ItemDTO(Items currentItem) {
		this.name = currentItem.itemName;
		this.heldStatus = currentItem.holding;
		this.inPossession = currentItem.found;
	}

	public String getName() {
		return name;
	}

	public boolean getHeldStatus() {
		return heldStatus;
	}

	public boolean getInPossession(){
		return inPossession;
	}

}