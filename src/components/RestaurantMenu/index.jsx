import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Counter from "components/Counter";
import uuid from "uuid4";
import ModalWindowError from "components/ModalWindowError";

function RestaurantMenu() {
  const { slug } = useParams();

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );
  const [error, setError] = useState[false];
  console.log(error)

  useEffect(() => {
    fetch(
      `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`,
    )
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [slug]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const findCartItem = (item) => {
    return cartItems.find((c) => c.itemId === item.id);
  };

  const addToCart = (item, currentRestaurantId) => {
   // if (item.restaurantId === cartItems[0].restaurantId || cartItems.length == 0) {
    const currentCartItem = findCartItem(item);

    if (!currentCartItem) {
      let itemFromOtherRes = false

      for(let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i]

        if(cartItem.restaurantId !== currentRestaurantId && cartItem.quantity > 0) {
          itemFromOtherRes = true
          break
        }
      }

      if(itemFromOtherRes) {
        setError(true)
        return
      }
    }

    if (currentCartItem) {
      const newCartItem = {
        ...currentCartItem,
        quantity: currentCartItem.quantity + 1,
      };

      let newItems = cartItems.map(
        cartItem => cartItem.itemId === currentCartItem.itemId ? newCartItem : cartItem
      );
      setCartItems(newItems);

    } else {
      const newCartItem = {
        ...item,
        id: uuid(),
        itemId: item.id,
        quantity: 1,
        restaurantId: item.restaurantId
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const reduceQuantity = (item) => {
    const currentCartItem = findCartItem(item);
    // Проверить наличие item в cartItems
    if (currentCartItem) {
      if (currentCartItem.quantity > 1) {
        const newCartItem = {
          ...currentCartItem,
          quantity: currentCartItem.quantity - 1,
        };
        let newItems = cartItems.map(
          cartItem => cartItem.itemId === currentCartItem.itemId ? newCartItem : cartItem
        );
        setCartItems(newItems);
      } else {
        let newItems = cartItems.filter(
          cartItem => cartItem.itemId !== currentCartItem.itemId
        );
        setCartItems(newItems);
      }
        
      }
    };

    const ClearCart = () => {
      setCartItems([])
      setError(false)
    }

    const closeModal = () => {
      setError(false)
    }

  return (
    <div>
      {items.length === 0 ? (
        <div>ТРИТАТИШКИ ТРИЛЯЛЯ</div>
      ) : (
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
              <div className="flex gap-4">
                {cartItems.find((cartItem) => cartItem.itemId === item.id) ? (
                  <div className="flex gap-6">
                    <Link to={`/cart`}>
                      <Button
                        title={"В корзину"}
                        description={"Перейти в корзину"}
                        variant="default"
                      />
                    </Link>

                    <Counter
                      count={
                        cartItems.find(
                          (cartItem) => cartItem.itemId === item.id,
                        ).quantity
                      }
                      addQuantity={() => addToCart(item)}
                      reduceQuantity={() => reduceQuantity(item)}
                    />
                  </div>
                ) : (
                  <Button
                    title={"+ Добавить"}
                    description={"Добавить в корзину"}
                    variant="default"
                    onClick={() => addToCart(item, item.restaurantId)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      )}
      {error && <ModalWindowError ClearCart={ClearCart} closeModal={closeModal} />}
    </div>
  );
}

export default RestaurantMenu;
