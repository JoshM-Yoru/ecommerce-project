package com.example.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="receipts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Receipt {
	

	@Id
	@GeneratedValue(strategy=GenerationType.TABLE)
	@Column(name="receipt_number")
	private Integer receiptNumer;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="created_By")
	private User user;
	
	@ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(
			name="Items_On_Receipt",
			joinColumns = {@JoinColumn(name="receiptNumer")},
			inverseJoinColumns = {@JoinColumn(name="ItemId")}
	)
	private List<Item> items;
	
	private Double total;
	
	@Column(name="created_Date/Time")
	private String dateTime;
	
	private Integer amountOfItems;
	
	public Receipt(User user, List<Item> items, Double total, String dateTime, Integer amountOfItems) {
		this.user = user;
		this.items = items;
		this.total = total;
		this.dateTime = dateTime;
		this.amountOfItems = amountOfItems;
	}
}
