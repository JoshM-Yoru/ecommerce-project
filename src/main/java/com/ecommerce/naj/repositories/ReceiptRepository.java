package com.ecommerce.naj.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.naj.models.Receipt;

@Repository
public interface ReceiptRepository extends JpaRepository<Receipt, Integer> {
  List<Receipt> getReceiptsByUser(Integer u);
}
