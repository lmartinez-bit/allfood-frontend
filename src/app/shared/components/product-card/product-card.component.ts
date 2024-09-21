import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent  {


  public product: Product = {
    name: 'Lomo Saltado',
    price: 15.00,
    category: '',
    imageUrl: '',
    isNew: false,
    isOnSale: false
  }

}
