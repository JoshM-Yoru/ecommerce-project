package com.example.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.models.Item;
import com.example.models.ItemType;
import com.example.repositories.ItemRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ItemService {

  ItemRepository itemRepo;

  public Item createItem(String name, Double price, String description, String imageUrl,
      String gender, String itemType) {

    ItemType type = ItemType.valueOf(itemType.toUpperCase());
    Integer quantity = 100;
    String itemSize = "";

    Item newItem =
        new Item(0, name, price, quantity, description, imageUrl, gender, type, itemSize);
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
    updateItem.setGender(i.getGender());
    updateItem.setItemType(i.getItemType());


    return itemRepo.save(updateItem);
  }

  public String deleteItem(Integer id) {
    Item i = itemRepo.findById(id).get();
    itemRepo.delete(i);

    return "Item has been deleted";
  }



}


