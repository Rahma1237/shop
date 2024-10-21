import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PanierLigne} from "../../models/PanierLigne";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-panier-item',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './panier-item.component.html',
  styleUrl: './panier-item.component.css'
})

export class PanierItemComponent implements OnInit{
  @Input() panierligne!: PanierLigne;
  @Output() panierligneChange: EventEmitter<PanierLigne> = new EventEmitter<PanierLigne>();
  @Output() deleteItemEvent = new EventEmitter<PanierLigne>();

  minus(): void {
    if (this.panierligne.qte > 1) {
      this.panierligne.qte--;
      this.emitChange();
    }
  }

  plus(): void {
    this.panierligne.qte++;
    this.emitChange();
  }

  emitChange(): void {
    this.panierligneChange.emit(this.panierligne);
  }

  ngOnInit(): void {
  }

  deleteitem() {
    this.deleteItemEvent.emit(this.panierligne);
  }
}
