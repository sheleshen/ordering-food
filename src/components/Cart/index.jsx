import Button from "components/Button";
import "./Cart.css";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ModalWindowError from "components/ModalWindowError";

function Cart() {
  // const { slug } = useParams();
  // console.log(slug);

  // const [restaurant, setRestaurant] = useState([]);

  // useEffect(() => {
  //   fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
  //     .then((response) => response.json())
  //     .then((data) => setRestaurant(data));
  // }, [slug]);

  //     console.log(setRestaurants);setRestaurants(data));
  // console.log(restaurant);

  return (
    <div>
      {/* ТЕСТ МОДАЛЬНОГО ОКНА - добавить на страницу ресторана*/}
      {/* <ModalWindowError /> */}

      {/* если массив cartItems имеет объекты, то выводим нижнюю часть. если нет, то выводим это: */}
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

      {/* массив для хранения данных cartItems
пройтись по этому массиву и вывести его - код ниже */}

      {/* <div className="px-6 md:px-4 lg:px-2 xl:px-0 py-28 md:py-32 lg:py-40 max-w-7xl m-auto "> */}
      {/* <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400"> */}
      {/* Товары в корзине  ЗАГОЛОВОК НЕ НУЖЕН*/}
      {/* </p> */}

      {/* <div */}
      {/* // key={cartItem.id} */}
      {/* className="flex flex-col px-5 py-5 gap-4 bg-slate-100 rounded-3xl justify-between" */}
      {/* > */}

      {/* Здесь идем по массиву, чтобы все позиции были в одной */}
      {/* <div className="flex gap-5"> */}
      {/* <img
                  alt="" */}
      {/* // src={cartItem.image}
                  className="h-28 object-cover object-center w-28 rounded-3xl"
                ></img>
                <div className="flex flex-col">
                  <p className="text-lg md:text-xl lg:text-2xl py-2 md:py-3 font-bold text-slate-800">
                    Наименование товара длинное в одну строку 
                  </p>
                  <p className="text-sm md:text-base font-semibold text-amber-500">
                    Цена: {cartItem.price} руб.
                  </p>
                  <p className="text-sm md:text-base font-medium text-slate-600">
                    Количество: <Counter />
                  </p>
                </div>
              </div> */}

      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Cart;
