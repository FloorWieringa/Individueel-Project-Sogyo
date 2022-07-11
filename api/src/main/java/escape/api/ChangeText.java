package mancala.api;

import jakarta.servlet.http.*;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;

import mancala.api.models.*;
import mancala.domain.Playable;

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
        Playable Mancala = (Playable)session.getAttribute("mancala");
        
        // Change the text.
        

        // Play a pit.
        session.setAttribute("mancala", Mancala);

        // Use the game to create a DTO.
        MancalaDTO output = new MancalaDTO(Mancala);
        //in startMancala: new MancalaDTO(Playable.mancala);
        

        // Send DTO back in response.
        return Response.status(200).entity(output).build();
    }
}
