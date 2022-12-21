package com.example.controllers;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.User;
import com.example.services.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("users")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

  private UserService uServ;

  @PostMapping("/register")
  public User register(@RequestBody LinkedHashMap<String, String> body) {
    String firstName = body.get("firstName");
    String lastName = body.get("lastName");
    String email = body.get("email");
    String password = body.get("password");
    String address = "";
    String phoneNumber = "";

    return uServ.registerUser(firstName, lastName, email, password, address, phoneNumber);
  }

  @GetMapping("/user")
  public User readUser(@RequestParam(name = "id") Integer id) {
    return uServ.readUser(id);
  }

  @PutMapping("/update")
  public User update(@RequestBody User user) {
    return uServ.updateUser(user);
  }

  @DeleteMapping("/delete")
  public String delete(@RequestBody LinkedHashMap<String, Integer> body) {
    return uServ.deleteUser(body.get("id"));
  }

  @PostMapping("/login")
  public User login(@RequestBody LinkedHashMap<String, String> body) {
    String email = body.get("email");
    String password = body.get("password");

    return uServ.loginUser(email, password);
  }

}
