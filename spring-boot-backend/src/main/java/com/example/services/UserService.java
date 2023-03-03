package com.example.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.exceptions.InvalidCredentialsException;
import com.example.exceptions.UserAlreadyRegisteredException;
import com.example.models.Receipt;
import com.example.models.User;
import com.example.models.UserAddress;
import com.example.repositories.UserRepository;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserService {

  private UserRepository userRepo;

  public User registerUser(String firstName, String lastName, String email, String password,
      UserAddress shippingAddress, UserAddress billingAddress, String phoneNumber) {
    List<Receipt> receipts = new ArrayList<>();
    User u = new User(0, firstName, lastName, email, password, receipts, shippingAddress,
        billingAddress, phoneNumber);

    try {
      User newU = userRepo.save(u);
      return newU;
    } catch (Exception e) {
      throw new UserAlreadyRegisteredException();
    }
  }

  public User loginUser(String email, String password) {
    User u = userRepo.getByEmail(email).orElseThrow(InvalidCredentialsException::new);
    if (!u.getPassword().equals(password)) {
      throw new InvalidCredentialsException();
    }
    return u;
  }

  public User readUser(Integer id) {
    return userRepo.findById(id).get();
  }

  public User updateUser(User updateUser) {
    User prevUser = userRepo.findById(updateUser.getUserId()).get();

    prevUser.setFirstName(updateUser.getFirstName());
    prevUser.setLastName(updateUser.getLastName());
    prevUser.setEmail(updateUser.getEmail());
    prevUser.setShippingAddress(updateUser.getShippingAddress());
    prevUser.setBillingAddress(updateUser.getBillingAddress());
    prevUser.setPhoneNumber(updateUser.getPhoneNumber());
    updateUser.setPassword(prevUser.getPassword());

    return userRepo.save(updateUser);

  }


  public String deleteUser(Integer id) {
    User deleteUser = userRepo.findById(id).get();
    userRepo.delete(deleteUser);
    return "User has been deleted";
  }

}
