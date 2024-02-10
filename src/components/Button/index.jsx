// Кнопка для изменения состояния с "+ Добавить" на "Добавлено!""

import classnames from "classnames";

function Button(props) {
  const { title, description, variant } = props;

  const onClick = () => {
    console.log(description);
  };

  return (
    <button
      onClick={onClick}
      className={classnames(
        "rounded-md text-sm md:text-base lg:text-lg font-semibold text-white px-3 py-2 sm:px-4 sm:py-2 md:py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3 mr-auto",
        {
          "bg-slate-700": variant === "default",
          "bg-slate-900": variant === "addseccess",
        },
      )}
    >
      {title}
    </button>
  );
}

export default Button;
