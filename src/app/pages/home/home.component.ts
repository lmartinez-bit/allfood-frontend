import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { DailyMenuComponent } from "../../shared/components/daily-menu/daily-menu.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent, DailyMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



}
