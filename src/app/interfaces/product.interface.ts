import { Adicional } from "./producto-pedido";


export interface Product {
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  isNew: boolean;
  isOnSale: boolean;
  salePrice?: number;
  adicionales?: Adicional[];
  preferencias?: string;
}


