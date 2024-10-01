import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  private apiURL: string = "http://localhost:5274"

  constructor(

    private readonly http: HttpClient

  ) { }


  __getProductos(){
    return this.http.get(`${this.apiURL}/api/Producto`, {responseType: "json"})
  }

}
