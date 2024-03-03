import "./ModalWindowError.css";
import Button from "components/Button";

function ModalWindowError({ closeModal, clearCart }) {
  return (
    <div className="modal-window fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="h-window flex flex-col bg-white py-8 px-10 w-2/4 lg:w-2/5 rounded-3xl gap-5 relative overflow-auto">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-rose-500">
          В вашей корзине уже есть товары из другого ресторана!
        </p>
        <p className="text-base md:text-lg font-medium text-slate-600">
          Ваша корзина будет очищена. Хотите продолжить?
        </p>
        <div className="flex gap-3">
          <Button title="Продолжить" variant="delete" onClick={clearCart} />
          <Button title="Отменить" variant="default" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default ModalWindowError;
