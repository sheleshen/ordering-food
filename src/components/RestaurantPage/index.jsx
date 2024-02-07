import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenu from "components/RestaurantMenu";

function RestaurantPage() {
  const { slug } = useParams();
  console.log(slug);

  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
      .then((response) => response.json())
      .then((data) => setRestaurant(data));
  }, [slug]);

  //     console.log(setRestaurants);setRestaurants(data));
  console.log(restaurant);

  return (
    <div className="px-6 md:px-4 lg:px-2 xl:px-0 py-10 md:py-12 lg:py-14 max-w-7xl m-auto">
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold pb-10 md:pb-12 lg:pb-14">
        О ресторане:
      </p>

      <div className="flex flex-col gap-4 px-5 py-5 bg-slate-100 rounded-3xl">
        <div className="flex flex-col sm:flex-row gap-4">
          <img
            alt=""
            src={restaurant.image}
            className="h-48 md:h-60 lg:h-80 object-cover object-center w-48 md:w-60 lg:w-80 rounded-3xl"
          ></img>

          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-lg md:text-xl lg:text-2xl py-2 md:py-3 font-bold text-slate-800">
              {restaurant.name}
            </p>
            <p className="text-sm md:text-base font-medium text-slate-400">
              {restaurant.openAt}
            </p>
            <p className="text-sm md:text-base font-medium text-slate-400">
              {restaurant.closeAt}
            </p>
            <p className="text-sm md:text-base font-medium text-slate-800">
              {restaurant.address}
            </p>

            <p className="text-sm md:text-base font-medium text-slate-800">
              {restaurant.phone}
            </p>
            <p className="text-sm md:text-base font-medium text-slate-800">
              {restaurant.email}
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base font-medium text-slate-800">
          {restaurant.description}
        </p>
      </div>

      <p className="text-3xl md:text-4xl lg:text-5xl font-bold py-10 md:py-12 lg:py-14">
        Меню ресторана:
      </p>
      <RestaurantMenu />
    </div>
  );
}

export default RestaurantPage;
