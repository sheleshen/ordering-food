import "./Counter.css";
import CounterButton from "components/CounterButton";

function Counter({ count, reduceQuantity, addQuantity }) {

  return (
    <div className="flex gap-4 items-center">
      <CounterButton
        onClick={reduceQuantity}
        title="-"
        description="Уменьшить количество"
      />
      <p className="text-slate-900 font-bold">{count}</p>
      <CounterButton
        onClick={addQuantity}
        title="+"
        description="Увеличить количество"
      />
    </div>
  );
}

export default Counter;
