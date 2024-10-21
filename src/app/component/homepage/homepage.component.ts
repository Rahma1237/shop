import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/Product';
import { ProduitsService } from '../../services/produits.service';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProductItemComponent, NgForOf],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  products!: Product[];
  data: any;

  constructor(
    private produitservice: ProduitsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produitservice.getAllProducts().subscribe((value) => {
      this.products = value;
    });
    console.log(this.products);
  }
  openProduct(id: number) {
    this.router.navigate(['/product', id]);
  }
}
