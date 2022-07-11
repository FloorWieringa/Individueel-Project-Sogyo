package mancala.api.models;

public class changeFlavourTextDTO {

	public String id;

	public void changeFlavourTextDTO(String id) {
		int textID = Integer.parseInt(id);
		textID = textID + 1;
	}
}