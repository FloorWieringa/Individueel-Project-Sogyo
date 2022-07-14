package escape.api;

import jakarta.servlet.http.*;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;

import escape.api.models.*;
import escape.domain.Implementation;
import escape.domain.Playable;

@Path("change")
public class ChangeText {
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response change(
            @Context HttpServletRequest request, changeFlavourTextDTO id) {
        HttpSession session = request.getSession();
        Playable Escape = (Playable) session.getAttribute("escape");
        Escape.getComments(id.id);
        session.setAttribute("escape", Escape);
        EscapeDTO output = new EscapeDTO(Escape);        
        return Response.status(200).entity(output).build();
    }
}
