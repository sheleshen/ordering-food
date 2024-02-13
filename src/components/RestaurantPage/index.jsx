import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenu from "components/RestaurantMenu";
import { format } from "date-fns";

function RestaurantPage() {
  const { slug } = useParams();

  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  console.log(menuItems);

  useEffect(() => {
    fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
      .then((response) => response.json())
      .then((data) => setRestaurant(data));

    fetch(
      `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/item`,
    )
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, [slug]);

  //     console.log(setRestaurants);setRestaurants(data));
  console.log(restaurant);

  return (
    <div className="px-6 md:px-4 lg:px-2 xl:px-0 py-10 md:py-12 lg:py-14 max-w-7xl m-auto">
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold pb-10 md:pb-12 lg:pb-14">
        О ресторане:
      </p>

      <div className="flex flex-col gap-4 px-5 py-5 bg-slate-100 rounded-3xl">
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
          <img
            alt=""
            src={restaurant.image}
            className="h-48 md:h-60 lg:h-80 object-cover object-center w-48 md:w-60 lg:w-80 rounded-3xl"
          ></img>

          <div className="flex flex-col gap-1 md:gap-2">
            <p className="text-lg md:text-xl lg:text-2xl py-2 md:py-3 font-bold text-slate-800">
              {restaurant.name}
            </p>
            <span className="text-sm md:text-base font-medium text-slate-400">
              {restaurant.openAt && restaurant.closeAt
                ? `Часы работы:${format(new Date(restaurant.openAt), "HH:mm")} - ${format(new Date(), "HH:mm")}`
                : "Часы работы не указаны"}
            </span>
            <p className="text-sm md:text-base font-medium text-slate-800">
              Адрес: {restaurant.address}
            </p>

            <p className="text-sm md:text-base font-medium text-slate-800">
              Телефон: {restaurant.phone}
            </p>
            <p className="text-sm md:text-base font-medium text-slate-800">
              E-mail: {restaurant.email}
            </p>
          </div>
        </div>

        <p className="text-base md:text-lg font-medium text-slate-800">
          {restaurant.description}
        </p>
      </div>

      <p className="text-3xl md:text-4xl lg:text-5xl font-bold py-10 md:py-12 lg:py-14">
        Меню ресторана:
      </p>
      <RestaurantMenu items={menuItems} />
    </div>
  );
}

export default RestaurantPage;
