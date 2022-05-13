const inpuStyle =
  "flex items-center space-x-2 w-full rounded-md border-2 border-gray-300 px-[9px] py-[7.25px] text-slate-700 transition-colors focus-within:border-sky-500";

export const Input = ({ field, form, ...props }) => {
  return (
    <div
      className={`${inpuStyle} ${
        props.disabled ? "cursor-not-allowed bg-gray-200" : ""
      }`}
    >
      <input
        {...field}
        {...props}
        className=" h-full w-full transition-colors placeholder:normal-case focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:placeholder:text-gray-400"
      />
    </div>
  );
};
