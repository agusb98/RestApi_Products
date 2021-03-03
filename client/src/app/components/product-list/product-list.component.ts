import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor(private productsService: ProductsService) { }

  ngOnInit() { this.getProducts(); }

  products: any = [];
  
  getProducts(){
    this.productsService.getProducts().subscribe(
      res => { this.products = res; },
      err => console.error(err)
    );
  }

  getProduct(id: string){
    this.productsService.getProduct(id).subscribe(
      response => { 
        console.log(response); 
      },
      err => { console.log(err); }
    )
  }

  saveProduct(product: Product){
    this.productsService.saveProduct(product).subscribe(
      response => { console.log(response); },
      err => { console.log(err); }
    )
  }

  deleteProduct(id: string){
      this.productsService.deleteProduct(id).subscribe(
        response => { 
          console.log(response); 
          this.getProducts();
        },
        err => { console.log(err); }
      )
  }
}
