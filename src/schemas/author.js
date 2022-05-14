import * as Yup from "yup";

export const initialValuesAuthor = {
  name: "",
  quote: "",
};

export const FormSchemaAuthor = Yup.object().shape({
  name: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es requerido"),
  quote: Yup.string()
    .min(3, "La frase debe tener al menos 3 caracteres")
    .required("La frase es requerida"),
});
