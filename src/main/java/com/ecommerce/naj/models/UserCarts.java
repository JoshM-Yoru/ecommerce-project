package com.ecommerce.naj.models;

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

  private String cartUUID;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", referencedColumnName = "user_id")
  private User userId;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "item_id", referencedColumnName = "item_id")
  private Item itemId;

  private Integer amount;

}
