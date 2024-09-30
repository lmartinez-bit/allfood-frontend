export interface PedidoProducto {
    name: string;
    price: number;
    category: string;
    imageUrl: string;
    isNew: boolean;
    isOnSale: boolean;
    salePrice?: number;
    adicionales: Adicional[]
  }
  
  export interface Adicional {
    adiId: number;
    adiNombre: string;
    adiImgUrl?: string;
    adiCategoria: string;
    adiCantAdicional: number;
    adiPrecio: number;
  }
  
  