package com.example.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.models.Item;
import com.example.repositories.ItemRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ItemService {

  ItemRepository itemRepo;

  public Item createItem(String name, Double price, Integer amount, String description,
      String imageUrl) {
    Item newItem = new Item(0, name, price, amount, description, imageUrl);
    return itemRepo.save(newItem);
  }

  public Item readItem(Integer id) {
    return itemRepo.findById(id).get();
  }

  public List<Item> readAllItems() {
    return itemRepo.findAll();
  }

  public Item updateItem(Item i) {

    Item updateItem = itemRepo.findById(i.getItemId()).get();

    updateItem.setName(i.getName());
    updateItem.setPrice(i.getPrice());
    updateItem.setDescription(i.getDescription());
    updateItem.setImageUrl(i.getImageUrl());


    return itemRepo.save(updateItem);
  }

  public String deleteItem(Integer id) {
    Item i = itemRepo.findById(id).get();
    itemRepo.delete(i);

    return "Item has been deleted";
  }



}


