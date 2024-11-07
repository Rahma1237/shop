import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import nécessaire pour les directives Angular comme ngClass
import { PanierService } from '../services/panier.service';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-ordres',
  standalone: true, // Déclare le composant comme autonome
  imports: [CommonModule], // Import de CommonModule pour utiliser ngClass, ngIf, etc.
  templateUrl: './ordres.component.html',
  styleUrls: ['./ordres.component.css'],
})
export class OrdresComponent implements OnInit {
  panierItems: any[] = [];
  total = 0;
  message = '';
  messageType = '';

  constructor(
    private panierService: PanierService,
    private commandeService: CommandeService
  ) {}

  ngOnInit(): void {
    this.panierItems = this.panierService.getPanier();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.panierItems.reduce(
      (acc, item) => acc + item.quantite * item.prixUnitaire,
      0
    );
  }

  validateCommande(): void {
    if (this.panierItems.length > 0) {
      this.commandeService
        .validateCommande(this.panierItems, this.total)
        .then(() => {
          this.message = 'Votre commande a été validée avec succès !';
          this.messageType = 'success';
        })
        .catch((error) => {
          console.error('Erreur lors de la validation de la commande:', error);
          this.message = 'Erreur lors de la validation de la commande.';
          this.messageType = 'error';
        });
    } else {
      this.message = 'Aucun produit dans le panier pour valider la commande.';
      this.messageType = 'error';
    }
  }
}
