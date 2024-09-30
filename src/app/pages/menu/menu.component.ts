import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DailyMenuComponent } from "../../shared/components/daily-menu/daily-menu.component";
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule, DailyMenuComponent, ProductCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  categories: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4', 'Categoría 5'];
  selectedCategory: string | null = null;
  stepper!: Stepper;

  selectCategory(category: string): void {
    this.selectedCategory = category;
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
