function CounterButton(props) {
  const { title, description, onClick } = props;

  // const onClick = () => {
  //   console.log(description);
  // };
  console.log(description);

  return (
    <button
      onClick={onClick}
      className="px-5 py-3 bg-slate-200 rounded-md text-slate-500 text-lg font-semibold"
    >
      {title}
    </button>
  );
}

export default CounterButton;
