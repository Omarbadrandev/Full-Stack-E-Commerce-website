package com.ecommerce.ecommerce.dao;

import com.ecommerce.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

// @RepositoryRestResource is used to set options on the public Repository interface -
// it will automatically create endpoints as appropriate based on the type of Repository that is being extended
// (i.e. CrudRepository/PagingAndSortingRepository/etc).
// collection Resource Rel contains the Name of JSON entry
// path will be the actual reference for the path product-category
@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "ProductCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {

}
