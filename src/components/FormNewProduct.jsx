import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormSchemaProduct } from "schemas/product";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

export const FormNewProduct = ({ initialValues, action }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      if (action === "save") {
        await axios.post("/product/create-product", values);
        navigate("/administrador-de-productos");
      } else {
        await axios.put("/product/update-product", values, {
          params: { productId: initialValues._id },
        });
        navigate("/administrador-de-productos");
      }
    } catch (error) {
      setError("Error, intente nuevamente");
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchemaProduct}
      onSubmit={handleSubmit}
    >
      {({ isValid, isSubmitting }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="title" name="Título" isRequired />
              <Field
                type="text"
                id="title"
                name="title"
                required
                autoFocus
                placeholder="Ej. iPhone 11"
                component={Input}
              />
              <ErrorMessage
                className="mt-0.5 text-xs text-red-500 line-clamp-1"
                name="title"
                component="div"
              />
            </div>
            <div>
              <Label htmlFor="price" name="Precio" isRequired />
              <Field
                type="number"
                id="price"
                name="price"
                required
                placeholder="Ej. 1.000"
                component={Input}
              />
              <ErrorMessage
                className="mt-0.5 text-xs text-red-500 line-clamp-1"
                name="price"
                component="div"
              />
            </div>
            <div>
              <Label htmlFor="desc" name="Descripción" isRequired />
              <Field
                type="text"
                id="desc"
                name="desc"
                required
                placeholder="Ej. Tamaño de pantalla: 5.8 pulgadas"
                component={Input}
              />
              <ErrorMessage
                className="mt-0.5 text-xs text-red-500 line-clamp-1"
                name="desc"
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
