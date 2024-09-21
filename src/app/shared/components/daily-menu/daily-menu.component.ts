import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';



@Component({
  selector: 'app-daily-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-menu.component.html'
})

export class DailyMenuComponent  {

  public dailyMenu: Product[] = [
    {
      name: 'Ensalada César',
      price: 12.50,
      category: 'Aperitivo',
      imageUrl: 'https://example.com/images/caesar-salad.png',
      isNew: false,
      isOnSale: false,
    },
    {
      name: 'Pollo a la Parrilla',
      price: 25.00,
      category: 'Plato Principal',
      imageUrl: 'https://example.com/images/grilled-chicken.png',
      isNew: true,
      isOnSale: true,
      salePrice: 20.00,
    },
    {
      name: 'Limonada',
      price: 5.00,
      category: 'Bebida',
      imageUrl: 'https://example.com/images/lemonade.png',
      isNew: false,
      isOnSale: false,
    },
    {
      name: 'Pastel de Chocolate',
      price: 8.00,
      category: 'Postre',
      imageUrl: 'https://example.com/images/chocolate-cake.png',
      isNew: true,
      isOnSale: false,
    }
  ];

}
