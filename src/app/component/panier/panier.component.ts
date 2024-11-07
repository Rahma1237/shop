import { Component, OnInit } from '@angular/core';
import { PanierLigne } from '../../models/PanierLigne';
import { RouterLink } from '@angular/router';
import { PanierItemComponent } from '../panier-item/panier-item.component';
import { Product } from '../../models/Product';
import { NgForOf } from '@angular/common';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [RouterLink, PanierItemComponent, NgForOf],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent implements OnInit {
  constructor(private panierService: PanierService) {}

  panier: PanierLigne[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.panier = this.panierService.getPanier();

    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.panier.reduce(
      (acc, curr) => acc + curr.produit.price * curr.qte,
      0
    );
  }

  updateItem(i: number, updatedItem: PanierLigne): void {
    const index = this.panier.findIndex(
      (item) => item.produit.id === updatedItem.produit.id
    );
    if (index !== -1) {
      this.panier[index] = updatedItem;
      this.calculateTotal();
    }
  }

  savechanges() {}

  deleteItem(item: PanierLigne): void {
    const index = this.panier.findIndex((p) => p === item);
    if (index !== -1) {
      this.panier.splice(index, 1);
      this.calculateTotal();
    }
  }
}
