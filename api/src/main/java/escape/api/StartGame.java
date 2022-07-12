package escape.api;

import jakarta.servlet.http.*;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;

import escape.api.models.*;
import escape.domain.Playable;

@Path("/start")
public class StartGame {
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response start(
        @Context HttpServletRequest request,
        PlayerInputDTO players) {
            HttpSession session = request.getSession(true);
            Playable escape = new Playable();
            session.setAttribute("escape", escape);
            var output = new EscapeDTO(escape);
            return Response.status(200).entity(output).build();
        
    }
}
