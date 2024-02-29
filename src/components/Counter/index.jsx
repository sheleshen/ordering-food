import "./Counter.css";
import CounterButton from "components/CounterButton";
// import { useState } from "react";

function Counter({ count, reduceQuantity, addQuantity }) {
  // const [count, setCount] = useState(count);

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
