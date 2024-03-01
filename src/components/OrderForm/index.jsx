import "./OrderForm.css";
import Button from "components/Button";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function OrderForm( {closeModal} ) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );
  console.log(setCartItems)

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log("cartItems", cartItems)
  
  return (
    // flex поменять на ! hidden !
    <div className="modal-window fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="flex flex-col bg-white py-8 px-10 h-4/5 w-4/5 md:w-9/12 lg:w-2/4 rounded-3xl gap-5 relative overflow-auto">
        <p className="text-xl md:text-2xl lg:text-3xl py-2 md:py-3 font-bold text-slate-800">
          Проверьте Ваш заказ и заполните форму
        </p>

        <div className="flex flex-col gap-10">
            <div className="flex flex-col px-5 py-5 gap-4 bg-slate-100 rounded-3xl justify-between">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-5">
                    <img
                      alt=""
                      src={item.image}
                      className=" object-cover object-center lg:w-32 lg:h-32 md:w-24 md:h-24 w-20 rounded-3xl"
                    ></img>
                    <div className="flex flex-col gap-1">
                      <p className="text-lg md:text-xl lg:text-2xl pb-1 md:pb-2 font-bold text-slate-800">
                        {item.name}
                      </p>
                      <p className="text-sm md:text-base font-bold text-amber-500">
                        Цена: {item.price} руб.
                      </p>
                      <div className="flex flex-col gap-2">
                        <p className="text-sm md:text-base font-medium text-slate-600">
                          Количество: {item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-col gap-2">
                    <ButtonOrderForm
                      onClick={() => removeFromCart(item.id)}
                      title={"Удалить"}
                      variant="delete"
                    />
                  </div> */}
                </div>
              ))}
            </div>
        </div>

        <div className="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <p class="text-sm font-medium text-slate-500">
              Фамилия Имя <span class="text-rose-400">*</span>
            </p>
            <input
              id="customerName"
              type="text"
              placeholder="Введите фамилию и имя"
              class="py-3 px-4 bg-slate-100 rounded-xl text-slate-900 outline-0 text-base"
            />
          </div>

          <div class="flex flex-col gap-1">
            <p class="text-sm font-medium text-slate-500">
              Телефон для связи <span class="text-rose-400">*</span>
            </p>
            <input
              id="phone"
              type="text"
              placeholder="Введите телефон"
              class="py-3 px-4 bg-slate-100 rounded-xl text-slate-900 outline-0 text-base"
            />
          </div>

          <div class="flex flex-col gap-1">
            <p class="text-sm font-medium text-slate-500">
              E-mail <span class="text-rose-400">*</span>
            </p>
            <input
              id="email"
              type="text"
              placeholder="Введите e-mail"
              class="py-3 px-4 bg-slate-100 rounded-xl text-slate-900 outline-0 text-base"
            />
          </div>
          <p class="text-xs font-medium text-slate-900 py-3 px-4 text-center border border-red-200 rounded-xl">
            На электронную почту вам придёт подтверждение заказа. Ожидайте Ваш
            заказ в ближайшее время!
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button title="Отправить" variant="addsuccess" />
          <Button 
            title="Отменить" 
            variant="delete" 
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
}

export default OrderForm;

// customerName - имя пользователя
// phone - телефон пользователя
// email - почта пользователя
// restaurantId - id ресторана, из которого заказывают
// cartItems - массив выбранных товаров. Каждый элемент массива должен содержать id товара itemId, количество quantity и цену price

// const requestBody = {
//     customerName: "Анна Петрова",
//     phone: "123456789",
//     email: "petrova@example.com",
//     restaurantId: 2,
//     cartItems: [
//       { itemId: 2, quantity: 1, price: 400 },
//       { itemId: 20, quantity: 3, price: 230 },
//       { itemId: 31, quantity: 2, price: 450 }
//     ]
//   }
