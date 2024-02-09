import "./Counter.css";
import CounterButton from "components/CounterButton";
import { useState } from "react";

function Counter() {

    const [ count, setCount ] = useState(1)
   
    const minus = () => {
        setCount(count + 1)
    }

    const plus = () => {
        setCount(count - 1)
    }
    // сделать ограничение на отрицательное число!

    return (
        <div className="flex gap-4 items-center">
            <CounterButton onClick={minus} title='-' description='Уменьшить количество' />
            <p className="text-slate-900 font-bold">{count}</p>
            <CounterButton onClick={plus} title='+' description='Увеличить количество'/>
        </div>
    );
}

export default Counter;