package com.ecommerce.naj.exceptions;

public class InvalidCredentialsException extends RuntimeException {

  private static final long serialVersionUID = 1L;

  public InvalidCredentialsException() {
    super("Invalid Credentials");
  }
}
