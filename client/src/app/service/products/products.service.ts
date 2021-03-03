import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  API_URI = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.API_URI}`);
  }

  getProduct(id: string|number){
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveProduct(product: Product){
    return this.http.post(`${this.API_URI}/`, product);
  }

  deleteProduct(id: string|number){
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  editProduct(id: string|number, editProduct: Product): Observable <Product>{
    return this.http.put(`${this.API_URI}/${id}`, editProduct);
  }
}
