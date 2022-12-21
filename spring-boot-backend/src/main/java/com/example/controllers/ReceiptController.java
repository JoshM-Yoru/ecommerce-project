package com.example.controllers;

import java.util.LinkedHashMap;
import java.util.List;

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

import com.example.models.Item;
import com.example.models.Receipt;
import com.example.models.User;
import com.example.services.ReceiptService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("receipts")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class ReceiptController {
	
	private ReceiptService rServ;
	
	@PostMapping("/create")
	public Receipt create(@RequestBody ReceiptRegisterObject rro) {
		Integer userId = rro.userId;
		List<Item> items = rro.items;
		Integer amountOfItems = rro.amountOfItems;
		return rServ.createReceipt(userId, items, amountOfItems);
	}
	
	@GetMapping("/read")
	public Receipt read(@RequestBody LinkedHashMap<String, Integer> body) {
		return rServ.readReceipt(body.get("id"));
	}
	
	@GetMapping("/readuser")
	public List<Receipt> readUser(@RequestParam(name = "id") Integer id) {
		return rServ.getReceiptByUser(id);
	}
	
	@PutMapping("/update")
	public Receipt update(@RequestBody Receipt r) {
		return rServ.updateReceipt(r);
	}
	
	@DeleteMapping("/delete")
	public String delete(@RequestBody LinkedHashMap<String, Integer> body) {
		return rServ.deleteReceipt(body.get("id"));
	}
	
	
}

class ReceiptRegisterObject {
	public Integer userId;
	public List<Item> items;
	public Integer amountOfItems;
}
