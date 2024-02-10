import "./OrderForm.css";

function OrderForm() {
  return <div>Модальное окно для заказа.</div>;
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
