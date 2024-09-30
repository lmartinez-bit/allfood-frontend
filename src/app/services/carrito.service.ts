import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoKey = 'carritoCompra';

  constructor() { }

  saveCart(cart: any[]): void {
    localStorage.setItem(this.carritoKey, JSON.stringify(cart));
  }

  getCart(): any[] {
    const cart = localStorage.getItem(this.carritoKey);
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(product: any): void {
    const cart = this.getCart();
    cart.push(product);
    this.saveCart(cart);
  }

  removeFromCart(productId: number): void {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
  }

  updateCart(product: any): void {
    let cart = this.getCart();
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      cart[index] = product;
      this.saveCart(cart);
    }
  }

  clearCart(): void {
    localStorage.removeItem(this.carritoKey);
  }

}
