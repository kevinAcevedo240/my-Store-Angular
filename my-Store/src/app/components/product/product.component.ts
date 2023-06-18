import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../Models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('myProduct') product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: '',
    // rating: {
    //   rate: 0,
    //   count: 0
    // }
  }

  @Output() addProduct = new EventEmitter<Product>();

  onAddToCart(){
    this.addProduct.emit(this.product);
  }

}
