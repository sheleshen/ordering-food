import Button from "components/Button";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <div className="px-6 md:px-4 lg:px-2 xl:px-0 py-28 md:py-32 lg:py-40 max-w-7xl m-auto ">
        <div className="flex flex-col gap-10 items-center">
          <img className="w-40" src="/image/shopping-bag.png" alt="" />
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400">
            Ваша корзина пуста
          </p>
          <Link to={`/`}>
            <Button
              title={"Вернуться на главную"}
              description={"Перейти на главную"}
            />
          </Link>
        </div>
      </div>

{/* Сделать кнопку с изменением состояния/цвета */}

      {/* <div className="px-6 md:px-4 lg:px-2 xl:px-0 py-28 md:py-32 lg:py-40 max-w-7xl m-auto "> */}
          {/* <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400"> */}
            {/* Товары в корзине  */}
          {/* </p> */}

          {/* <div */}
              {/* // key={.id} */}
              {/* className="flex flex-col px-5 py-5 gap-4 bg-slate-100 rounded-3xl justify-between" */}
            {/* > */}

              {/* Здесь иднем по массиву, чтобы все позиции были в одной */}
              {/* <div className="flex gap-5"> */}
                {/* <img
                  alt="" */}
                  {/* // src={item.image}
                  className="h-28 object-cover object-center w-28 rounded-3xl"
                ></img>
                <div className="flex flex-col">
                  <p className="text-lg md:text-xl lg:text-2xl py-2 md:py-3 font-bold text-slate-800">
                    Наименование товара длинное в одну строку 
                  </p>
                  <p className="text-sm md:text-base font-semibold text-amber-500">
                    Цена:  руб.
                  </p>
                  <p className="text-sm md:text-base font-medium text-slate-600">
                    Количество
                  </p>
                </div>
              </div> */}
              
            {/* </div> */}
      {/* </div> */}


    </div>
  );
}

export default Cart;
