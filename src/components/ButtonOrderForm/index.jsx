import classnames from "classnames";

function ButtonOrderForm(props) {
  const { title, variant, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={classnames(
        "rounded-md text-sm md:text-base lg:text-lg font-semibold text-white px-2 py-1 sm:px-3 sm:py-2 md:py-2 lg:px-3 lg:py-2 xl:px-4 xl:py-2 mr-auto",
        {
          "bg-slate-700": variant === "default",
          "bg-slate-900": variant === "addsuccess",
          "bg-rose-500": variant === "delete",
        },
      )}
    >
      {title}
    </button>
  );
}

export default ButtonOrderForm;
