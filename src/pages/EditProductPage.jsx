import { FormNewProduct } from "components/FormNewProduct";
import { PageTitle } from "components/PageTitle";
import { useProduct } from "hooks/useProduct";
import { useEffect } from "react";
import { initialValuesProduct } from "schemas/product";

export const EditProductPage = () => {
  const { getProduct, product, loading } = useProduct();

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <div className="flex justify-between">
        <PageTitle name="Editar producto" />
      </div>
      <section className="mx-auto mt-10 w-full  rounded-lg bg-white p-3 shadow-lg sm:w-1/2">
        {loading && (
          <div className="text-center font-medium text-slate-700">
            Cargando...
          </div>
        )}
        {product && (
          <FormNewProduct
            initialValues={{
              ...initialValuesProduct,
              ...product,
            }}
            action="update"
          />
        )}
      </section>
    </div>
  );
};
