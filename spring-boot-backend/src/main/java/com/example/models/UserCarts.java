package com.example.models;

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
@Table(name = "user_carts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCarts {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Integer cartItemNumber;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "receipt_number", referencedColumnName = "receipt_number")
  private Receipt receiptNumber;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "item_id", referencedColumnName = "item_id")
  private Item itemId;

  private Integer amount;

}
