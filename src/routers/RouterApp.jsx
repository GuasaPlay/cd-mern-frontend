import { DefaultLayout } from "layouts/DefaultLayout";
import { AuthorsPage } from "pages/AuthorsPage";
import { EditAuthorPage } from "pages/EditAuthorPage";
import { EditProductPage } from "pages/EditProductPage";
import { MainPage } from "pages/MainPage";
import { NewAuthorPage } from "pages/NewAuthorPage";
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
          <Route
            path="administrador-de-productos/:id/edit"
            element={<EditProductPage />}
          />
          <Route path="nuevo-producto" element={<NewProductPage />} />
          <Route path="autores" element={<AuthorsPage />} />
          <Route path="nuevo-autor" element={<NewAuthorPage />} />
          <Route path="autores/:id/edit" element={<EditAuthorPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
