import * as Yup from "yup";

export const initialValuesProduct = {
  title: "",
  desc: "",
  price: "",
};

export const FormSchemaProduct = Yup.object().shape({
  title: Yup.string().required("El titulo es obligatorio"),
  price: Yup.string().required("El precio es obligatorio"),
  desc: Yup.string().required("La descripcion es obligatoria"),
});
