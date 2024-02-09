import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import Button from "components/Button";

function RestaurantMenu() {
  const { slug } = useParams();
  console.log(slug);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`,
    )
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [slug]);

  //     console.log(setRestaurants);setRestaurants(data));
  console.log(items);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col px-5 py-5 gap-4 bg-slate-100 rounded-3xl justify-between"
            >
              <div className="flex flex-col gap-1">
                <img
                  alt=""
                  src={item.image}
                  className="h-64 object-cover object-center w-full rounded-3xl"
                ></img>
                <p className="text-lg md:text-xl lg:text-2xl py-2 md:py-3 font-bold text-slate-800">
                  {item.name}
                </p>
                <p className="text-sm md:text-base font-semibold text-amber-500">
                  Цена: {item.price} руб.
                </p>
                <p className="text-sm md:text-base font-medium text-slate-600">
                  {item.description}
                </p>
              </div>
              {/* <Link to={`/`}> */}
              {/* <Button
                    title={"Перейти в корзину"}
                    description={"Перейти в корзину"}
                  /> */}
              <Button 
              title={"+ Добавить"} 
              description={"Добавить в корзину"}
              variant='default'
              />
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
