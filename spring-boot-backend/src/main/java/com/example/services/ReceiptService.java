package com.example.services;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.models.Item;
import com.example.models.Receipt;
import com.example.models.User;
import com.example.repository.ItemRepository;
import com.example.repository.ReceiptRepository;
import com.example.repository.UserRepository;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class ReceiptService {
	
	private ReceiptRepository rRepo;
	private UserRepository uRepo;
	private ItemRepository iRepo;
	
	//used is email is passed(main one to use)
	public Receipt createReceipt(String email, List<Item> items, Double total) {
		User u = uRepo.getByEmail(email).get();
		DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
		String now = LocalDateTime.now().format(format);
		Integer amountOfItems = items.size();
		Receipt rec = new Receipt(u, items, total, now, amountOfItems);
		return rRepo.save(rec);
	}
	
	//used if userId is passed(Just an extra precaution)
	public Receipt createReceipt(Integer id, List<Item> items, Integer amountOfItems) {
		User u = uRepo.findById(id).get();
		DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
		String now = LocalDateTime.now().format(format);
		List<Item> receiptItems = new ArrayList<>();
		Double total = 00.00;
		
		for(Item i : items) {
			Item addItem = iRepo.findById(i.getItemId()).get();
			addItem.setAmount(i.getAmount());
			total += addItem.getPrice() * i.getAmount();
			receiptItems.add(addItem);
		}
		
		total *= 1.59;
		
		if(total < 952.38) {
			total += 2;
		}
		
		DecimalFormat df = new DecimalFormat("0.00");
		total = Double.parseDouble(df.format(total));
		
		
		
		
		Integer amountOfItemsOnReceipt = receiptItems.size();
		Receipt rec = new Receipt(u, receiptItems, total, now, amountOfItemsOnReceipt);
		return rRepo.save(rec);
	}
	
	public Receipt readReceipt(Integer id) {
		return rRepo.findById(id).get();
	}
	
	public Receipt updateReceipt(Receipt r) {
		Receipt updateReceipt = rRepo.findById(r.getReceiptNumer()).get();
		
		updateReceipt.setAmountOfItems(r.getAmountOfItems());
		updateReceipt.setDateTime(r.getDateTime());
		updateReceipt.setItems(r.getItems());
		updateReceipt.setTotal(r.getTotal());
		updateReceipt.setUser(r.getUser());
		
		return rRepo.save(updateReceipt);
	}
	
	public String deleteReceipt(Integer id) {
		rRepo.delete(rRepo.findById(id).get());
		return "Receipt has been deleted";
	}
	
	public List<Receipt> getReceiptByUser(Integer u) {
		List<Receipt> all = rRepo.findAll();
		List<Receipt> result = new ArrayList<>();
		for(Receipt r : all) {
			if(r.getUser().getUserId() == u) {
				result.add(r);
			}
		}		
		return result;
	}

}
