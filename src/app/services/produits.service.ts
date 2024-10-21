import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, pipe} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  keyword:string=""

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any> {
    return this.http.get<any>('https://dummyjson.com/products').pipe(map(value =>
      value.products.map((product:any)=> new Product(
        product.id,
        product.title,
        product.description,
        product.category,
        product.price,
        product.stock,
        product.images
      ))
    ))
  }

  getAllCategories() {
    return this.http.get<any[]>('https://dummyjson.com/products/category-list');
  }
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<any>(`https://dummyjson.com/products/category/${category}`).pipe(
      map(value =>
        value.products.map((product: any) => new Product(
          product.id,
          product.title,
          product.description,
          product.category,
          product.price,
          product.stock,
          product.images
        ))
      )
    );


  }

  getAProductsByKeyWord(keyword:string) {
    return this.http.get<any>(`https://dummyjson.com/products/search?q=${keyword}`).pipe(
      map(value =>
        value.products.map((product: any) => new Product(
          product.id,
          product.title,
          product.description,
          product.category,
          product.price,
          product.stock,
          product.images
        ))
      )
    );
  }

  updatekeyword(keyword: string) {

  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`).pipe(
      map(product => new Product(
        product.id,
        product.title,
        product.description,
        product.category,
        product.price,
        product.stock,
        product.images
      ))
    );
  }
}
