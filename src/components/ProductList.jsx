import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/product/get-all-products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="mt-10 rounded-lg bg-white py-3 shadow-lg">
      {loading && (
        <div className="text-center font-medium text-slate-700">
          Cargando...
        </div>
      )}
      <ul className="divide-y-2">
        {products.map((product) => (
          <li
            key={product._id}
            className="group flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-100"
          >
            <div>
              <Link to={`/administrador-de-productos/${product._id}`}>
                <h3 className="font-semibold text-slate-700 underline">
                  {product.title}
                </h3>
              </Link>
              <div className="text-sm text-slate-700">${product.price}</div>
              <p className="text-sm text-slate-500"> {product.desc}</p>
            </div>
            <div className="hidden space-x-2 group-hover:flex">
              <Button name="Editar" />
              <Button name="Eliminar" bg="delete" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
