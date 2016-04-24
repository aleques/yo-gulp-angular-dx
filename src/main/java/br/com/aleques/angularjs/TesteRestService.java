package br.com.aleques.angularjs;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path(value="/teste")
public class TesteRestService {

	@GET
    @Path("/helo")
    @Produces(MediaType.APPLICATION_JSON)
    public String getHelloWorldJSON() {
        return "Hellowww world!";
    }
}
