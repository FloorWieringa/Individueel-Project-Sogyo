package escape.api;

import jakarta.servlet.http.*;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;

import escape.api.models.*;
import escape.domain.Playable;

@Path("itemheldtrue")
public class ItemHeldToTrue {
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response item(
            @Context HttpServletRequest request, ItemInteractionDTO item) {
        HttpSession session = request.getSession();
        Playable Escape = (Playable) session.getAttribute("escape");
        Escape.heldToTrue(item.getItem());
        session.setAttribute("escape", Escape);
        EscapeDTO output = new EscapeDTO(Escape);  
        return Response.status(200).entity(output).build();
    }
}
