function CounterButton(props) {
  const { title, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 sm:px-5 sm:py-2 md:py-3 lg:px-6 lg:py-3 xl:px-6 xl:py-3 bg-slate-200 rounded-md text-slate-500 text-lg font-semibold"
    >
      {title}
    </button>
  );
}

export default CounterButton;


