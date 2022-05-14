import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormSchemaAuthor } from "schemas/author";

import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

export const FormNewAuthor = ({ initialValues, action }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      if (action === "save") {
        await axios.post("/author/create-author", values);
        navigate("/autores");
      } else {
        await axios.put("/author/update-author", values, {
          params: { authorId: initialValues._id },
        });
        navigate("/autores");
      }
    } catch (error) {
      setError("Error, intente nuevamente");
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchemaAuthor}
      onSubmit={handleSubmit}
    >
      {({ isValid, isSubmitting }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="name" name="Nombre del autor" isRequired />
              <Field
                type="text"
                id="name"
                name="name"
                required
                autoFocus
                placeholder="Ej. Calcuta"
                component={Input}
              />
              <ErrorMessage
                className="mt-0.5 text-xs text-red-500 line-clamp-1"
                name="name"
                component="div"
              />
            </div>
            <div>
              <Label htmlFor="quote" name="Cita" isRequired />
              <Field
                type="text"
                id="quote"
                name="quote"
                required
                placeholder="Ej. Pasamos mucho tiempo ganándonos la vida"
                component={Input}
              />
              <ErrorMessage
                className="mt-0.5 text-xs text-red-500 line-clamp-1"
                name="quote"
                component="div"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                name="Guardar"
                type="submit"
                disabled={!isValid}
                loading={isSubmitting}
              />
            </div>
            {error && (
              <div className="rounded-md bg-red-500 p-2 text-sm font-medium text-white">
                {error}
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
