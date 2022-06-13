package com.ecommerce.ecommerce.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "product")
//this is automatically generate the getter/setter methods for you behind the scenes
//Reduce boilerplace code
@Data
public class Product {
    //generates Id
    @Id
    //Generated Value
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "id" )
    private Long id;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    @Column( name = "sku" )
    private String sku;

    @Column( name= "name" )
    private String name;

    @Column( name = "description" )
    private String description;

    @Column(name = "unit_price")
    //A BigDecimal consists of an arbitrary precision integer unscaled value and a 32-bit integer scale.
    private BigDecimal unitPrice;

    @Column(name = "image_url" )
    private String imageUrl;

    @Column(name = "active")
    private boolean active;

    @Column(name = "units_in_stock")
    private int unitsInStock;

    @Column(name ="date_created")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name ="last_updated")
    // Marks a property as the creation timestamp of the containing entity.
    // A timestamp is a sequence of characters or encoded information identifying when a certain event occurred
    @CreationTimestamp
    private Date lastUpdated;
}
