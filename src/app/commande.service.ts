import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  validateCommande(items: any[], total: number): Promise<void> {
    // Simulation d'un appel API pour valider la commande
    return new Promise((resolve, reject) => {
      // Remplacez cette logique par un appel API réel si nécessaire
      if (items && total > 0) {
        console.log('Commande validée:', { items, total });
        resolve();
      } else {
        reject('Aucune commande valide.');
      }
    });
  }
}
