package com.ecommerce.naj.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.naj.models.PurchasedItems;

public interface PurchasedItemsRepository extends JpaRepository<PurchasedItems, Integer> {

}
