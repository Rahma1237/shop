import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {AddToCartComponent} from "../add-to-cart/add-to-cart.component";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    AddToCartComponent
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;

}
