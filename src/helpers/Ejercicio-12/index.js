
// Crear un modulo que exporte una serie de funciones

import { productos } from "../../db/data";

export const comparadorProductos = () => {
  const agregarAComparador = (idProducto) => {
    /**
  1. `agregarAComparador(idProducto)`:
   - Máximo 4 productos para comparar
   - Usa un `Set` para evitar duplicados
   - Guarda en LocalStorage en una clave llamada `comparador`
   - Valida que los productos sean de la misma categoría
     */

   console.log('Insertando productos al comparador ....')
    try {
      localStorage.hasOwnProperty('comparador') || localStorage.setItem('comparador', JSON.stringify([]));
      const productosComparador = JSON.parse(localStorage.getItem('comparador'));
      if (productosComparador.length >= 4) {
        throw new Error('No se pueden agregar más de 4 productos al comparador');
      }

      //Buscamos si el id producto ya existe en el array
      const existeProducto = productosComparador.find(producto => producto.id === idProducto.id);
      //existeProducto tendrá el objeto si lo encuentra o undefined si no lo encuentra
      if (existeProducto) {
        throw new Error('El producto ya está en el comparador');
      }

      //si llego aquí es que no existe el producto en el array, entonces lo agrego
      const productoBuscado = productos.find(producto => producto.id === idProducto);
      if (!productoBuscado) {
        throw new Error('El producto no existe');
      }

      //Validamos que los productos sean de la misma categoría(paso)
      if (productosComparador.length > 0){
        const categoría = productosComparador[0]?.categoría;
        if (productoBuscado.categoría !== categoría){
          throw new Error ('Los productos deben ser de la misma categoría')
        }
      }
      productosComparador.push(productoBuscado);
      
      //añadimos al localStorage
      localStorage.setItem('comparador', JSON.stringify(productosComparador));
      console.log('Producto agregado correctamente al comparador.')

      } catch (error) {
      console.log("Error: ", error.message);
    }
  }
};