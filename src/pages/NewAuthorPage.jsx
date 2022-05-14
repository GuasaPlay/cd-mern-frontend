import { FormNewAuthor } from "components/FormNewAuthor";

import { PageTitle } from "components/PageTitle";
import { initialValuesAuthor } from "schemas/author";

export const NewAuthorPage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <div className="flex justify-between">
        <PageTitle name="Nuevo autor" />
      </div>

      <section className="mx-auto mt-10 w-full  rounded-lg bg-white p-3 shadow-lg sm:w-1/2">
        <FormNewAuthor initialValues={initialValuesAuthor} action="save" />
      </section>
    </div>
  );
};
