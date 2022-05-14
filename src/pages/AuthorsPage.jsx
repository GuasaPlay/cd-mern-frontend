import { AuthorList } from "components/AuthorsList";
import { Button } from "components/Button";
import { PageTitle } from "components/PageTitle";

import { useNavigate } from "react-router-dom";

export const AuthorsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <div className="flex justify-between">
        <PageTitle name="Autores" />
        <Button name="Nuevo autor" onClick={() => navigate("/nuevo-autor")} />
      </div>

      <AuthorList />
    </div>
  );
};
