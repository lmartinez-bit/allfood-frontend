import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../interfaces/product.interface';
import Stepper from 'bs-stepper';
import { PorcionCardComponent } from '../porcion-card/porcion-card.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Adicional } from '../../../interfaces/producto-pedido';
import { CarritoService } from '../../../services/carrito.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CommonModule, PorcionCardComponent, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() stepper!: Stepper;

  ingredientesSeleccionados: Adicional[] = [];
  porcionesSeleccionadas   : Adicional[] = [];
  preferencias            ?: string;
  seleccionar              : boolean = false;

  @ViewChildren(PorcionCardComponent) porcionCards!: QueryList<PorcionCardComponent>;

  porciones: Adicional[] = [
    { adiId: 1, adiNombre: 'product 1', adiImgUrl: 'https://via.placeholder.com/300', adiCategoria: 'porcion', adiCantAdicional: 1, adiPrecio: 10.00 },
    { adiId: 2, adiNombre: 'product 2', adiImgUrl: 'https://via.placeholder.com/300', adiCategoria: 'porcion', adiCantAdicional: 1, adiPrecio: 15.00 },
    { adiId: 3, adiNombre: 'product 3', adiImgUrl: 'https://via.placeholder.com/300', adiCategoria: 'porcion', adiCantAdicional: 1, adiPrecio: 20.00 },
    { adiId: 4, adiNombre: 'product 4', adiImgUrl: 'https://via.placeholder.com/300', adiCategoria: 'porcion', adiCantAdicional: 1, adiPrecio: 25.00 },
    { adiId: 5, adiNombre: 'product 5', adiImgUrl: 'https://via.placeholder.com/300', adiCategoria: 'porcion', adiCantAdicional: 1, adiPrecio: 30.00 },
    { adiId: 6, adiNombre: 'product 6', adiImgUrl: 'https://via.placeholder.com/300', adiCategoria: 'porcion', adiCantAdicional: 1, adiPrecio: 10.00 },
    { adiId: 7, adiNombre: 'ingrediente 1', adiImgUrl: undefined, adiCategoria: 'ingrediente', adiCantAdicional: 1, adiPrecio: 10.00 },
    { adiId: 8, adiNombre: 'ingrediente 2', adiImgUrl: undefined, adiCategoria: 'ingrediente', adiCantAdicional: 1, adiPrecio: 15.00 },
    { adiId: 9, adiNombre: 'ingrediente 3', adiImgUrl: undefined, adiCategoria: 'ingrediente', adiCantAdicional: 1, adiPrecio: 20.00 },
    { adiId: 10, adiNombre: 'ingrediente 4', adiImgUrl: undefined, adiCategoria: 'ingrediente', adiCantAdicional: 1, adiPrecio: 30.00 },
    { adiId: 11, adiNombre: 'ingrediente 5', adiImgUrl: undefined, adiCategoria: 'ingrediente', adiCantAdicional: 1, adiPrecio: 40.00 },
    { adiId: 12, adiNombre: 'ingrediente 6', adiImgUrl: undefined, adiCategoria: 'ingrediente', adiCantAdicional: 1, adiPrecio: 50.00 },
    { adiId: 13, adiNombre: 'ingrediente 7', adiImgUrl: undefined, adiCategoria: 'ingrediente', adiCantAdicional: 1, adiPrecio: 60.00 },
  ];

  public product: Product = {
    name: 'Lomo Saltado',
    price: 15.00,
    category: '',
    imageUrl: '',
    isNew: false,
    isOnSale: false,
    adicionales: this.porciones
  }

  constructor(
      private carritoService: CarritoService,
      private toastr        : ToastrService
  ) {}

  onPorcionChanged(event: any) {
    const { porcion, selected } = event;
    if (selected) {
      this.porcionesSeleccionadas.push(porcion);
    } else {
      this.porcionesSeleccionadas = this.porcionesSeleccionadas.filter(p => p.adiId !== porcion.adiId);
    }
  }

  onIngredienteChanged(event: any) {
    const ingredienteId = event.target.value;
    const ingrediente = this.product.adicionales?.find(i => i.adiId == ingredienteId); 
    if (ingrediente != undefined) {
      if (event.target.checked) {
          this.ingredientesSeleccionados.push(ingrediente);
      } else {
        this.ingredientesSeleccionados = this.ingredientesSeleccionados.filter(i => i.adiId !== ingrediente.adiId)
      }
    }
  }

  next() {
    this.stepper.next();
  }

  onSubmit(form: NgForm) {
    const nuevoPedido = {...this.product};
    nuevoPedido.adicionales = [...this.porcionesSeleccionadas, ...this.ingredientesSeleccionados];
    nuevoPedido.preferencias = this.preferencias;
    this.carritoService.addToCart(nuevoPedido);

    this.showSuccess();

    form.resetForm();
    this.limpiarValores();
    this.closeModal();
    this.stepper.reset();
    return false;
  }

  resetAllSelections() {
    this.porcionCards.forEach(card => card.resetSelection());
  }

  limpiarValores() {
    this.resetAllSelections();
    this.ingredientesSeleccionados = [];
    this.porcionesSeleccionadas = [];
    this.preferencias = undefined;
  }

  closeModal() {
    const closeButton = document.getElementById('closeButton');
    if (closeButton) {
      closeButton.click(); 
    }
  }

  showSuccess() {
    this.toastr.success(`${this.product.name} ha sido agregado al carrito.`, '¡Listo!');
  }

}
