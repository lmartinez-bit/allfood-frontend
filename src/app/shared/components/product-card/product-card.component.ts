import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../interfaces/product.interface';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent  {

  private stepper!: Stepper;


  public product: Product = {
    name: 'Lomo Saltado',
    price: 15.00,
    category: '',
    imageUrl: '',
    isNew: false,
    isOnSale: false
  }

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      import('bs-stepper').then((module) => {
        const Stepper = module.default;
        // Inicializa bs-stepper aquí
        this.stepper = new Stepper(document.querySelector('#stepper1')!, {
          linear: false,
          animation: true
        })
      });
    }
  }

}
