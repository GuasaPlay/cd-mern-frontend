export const Label = ({ name, htmlFor, isRequired }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1 block text-sm font-semibold text-slate-700"
    >
      {name} {isRequired && <span className="text-red-500">*</span>}
    </label>
  );
};
