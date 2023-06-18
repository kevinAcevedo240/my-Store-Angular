import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart : Product[] = [];
  total = 0;
  products: Product[] =[];
  today = new Date();
  date = new Date(2023, 5, 17, 9, 30);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void{
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
    });
  }

  onAddToShoppingCart(product : Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
