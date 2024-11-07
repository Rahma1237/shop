import { PanierLigne } from './PanierLigne';
import { Product } from './Product';

export class Commande {
  userId: string | undefined; // User ID associated with the order
  date: Date; // Date of the order
  items: PanierLigne[]; // Array of items in the order
  total: number; // Total price of the order

  constructor(userId: string, date: Date, items: PanierLigne[], total: number) {
    this.userId = userId;
    this.date = date;
    this.items = items;
    this.total = total;
  }
}
