import { Injectable } from '@angular/core';
import {Product} from "../models/Product";
import {PanierLigne} from "../models/PanierLigne";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }
  panier: PanierLigne[] = [];

  addToPanier(product: Product) {
    const existingItem = this.panier.find(item => item.produit.id === product.id);

    if (existingItem) {
      existingItem.qte++;
    } else {
      this.panier.push(new PanierLigne(product, 1));
    }
  }

  getPanier(): PanierLigne[] {
    return this.panier;
  }

}
