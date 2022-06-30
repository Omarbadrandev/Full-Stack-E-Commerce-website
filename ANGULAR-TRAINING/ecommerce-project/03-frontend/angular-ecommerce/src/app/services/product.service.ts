import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';
  constructor(private httpClient: HttpClient) {}
  // Angular makes use of observables as an interface to handle a variety of common asynchronous operations. For example:
  // The HTTP module uses observables to handle AJAX requests and responses
  // The Router and Forms modules use observables to listen for and respond to user-input events
  getProductList(): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.products));
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}
