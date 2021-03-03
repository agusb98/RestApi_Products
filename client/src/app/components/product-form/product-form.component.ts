import { Component, HostBinding, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../../service/products/products.service'

import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  product: Product = {
    id: 0,
    name: '',
    sex: 'unisex',
    quantity: 0,
    price: 0,
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;
  constructor(
    private productsService: ProductsService,
    private router: Router, 
    private activedRoute: ActivatedRoute
  ){ }

  ngOnInit() { 
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.productsService.getProduct(params.id)
        .subscribe(
          res => {
            console.log(res);
            console.log(this.product);
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  updateProduct(){
  }

  saveProduct(){
    delete this.product.created_at;
    delete this.product.id;

    this.productsService.saveProduct(this.product)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/products']);
        },
        err => { console.error(err); }
    )
  }

}
