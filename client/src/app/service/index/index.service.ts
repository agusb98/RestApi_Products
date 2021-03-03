import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IndexService {

  API_URI = 'http://localhost:3000/api/index';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.API_URI}`);
  }
  getProduct(id: string|number){
    return this.http.get(`${this.API_URI}/${id}`);
  }
}
