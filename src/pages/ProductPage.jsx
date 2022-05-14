import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/product/get-product-by-id", {
        params: { productId: params.id },
      });
      setProduct(data);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message || "Error al cargar el producto");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mx-auto mt-16 w-full rounded-lg bg-white p-3 shadow-lg sm:w-4/12">
      {loading && (
        <div className="text-center font-medium text-slate-700">
          Cargando...
        </div>
      )}
      {error && (
        <div className="rounded-md bg-red-500 py-1 text-center font-medium text-white">
          {error}
        </div>
      )}

      {product && (
        <>
          <h1 className="w-full text-center text-lg font-medium text-slate-700">
            {product.title}
          </h1>
          <div className="text-center text-sm font-medium text-slate-700">
            ${product.price}
          </div>
          <p className="mt-2 border-t-2 pt-2 text-center text-slate-700">
            {product.desc}
          </p>
        </>
      )}
    </div>
  );
};
