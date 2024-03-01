function CounterButtonOrderForm(props) {
  const { title, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="px-2 py-1 sm:px-3 sm:py-1 md:py-2 md:px-4 lg:px-4 lg:py-2 xl:px-4 xl:py-2 bg-slate-200 rounded-md text-slate-500 text-lg font-semibold"
    >
      {title}
    </button>
  );
}

export default CounterButtonOrderForm;
