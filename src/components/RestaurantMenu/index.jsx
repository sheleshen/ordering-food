import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Counter from "components/Counter";
import uuid from "uuid4";

function RestaurantMenu() {
  const { slug } = useParams();

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    fetch(
      `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`,
    )
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [slug]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  const findCartItem = (menuItem) => {
    return cartItems.find(c => c.itemId === menuItem.id)
  }

    // const addToCart = (item) => {
  //   const updatedCartItems = [...cartItems, { ...item, itemId: item.id, id:12, quantity: 1 }];
  //   setCartItems(updatedCartItems);
  // };

  const addToCart = (item) => {
    const currentCartItem = cartItems.find(c => c.itemId === item.id)
    // const currentCartItem = findCartItem(item)

    // Проверить наличие item в cartItems
    if(currentCartItem) {
      const newCartItem = {
        ...currentCartItem,
        quantity: currentCartItem.quantity + 1
      }

      let newItems = cartItems.filter(cartItem => cartItem.itemId !== currentCartItem.itemId)
      setCartItems([...newItems, newCartItem])
    } else {

      const newCartItem = {
        ...item,
        id: uuid(),
        itemId: item.id,
        quantity: 1
      }
      setCartItems([...cartItems, newCartItem])

      // console.log("cartItems", cartItems)
    }
  };

  // const addQuantity = () => {
  // }

  const reduceQuantity = (item) => {
    const currentCartItem = findCartItem(item)
    // Проверить наличие item в cartItems
    if(currentCartItem) {
      const newCartItem = {
        ...currentCartItem,
        quantity: currentCartItem.quantity - 1
      }

      let newItems = cartItems.filter(cartItem => cartItem.itemId !== currentCartItem.itemId)
      setCartItems([...newItems, newCartItem])
    }
  };

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

              <div className="flex gap-4">
              { cartItems.find(cartItem => cartItem.itemId === item.id) ?
                 ( 
                 <div className="flex gap-6">
                  

                  <Link to={`/cart`}>
                    <Button
                      title={"В корзину"}
                      description={"Перейти в корзину"}
                      variant='default'
                    />
                  </Link>

                  <Counter 
                  count={cartItems.find(cartItem => cartItem.itemId === item.id).quantity}
                  addQuantity={() => addToCart(item)}
                  reduceQuantity={() => reduceQuantity(item)}
                  /> 
                  </div>
                 
                 
                  ):
                  <Button 
                    title={"+ Добавить"} 
                    description={"Добавить в корзину"}
                    variant='default'
                    onClick={() => addToCart(item)}
                  />
                  
              }
              
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
