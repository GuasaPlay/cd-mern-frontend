import { Button } from "components/Button";
import { PageTitle } from "components/PageTitle";
import { ProductList } from "components/ProductList";
import { useNavigate } from "react-router-dom";

export const ProductManagerPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <div className="flex justify-between">
        <PageTitle name="Administrador de productos" />
        <Button
          name="Nuevo producto"
          onClick={() => navigate("/nuevo-producto")}
        />
      </div>
      {/* Product list */}
      <ProductList />
    </div>
  );
};
