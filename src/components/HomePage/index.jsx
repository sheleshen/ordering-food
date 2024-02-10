import "./HomePage.css";
import Button from "components/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  // console.log(setRestaurants);
  // console.log("restaurants");
  // console.log(restaurants);

  return (
    <div>
      {/* Тут будет баннер */}
      <div className="bg-image">
        <div className="px-6 md:px-4 lg:px-2 xl:px-0 max-w-7xl m-auto flex flex-col py-40 sm:py-44 md:py-48 lg:py-56 gap-8">
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
            Ресторан у вас на кухне
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white">
            Доставим еду из вашего любимого ресторана к вам домой!
          </p>
        </div>
      </div>

      {/* Каталог */}
      <div className="px-6 md:px-4 lg:px-2 xl:px-0 py-10 md:py-12 lg:py-14 max-w-7xl m-auto ">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold pb-10 md:pb-12 lg:pb-14">
          Выберите ресторан ниже для доставки
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.map((restaurant) => {
            return (
              <div
                key={restaurant.id}
                className="flex flex-col px-5 py-5 gap-4 bg-slate-100 rounded-3xl justify-between"
              >
                <div className="flex flex-col gap-1">
                  <img
                    alt=""
                    src={restaurant.image}
                    className="h-64 object-cover object-center w-full rounded-3xl"
                  ></img>
                  <p className="text-lg md:text-xl lg:text-2xl py-2 md:py-3 font-bold text-slate-800">
                    {restaurant.name}
                  </p>
                  <p className="text-sm md:text-base font-semibold text-amber-500">
                    Кухня: {restaurant.cuisine}
                  </p>
                  <span className="text-sm md:text-base font-medium text-slate-600">
                    Часы работы: {format(new Date(restaurant.openAt), 'HH:mm')} - {format(new Date(restaurant.closeAt), 'HH:mm')}
                  </span>
                  <p className="text-sm md:text-base font-medium text-slate-600">
                    Телефон: {restaurant.phone}
                  </p>
                </div>
                <Link to={`/${restaurant.slug}`}>
                  <Button
                    title={"Подробнее"}
                    description={"Перейти в ресторан"}
                    variant='default'
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
