import { Button } from "components/Button";
import { useProduct } from "hooks/useProduct";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProductPage = () => {
  const navigate = useNavigate();
  const { getProduct, loading, error, product, deleteProduct } = useProduct();

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async () => {
    await deleteProduct(product._id);
    navigate("/administrador-de-productos");
  };

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
          <p className="mt-2 text-center text-slate-700">{product.desc}</p>
          <div className="mt-2 flex justify-between border-t-2 pt-3">
            <Button
              name="Editar"
              onClick={() =>
                navigate(`/administrador-de-productos/${product._id}/edit`)
              }
            />
            <Button name="Eliminar" bg="delete" onClick={handleDelete} />
          </div>
        </>
      )}
    </div>
  );
};
