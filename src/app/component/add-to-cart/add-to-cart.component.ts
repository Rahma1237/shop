import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {PanierService} from "../../services/panier.service";

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  @Input() product!: Product;
  constructor(private panierService: PanierService) { }

  addToCart(): void {
    this.panierService.addToPanier(this.product);
  }


}
