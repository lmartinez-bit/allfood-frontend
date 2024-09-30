import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Adicional } from '../../../interfaces/producto-pedido';

@Component({
  selector: 'app-porcion-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './porcion-card.component.html',
  styleUrl: './porcion-card.component.css'
})
export class PorcionCardComponent {

  @Input() porcion!: Adicional; // El producto que contiene name, price, imgUrl
  @Output() porcionChanged = new EventEmitter<any>();

  isSelected: boolean = false;

  toggleSelection() {
    this.isSelected = !this.isSelected;
    this.porcionChanged.emit({
      porcion: this.porcion,
      selected: this.isSelected
    });
  }

  resetSelection() {
    this.isSelected = false;
  }

}
