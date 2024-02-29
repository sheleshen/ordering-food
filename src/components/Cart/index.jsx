import Button from "components/Button";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Counter from "components/Counter";
// import ModalWindowError from "components/ModalWindowError";

function Cart() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  const removeFromCart = (itemID) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemID)
    setCartItems(updatedCartItems)

    localStorage.getItem("cartItems", JSON.stringify(updatedCartItems));
  } 

  const addQuantity = (cartItem) => {
    const newCartItem = {
      ...cartItem,
      quantity: cartItem.quantity + 1
    }

    let newItems = cartItems.filter(c => c.itemId !== cartItem.itemId)
    setCartItems([...newItems, newCartItem])
  };

  const reduceQuantity = (cartItem) => {
    if (cartItem.quantity > 1) {
      const newCartItem = {
        ...cartItem,
        quantity: cartItem.quantity - 1
      }

      let newItems = cartItems.filter(c => c.itemId !== cartItem.itemId)
      setCartItems([...newItems, newCartItem])
    }    
  };


  return (
    <div>
      {/* ТЕСТ МОДАЛЬНОГО ОКНА - добавить на страницу ресторана */}
      {/* <ModalWindowError /> */}

      {cartItems.length === 0 ? (
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
                  variant='default'
                />
              </Link>
            </div>
          </div>
      ): 

      <div className="px-6 md:px-4 lg:px-2 xl:px-0 py-10 md:py-12 lg:py-14 max-w-7xl m-auto">
        
          <p className="text-3xl md:text-4xl lg:text-5xl pb-10 md:pb-12 lg:pb-14 font-bold text-slate-400">
            Моя корзина
          </p>
        <div className="flex flex-col gap-10">
            <div className="flex flex-col px-5 py-5 gap-4 bg-slate-100 rounded-3xl justify-between">
              {cartItems.map((item) => (
              

              <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-5">
                  <img alt="" src={item.image} className=" object-cover object-center lg:w-44 lg:h-44 md:w-40 md:h-40 w-28 rounded-3xl"></img>
                  <div className="flex flex-col gap-1">
                    <p className="text-xl md:text-2xl lg:text-3xl py-2 md:py-3 font-bold text-slate-800">
                      {item.name} 
                    </p>
                    <p className="text-base md:text-lg font-bold text-amber-500">
                      Цена: {item.price} руб.
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm md:text-base font-medium text-slate-600">
                        Количество: 
                      </p>
                      <Counter 
                        count={item.quantity}
                        addQuantity={() => addQuantity(item)}
                        reduceQuantity={() => reduceQuantity(item)}
                      /> 
                    </div>
                  
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  
                    <Button 
                    onClick={() => removeFromCart(item.id)}
                    title={'Удалить'}
                    variant='delete'
                    />
                </div>
              </div>
            
            ))}
            </div>

            <Button
                title={"Оформить заказ"}
                description={"Оформить заказ"}
                variant='default'
              /> 
          </div>
        </div>     
      
        
      };
      
    </div>
  );
}

export default Cart;
