const buttonColor = {
  primary: "bg-sky-500",
  delete: "bg-red-500",
};

export const Button = ({
  type = "button",
  name,
  bg = "primary",
  loading,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={loading || disabled}
      className={`rounded-md py-2 px-3 text-sm font-medium text-white transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 ${buttonColor[bg]} `}
    >
      {loading ? "Cargando..." : name}
    </button>
  );
};
