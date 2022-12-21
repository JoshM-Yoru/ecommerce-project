package com.example.exceptions;

public class UAEException extends RuntimeException {

	/**
	 * User Already Exist Exception
	 */
	private static final long serialVersionUID = 1L;
	public UAEException() {
		super("User already has an account");
	}

}
