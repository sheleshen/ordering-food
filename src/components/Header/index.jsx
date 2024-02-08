import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-lg shadow-slate-200">
      <div className="px-6 md:px-4 lg:px-2 xl:px-0 max-w-7xl m-auto py-8 flex flex-row justify-between items-center">
        {/* Лого */}
        <div className="flex gap-4 items-center">
          <Link to={`/`}>
            <div>
              <img
                className="w-10"
                src="/image/logo-header.png"
                alt="Логотип"
              />
            </div>
          </Link>
          <p className="font-extrabold text-xl text-slate-700">О, да! Еда!</p>
        </div>

        {/* Корзина и избранное */}
        <div className="flex gap-4">
          {/* <div className="text-slate-900">Избранное</div> */}
          <Link to={`/cart`}>
            <div className="text-slate-900">Корзина</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
