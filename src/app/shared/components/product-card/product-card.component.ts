import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import Stepper from 'bs-stepper';
import { PorcionCardComponent } from '../porcion-card/porcion-card.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Adicional } from '../../../interfaces/producto-pedido';
import { CarritoService } from '../../../services/carrito.service';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CommonModule, PorcionCardComponent, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() stepper!: Stepper;
  @Input() producto!: Producto;

  ingredientesSeleccionados: Adicional[] = [];
  porcionesSeleccionadas   : Adicional[] = [];
  preferencias            ?: string;
  seleccionar              : boolean = false;

  @ViewChildren(PorcionCardComponent) porcionCards!: QueryList<PorcionCardComponent>;


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
    const ingrediente = this.producto.adicionales?.find(i => i.adiId == ingredienteId);
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
    const nuevoPedido = {...this.producto};
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
    this.toastr.success(`${this.producto.proNombre} ha sido agregado al carrito.`, '¡Listo!');
  }

}
