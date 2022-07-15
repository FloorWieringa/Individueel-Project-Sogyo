package escape.api.models;

import escape.domain.Playable;
import escape.domain.Implementation;

public class PlayerDTO {

	public String namePlayer;
	public ItemDTO[] items = new ItemDTO[8];

	public PlayerDTO(
			Playable escape,
			String name) {
		this.namePlayer = name;
	}

	public String getName() {
		return namePlayer;
	}

	public ItemDTO[] getItems() {
		return items;
	}
}