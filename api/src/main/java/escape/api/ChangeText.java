package escape.api;

import jakarta.servlet.http.*;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;

import escape.api.models.*;
import escape.domain.Playable;

@Path("/change")
public class ChangeText {
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response change(
            @Context HttpServletRequest request, changeFlavourTextDTO id) {
        // Retrieve HTTP session.
        HttpSession session = request.getSession();

        // Retrieve game.
        Playable Escape = (Playable)session.getAttribute("escape");
        
        // Change the text.
        

        // Play a pit.
        session.setAttribute("escape", Escape);

        // Use the game to create a DTO.
        EscapeDTO output = new EscapeDTO(Escape);        

        // Send DTO back in response.
        return Response.status(200).entity(output).build();
    }
}
