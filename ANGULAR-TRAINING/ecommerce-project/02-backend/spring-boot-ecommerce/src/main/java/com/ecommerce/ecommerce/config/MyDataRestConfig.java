package com.ecommerce.ecommerce.config;

import com.ecommerce.ecommerce.entity.Product;
import com.ecommerce.ecommerce.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
//RepositoryRestConfigure: Component to configure and customize the setup of Spring Data REST.
//https://www.baeldung.com/spring-data-rest-customize-http-endpoints
public class MyDataRestConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};
        //disable HTTP methods for Product: PUT, POST and Delete
        config.getExposureConfiguration().forDomainType(Product.class)
                .withItemExposure((metadata, httpMethods)-> httpMethods.disable(theUnsupportedActions) )
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable((theUnsupportedActions)));

        //disable HTTP methods for ProductCategory: PUT, POST and Delete
        config.getExposureConfiguration().forDomainType(ProductCategory.class)
                .withItemExposure((metadata, httpMethods)-> httpMethods.disable(theUnsupportedActions) )
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable((theUnsupportedActions)));
    }
}
