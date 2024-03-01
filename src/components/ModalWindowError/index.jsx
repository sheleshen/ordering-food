import "./ModalWindowError.css";
import Button from "components/Button";
import { Link } from "react-router-dom";

function ModalWindowError() {
  return (
    // flex поменять на ! hidden !
    <div className="modal-window fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="h-window flex flex-col bg-white py-8 px-10 w-2/4 lg:w-2/5 rounded-3xl gap-5 relative overflow-auto">
        <p className="text-lg md:text-xl lg:text-2xl pb-1 md:pb-2 font-bold text-rose-500">
          В вашей корзине уже есть товары из другого ресторана!
        </p>
        {/* Предложение удалить позиции в корзине (кнопка перейти в корзину) 
                Либо тут вывести товары из корзины с кнопками удаления*/}
        <p className="text-sm md:text-base font-medium text-slate-600">
          Вы можете удалить позиции и сделать новый заказ
        </p>
        <Link to={`/cart`}>
          <Button
            title="Перейти в козину"
            variant="default"
          />
        </Link>

        <Button
          title="Отмена"
          variant="delete"
        />
      </div>
    </div>
  );
}

export default ModalWindowError;
