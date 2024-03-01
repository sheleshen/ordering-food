import "./Counter.css";
import CounterButtonOrderForm from "components/CounterButtonOrderForm";

function CounterOrderForm({ count, reduceQuantity, addQuantity }) {
  return (
    <div className="flex gap-4 items-center">
      <CounterButtonOrderForm
        onClick={reduceQuantity}
        title="-"
        description="Уменьшить количество"
      />
      <p className="text-slate-900 font-bold">{count}</p>
      <CounterButtonOrderForm
        onClick={addQuantity}
        title="+"
        description="Увеличить количество"
      />
    </div>
  );
}

export default CounterOrderForm;
