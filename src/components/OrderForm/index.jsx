import "./OrderForm.css";
import Button from "components/Button";
import { useState } from "react";

function OrderForm( {closeModal, cartItems, clearCart, restaurantId} ) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorInput, setErrorInput] = useState(false)
  // console.log("Ошибка поля", errorInput)

  // Отправить заказ
  const handleSubmitForm = (event) => {
    event.preventDefault()

    if (customerName === '' || phone === '' || email ==='') {
      setErrorInput(true)
    }

    const requestBody = {
      customerName,
      phone,
      email,
      restaurantId,
      cartItems: cartItems.map((item) => ({
        itemId: item.itemId,
        quantity: item.quantity,
        price: item.price
      }))
    };

    fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/order`, {
      method: 'POST',
      body: JSON.stringify(requestBody)
    }
    )
    .then (resronce => {
       if (resronce.ok) {
        alert("Ваш заказ успешно оформлен")
        closeModal()
        clearCart()
       } else {
        alert("Произошла ошибка!")
       }
    })
  };

  return (
    <div className="modal-window fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="flex flex-col bg-white py-8 px-10 h-4/5 w-4/5 md:w-9/12 lg:w-2/4 rounded-3xl gap-5 relative overflow-auto">
        <p className="text-xl md:text-2xl lg:text-3xl py-2 md:py-3 font-bold text-slate-800">
          Проверьте Ваш заказ и заполните форму
        </p>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col px-5 py-5 gap-4 bg-slate-100 rounded-3xl justify-between">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
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
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmitForm}>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-slate-500">
                Фамилия Имя <span className="text-rose-400">*</span>
              </p>
                
              <input
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                name="customerName"
                type="text"
                placeholder="Введите фамилию и имя"
                className="py-3 px-4 bg-slate-100 rounded-xl text-slate-900 outline-0 text-base"
              />
              {errorInput && 
                  <p className="text-sm text-rose-400">Заполните поле</p>
                }
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-slate-500">
                Телефон для связи <span className="text-rose-400">*</span>
              </p>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                name="phone"
                type="text"
                placeholder="Введите телефон"
                className="py-3 px-4 bg-slate-100 rounded-xl text-slate-900 outline-0 text-base"
              />
              {/* {errorInput && 
                  <p className="text-sm text-rose-400">Заполните поле</p>
                } */}
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-slate-500">
                E-mail <span className="text-rose-400">*</span>
              </p>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                type="text"
                placeholder="Введите e-mail"
                className="py-3 px-4 bg-slate-100 rounded-xl text-slate-900 outline-0 text-base"
              />
              {/* {errorInput && 
                  <p className="text-sm text-rose-400">Заполните поле</p>
                } */}
            </div>

            <p className="text-xs font-medium text-slate-900 py-3 px-4 text-center border border-red-200 rounded-xl">
              На электронную почту вам придёт подтверждение заказа. Ожидайте Ваш
              заказ в ближайшее время!
            </p>
          </div>

          <div className="flex gap-4 justify-center pt-3">
            <Button
              title="Отправить"
              variant="addsuccess"
              type="submit"
            />
            <Button
              title="Отменить"
              variant="delete"
              closeModal={closeModal()}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;