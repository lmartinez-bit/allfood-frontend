import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DailyMenuComponent } from "../../shared/components/daily-menu/daily-menu.component";
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule, DailyMenuComponent, ProductCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  categories: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4', 'Categoría 5'];
  selectedCategory: string | null = null;

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

}
