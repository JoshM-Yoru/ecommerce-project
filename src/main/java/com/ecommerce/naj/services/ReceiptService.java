package com.ecommerce.naj.services;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.naj.models.PurchasedItems;
import com.ecommerce.naj.models.Receipt;
import com.ecommerce.naj.models.User;
import com.ecommerce.naj.repositories.PurchasedItemsRepository;
import com.ecommerce.naj.repositories.ReceiptRepository;
import com.ecommerce.naj.repositories.UserRepository;
import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ReceiptService {

  private ReceiptRepository rRepo;
  private UserRepository uRepo;
  private PurchasedItemsRepository piRepo;

  private Integer createReceiptNumber(Integer userId) {
    Integer base = new Random().nextInt(1000000, 9999999);
    Integer receiptNumber = Integer.parseInt(userId.toString() + base.toString());

    return receiptNumber;
  }

  public Receipt createReceipt(Integer userId, List<PurchasedItems> items) {
    DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
    String now = LocalDateTime.now().format(format);
    List<PurchasedItems> purchasedItems = new ArrayList<>();
    Double total = 00.00;
    User user = uRepo.findById(userId).get();

    Integer receiptNumber = createReceiptNumber(userId);

    for (PurchasedItems i : items) {
      PurchasedItems addItem = new PurchasedItems();
      addItem.setItem(i.getItem());
      addItem.setItemSize(i.getItemSize());
      addItem.setQuantity(i.getQuantity());
      total += i.getPrice() * i.getQuantity();
      purchasedItems.add(addItem);
      piRepo.save(addItem);
    }

    total *= 1.07;

    DecimalFormat df = new DecimalFormat("0.00");
    total = Double.parseDouble(df.format(total));

    Receipt rec = new Receipt(receiptNumber, user, total, now);

    return rRepo.save(rec);
  }

  public Receipt readReceipt(Integer id) {
    return rRepo.findById(id).get();
  }

  // public Receipt updateReceipt(Receipt r) {
  // Receipt updateReceipt = rRepo.findById(r.getReceiptNumber()).get();

  // updateReceipt.setDateTime(r.getDateTime());
  // updateReceipt.setItems(r.getItems());
  // updateReceipt.setTotal(r.getTotal());
  // updateReceipt.setUser(r.getUser());

  // return rRepo.save(updateReceipt);
  // }

  public String deleteReceipt(Integer id) {
    rRepo.delete(rRepo.findById(id).get());
    return "Receipt has been deleted";
  }

  public List<Receipt> getReceiptByUser(Integer u) {
    List<Receipt> all = rRepo.findAll();
    List<Receipt> result = new ArrayList<>();
    for (Receipt r : all) {
      if (r.getUser().getUserId() == u) {
        result.add(r);
      }
    }
    return result;
  }

}
