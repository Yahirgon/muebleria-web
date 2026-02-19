import { createContext, useState, useEffect, ReactNode } from "react";


// 🔹 Tipo de producto
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}


// 🔹 Tipo del contexto
interface CartContextType {
  carrito: Producto[];
  agregarAlCarrito: (producto: Omit<Producto, "cantidad">) => void;
  eliminarDelCarrito: (id: number) => void;
  vaciarCarrito: () => void;
  total: number;
}


// 🔹 Crear contexto
export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);


// 🔹 Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<Producto[]>(() => {
    const saved = localStorage.getItem("carrito");
    return saved ? JSON.parse(saved) : [];
  });


  // 🔹 Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);


  // 🔹 Agregar producto
  const agregarAlCarrito = (producto: Omit<Producto, "cantidad">) => {
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };


  // 🔹 Eliminar producto
  const eliminarDelCarrito = (id: number) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };


  // 🔹 Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };


  // 🔹 Total
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );


  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};