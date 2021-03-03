import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';

@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.css']
})

export class IndexListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor(private indexService: ProductsService) { }

  ngOnInit() { this.getProducts(); }

  products: any = [];
  
  getProducts(){
    this.indexService.getProducts().subscribe(
      res => { this.products = res; },
      err => console.error(err)
    );
  }

  getProduct(id: string){
    this.indexService.getProduct(id).subscribe(
      res => { this.products = res; },
      err => { console.log(err); }
    )
  }
}
