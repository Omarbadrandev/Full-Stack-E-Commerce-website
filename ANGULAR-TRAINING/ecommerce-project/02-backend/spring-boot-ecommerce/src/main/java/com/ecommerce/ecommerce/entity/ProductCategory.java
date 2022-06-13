package com.ecommerce.ecommerce.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

// Entities in JPA are nothing but POJOs representing data that can be persisted to the database.
// An entity represents a table stored in a database. Every instance of an entity represents a row in the table.
@Entity
@Table(name ="product_category")
// @Data -- Known bug
//when using OneToMany and ManyToOne Relationships
@Getter
@Setter
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private Long id;

    @Column(name ="category_name")
    private String categoryName;

    // Cascade Explanation:
    // Entities that use relationships often have dependencies on the existence of the other entity in the relationship.
    // For example, a line item is part of an order; if the order is deleted, the line item also should be deleted.
    // This is called a cascade delete relationship.

    //  MappedBy explanation:
    //  MappedBy signals hibernate that the key for the relationship is on the other side.
    //  This means that although you link 2 tables together, only 1 of those tables has a foreign key constraint to the other one.
    //  MappedBy allows you to still link from the table not containing the constraint to the other table.

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")

    //  A Set is a Collection that cannot contain duplicate elements. It models the mathematical set abstraction.
    //  The Set interface contains only methods inherited from Collection and adds the restriction that duplicate elements are prohibited.
    //  Set also adds a stronger contract on the behavior of the equals and hashCode operations, allowing Set instances to be compared meaningfully even if their implementation types differ.
    //  Two Set instances are equal if they contain the same elements.

    private Set<Product> products;
}
