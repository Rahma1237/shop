import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitsService} from "../../services/produits.service";
import {Product} from "../../models/Product";
import {ProductItemComponent} from "../product-item/product-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-search-category',
  standalone: true,
  imports: [
    ProductItemComponent,
    NgForOf
  ],
  templateUrl: './search-category.component.html',
  styleUrl: './search-category.component.css'
})
export class SearchCategoryComponent implements OnInit{
  products: Product[] = [];
  category!: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProduitsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.getProductsByCategory(this.category);
    });

  }

  getProductsByCategory(category: string): void {
    this.productService.getProductsByCategory(category).subscribe(products => {
      this.products = products;
    });
    console.log(this.products)
  }
}
