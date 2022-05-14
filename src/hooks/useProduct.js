import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const useProduct = () => {
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

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete("/product/delete-product", {
        params: { productId: id },
      });
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  return { deleteProduct, getProduct, product, loading, error };
};
