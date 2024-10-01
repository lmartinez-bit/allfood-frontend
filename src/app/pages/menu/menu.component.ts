import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DailyMenuComponent } from "../../shared/components/daily-menu/daily-menu.component";
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import Stepper from 'bs-stepper';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/product.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule, DailyMenuComponent, ProductCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  categories: string[] = ['Ensaladas', 'Sopas', 'Plato Principal', 'Postres', 'Bebidas', 'Extras'];
  selectedCategory: string | null = null;
  stepper!: Stepper;


  constructor(
    private readonly sp: ProductosService
  ){}

  productos : Producto[] = []

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  __be_GetProductos(){
    this.sp.__getProductos().subscribe((rest:any) => {
      this.productos = rest
    })
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

    this.__be_GetProductos()


  }

}
