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
@Table(name = "purchased_items")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PurchasedItems {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  @Column(name = "item_number")
  private Integer itemNumber;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "item_id", referencedColumnName = "item_id")
  private Item item;

  @Column(name = "size_of_item")
  private String itemSize;

  private Integer quantity;

  private Double price;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "receipt_number", referencedColumnName = "receipt_number")
  private Receipt receiptNumber;

}
