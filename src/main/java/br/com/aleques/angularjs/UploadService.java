package br.com.aleques.angularjs;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import br.com.aleques.angularjs.rest.form.UploadForm;

@Path(value="/UploadService")
public class UploadService {

	@POST
	@Path(value="/upload")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON)
	public Response uploadFiles(@MultipartForm UploadForm uploadForm) {
		
		System.out.println("testeeee");
		System.out.println(uploadForm.getTokenSMS());
		System.out.println(uploadForm.getArquivos());
		
		return Response.status(Response.Status.OK).build();
	}
}
