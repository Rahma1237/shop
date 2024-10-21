import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProduitsService } from '../../services/produits.service';
import { ActivatedRoute } from '@angular/router';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { NgFor } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-detailproduct',
  standalone: true,
  imports: [AddToCartComponent, NgFor, NgIf],
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css'], // Corrigez "styleUrl" en "styleUrls"
})
export class DetailproductComponent implements OnInit {
  product!: Product;
  commantaire!: FormGroup; // Formulaire de commentaire
  zoomedImage: string | null = null; // Variable pour l'image agrandie

  constructor(
    private produitservice: ProduitsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produitservice.getProductById(id).subscribe((value) => {
        this.product = value;
      });
      // Initialisation du formulaire de commentaire
      this.commantaire = new FormGroup({
        message: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
      });
    }
  }
  // Fonction de soumission du formulaire
  register() {
    if (this.commantaire.valid) {
      console.log(this.commantaire.value);
      // Logique de soumission du commentaire
    } else {
      console.log('Le formulaire est invalide');
    }
  }
  // Méthodes pour gérer le zoom
  showZoomedImage(imageUrl: string) {
    this.zoomedImage = imageUrl;
  }

  hideZoomedImage() {
    this.zoomedImage = null;
  }
}
