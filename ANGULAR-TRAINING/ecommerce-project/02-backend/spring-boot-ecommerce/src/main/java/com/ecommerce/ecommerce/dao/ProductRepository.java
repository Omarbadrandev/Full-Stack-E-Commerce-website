package com.ecommerce.ecommerce.dao;

import com.ecommerce.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

// Identify Entity type and Primary key type in the JpaRepository
@CrossOrigin("*")
public interface ProductRepository extends JpaRepository<Product, Long> {

}
