package com.example.models;

public class NewUserObject {

  public String firstName;
  public String lastName;
  public String email;
  public String password;
  public UserAddress shippingAddress = new UserAddress();
  public UserAddress billingAddress = new UserAddress();

}
