package com.ecommerce.naj.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_addresses")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserAddress {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "address_id")
  private Integer addressId;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_location_id", referencedColumnName = "user_id")
  private User user;

  @Column(name = "street_address")
  private String streetAddress;

  @Column(name = "apartment_number")
  private String apartmentNumber;

  private String city;

  private String state;

  private String country;

  @Column(name = "zip_code")
  private String zipCode;

}
