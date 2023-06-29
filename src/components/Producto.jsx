import React from "react";

const Producto = ({ producto, productos, carrito, setCarrito }) => {
  const { id, articulo, precio } = producto;

  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    setCarrito([...carrito, producto]);
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  return (
    <>
      {id} | {articulo} | {precio}
      {productos ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 my-1 rounded h-9"
          type="button"
          onClick={() => seleccionarProducto(id)}
        >
          Comprar
        </button>
      ) : (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-3 my-1 h-9"
          type="button"
          onClick={() => eliminarProducto(id)}
        >
          Eliminar
        </button>
      )}
      <br></br>
    </>
  );
};

export default Producto;
