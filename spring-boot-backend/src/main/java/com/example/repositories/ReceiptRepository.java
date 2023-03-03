package com.example.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.models.Receipt;

@Repository
public interface ReceiptRepository extends JpaRepository<Receipt, Integer> {

  List<Receipt> getReceiptsByUser(Integer u);

}
