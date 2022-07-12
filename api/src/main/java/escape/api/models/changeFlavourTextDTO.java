package escape.api.models;

public class changeFlavourTextDTO {

	public String id;

	public changeFlavourTextDTO(String id) {
		int textID = Integer.parseInt(id);
		textID = textID + 1;
	}
}