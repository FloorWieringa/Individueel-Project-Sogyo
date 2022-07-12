package escape.api.models;

import escape.domain.Playable;

public class PlayerDTO {

	public String name;
	public ItemDTO[] items = new ItemDTO[7];

	public PlayerDTO(
			Playable escape,
			String name) {
		this.name = name;
		// int firstHoleIndex = this.name == escape.getNameOfPlayerOne() ? 0 : 7;
		// for (int i = 0; i < 7; ++i) {
		// 	this.pits[i] = new PitDTO(
		// 			firstHoleIndex + i,
		// 			escape.getStonesForPit(i + firstHoleIndex));
		// }
	}

	public String getName() {
		return name;
	}

	public ItemDTO[] getItems() {
		return items;
	}
}