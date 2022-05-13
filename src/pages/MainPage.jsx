import { PageTitle } from "components/PageTitle";
import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="Full Stack MERN Spanish" />
      <section className="mt-6">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <li className="w-full">
            <Link
              to="administrador-de-productos"
              className="block h-24 w-full rounded-lg bg-green-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              Administrador de productos
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="autores"
              className="block h-24 w-full rounded-lg bg-sky-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              Autores
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
