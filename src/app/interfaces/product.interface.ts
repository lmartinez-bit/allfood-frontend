
export interface Producto {
  proId:                  number;
  proCant:                number;
  proPrecio:              number;
  proNombre:              string;
  categoriaProductoCatId: number;
  proEsNuevo:             string;
  proEnDescuento:         string;
  proImgUrl:              string;
  proEstado:              string;
  proDesc:                string;
  adicionales?:           Adicional[];
  preferencias?: string;
}

export interface Adicional {
  adiId:            number;
  adiNombre:        string;
  adiImgUrl?:       string;
  adiCategoria:     string;
  adiCantAdicional: number;
  adiPrecio:        number;
}

