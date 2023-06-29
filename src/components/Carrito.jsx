import React from "react";
import Producto from "./Producto";

const Carrito = ({ carrito, setCarrito }) => {
  return (
    <>
      <div>
        {carrito.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        ))}
      </div>
    </>
  );
};

export default Carrito;
