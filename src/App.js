import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
import { useState } from "react";

function App() {
  const [productos, setProductos] = useState([
    { id: 0, articulo: "Auto BMW", precio: 40000 },
    { id: 1, articulo: "Auto Audi", precio: 30000 },
    { id: 2, articulo: "Auto Chevrolet", precio: 10000 },
    { id: 3, articulo: "Auto Ford", precio: 15000 },
    { id: 4, articulo: "Auto Ferrari", precio: 90000 },
  ]);

  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <Header titulo="Tienda de autos" />

      <div className="flex justify-around my-2">
        <div className="w-96">
          <h3 className="text-2xl font-bold underline my-4">
            Listado de productos
          </h3>
          {productos.map((producto, index) => {
            return (
              <Producto
                producto={producto}
                productos={productos}
                setProductos={setProductos}
                carrito={carrito}
                setCarrito={setCarrito}
                key={index}
              />
            );
          })}
        </div>
        <div className="w-96">
          <h3 className="text-2xl font-bold underline my-4">Carrito compras</h3>
          <Carrito
            carrito={carrito}
            setCarrito={setCarrito}
            key={productos.id}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
