package escape.api.models;

import escape.domain.Items;
import escape.domain.Playable;

public class PlayerDTO {

	public String namePlayer;
	public ItemDTO[] items;

	public PlayerDTO(
			Playable escape,
			String name, Items[] item) {
		this.namePlayer = name;
		this.items = new ItemDTO [item.length];
		for (var i=0; i < item.length; i++){
			var currentItem = item[i];
			var DTOItem = new ItemDTO(currentItem);
			this.items[i] = DTOItem;
		}
	}

	public String getName() {
		return namePlayer;
	}

	public ItemDTO[] getItems() {
		return items;
	}
}