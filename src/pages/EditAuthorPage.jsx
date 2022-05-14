import { Button } from "components/Button";
import { FormNewAuthor } from "components/FormNewAuthor";
import { PageTitle } from "components/PageTitle";
import { useAuthor } from "hooks/useAuthor";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initialValuesAuthor } from "schemas/author";

export const EditAuthorPage = () => {
  const navigate = useNavigate();
  const { getAuthor, author, loading } = useAuthor();

  useEffect(() => {
    getAuthor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <div className="flex justify-between">
        <PageTitle name="Editar un autor" />
      </div>
      <section className="mx-auto mt-10 w-full  rounded-lg bg-white p-3 shadow-lg sm:w-1/2">
        {loading && (
          <div className="text-center font-medium text-slate-700">
            Cargando...
          </div>
        )}

        {author ? (
          <FormNewAuthor
            initialValues={{
              ...initialValuesAuthor,
              ...author,
            }}
            action="update"
          />
        ) : (
          <div className="text-center">
            <div className=" font-medium text-slate-700">
              Lo sentimos, pero no pudimos encontrar el autor que estás
              buscando. ¿Deseas agregar este autor a nuestra base de datos?
            </div>
            <div className="mt-4">
              <Button
                name="Nuevo autor"
                onClick={() => navigate("/nuevo-autor")}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
