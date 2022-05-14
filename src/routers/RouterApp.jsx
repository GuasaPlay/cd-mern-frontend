import { DefaultLayout } from "layouts/DefaultLayout";
import { MainPage } from "pages/MainPage";
import { NewProductPage } from "pages/NewProductPage";
import { ProductManagerPage } from "pages/ProductManagerPage";
import { ProductPage } from "pages/ProductPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path="administrador-de-productos"
            element={<ProductManagerPage />}
          />
          <Route
            path="administrador-de-productos/:id"
            element={<ProductPage />}
          />
          <Route path="nuevo-producto" element={<NewProductPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
