import { FormNewProduct } from "components/FormNewProduct";
import { PageTitle } from "components/PageTitle";

export const NewProductPage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <div className="flex justify-between">
        <PageTitle name="Nuevo producto" />
      </div>
      {/* Product list */}
      <section className="mx-auto mt-10 w-full  rounded-lg bg-white p-3 shadow-lg sm:w-1/2">
        <FormNewProduct />
      </section>
    </div>
  );
};
