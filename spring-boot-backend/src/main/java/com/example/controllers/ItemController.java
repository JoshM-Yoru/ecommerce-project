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
import org.springframework.web.bind.annotation.RestController;
import com.example.models.Item;
import com.example.services.ItemService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("items")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ItemController {

  private ItemService iServ;

  @PostMapping("/create")
  public Item create(@RequestBody NewItemObject body) {

    return iServ.createItem(body.name, body.price, body.description, body.imageUrl, body.gender,
        body.itemType);
  }

  @GetMapping("/read")
  public Item read(@RequestBody LinkedHashMap<String, Integer> body) {
    return iServ.readItem(body.get("id"));
  }

  @GetMapping("/read/all")
  public List<Item> readAll() {
    return iServ.readAllItems();
  }

  @PutMapping("/update")
  public Item update(@RequestBody Item item) {
    return iServ.updateItem(item);
  }

  @DeleteMapping("/delete")
  public String delete(@RequestBody LinkedHashMap<String, Integer> body) {
    return iServ.deleteItem(body.get("id"));
  }


}


class NewItemObject {
  public String name;
  public Double price;
  public String description;
  public String imageUrl;
  public String gender;
  public String itemType;
}
