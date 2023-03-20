package com.ecommerce.naj.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "receipts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Receipt {


  @Id
  @Column(name = "receipt_number")
  private Integer receiptNumber;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", referencedColumnName = "user_id")
  private User user;

  @Column(name = "created_Date/Time")
  private String dateTime;

  private Double total;

  public Receipt(Integer receiptNumber, User user, Double total, String dateTime) {
    this.receiptNumber = receiptNumber;
    this.user = user;
    this.total = total;
    this.dateTime = dateTime;
  }
}

