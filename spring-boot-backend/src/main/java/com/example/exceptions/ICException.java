package com.example.exceptions;

public class ICException extends RuntimeException {

	/**
	 * Invalid Credentials Exception
	 */
	private static final long serialVersionUID = 1L;
	public ICException() {
		super("Invalid Credentials");
	}

}
