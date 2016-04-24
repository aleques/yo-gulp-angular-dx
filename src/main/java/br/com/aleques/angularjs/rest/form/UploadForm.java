package br.com.aleques.angularjs.rest.form;

import java.util.List;

import javax.ws.rs.FormParam;

import org.jboss.resteasy.annotations.Form;

public class UploadForm {

	@FormParam("tokenSMS")
	private String tokenSMS;
	
	@Form(prefix="myFiles[]")
	private List<byte[]> arquivos;

	public String getTokenSMS() {
		return tokenSMS;
	}

	public void setTokenSMS(String tokenSMS) {
		this.tokenSMS = tokenSMS;
	}

	public List<byte[]> getArquivos() {
		return arquivos;
	}

	public void setArquivos(List<byte[]> arquivos) {
		this.arquivos = arquivos;
	}
	
}
