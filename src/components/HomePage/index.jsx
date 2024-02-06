import "./HomePage.css";
import Button from "components/Button";
import Header from "components/Header";
import Footer from "components/Footer";

function HomePage() {
  return ( 
    <div>
      <Header />
      
      {/* Тут будет баннер */}
      <div className="bg-image">
        <div className="px-6 md:px-4 lg:px-2 xl:px-0 max-w-7xl m-auto flex flex-col py-56 gap-8">
          <p className="text-8xl font-bold text-white">Ресторан у вас на кухне</p>
          <p className="text-4xl font-light text-white">Доставим еду из вашего любимого ресторана к вам домой!</p>
        </div>
      </div>


      {/* Каталог */}
      <div className="px-6 md:px-4 lg:px-2 xl:px-0 py-10 md:py-12 lg:py-14 max-w-7xl m-auto ">
        <p className="text-5xl font-bold pb-10 md:pb-12 lg:pb-14">Выберите ресторан ниже для доставки</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col px-5 py-5 bg-slate-100 rounded-3xl justify-between">
            <div className="flex flex-col gap-1">
              <img src="" alt="" />
              <p className="text-2xl pb-3 font-bold text-slate-800">
                Название ресторана
              </p>
              <p className="text-base font-semibold text-amber-500">
                Кухня: английская
              </p>
              <div className="flex gap-1 items-center">
                <p className="text-base font-medium text-slate-600">Мы работаем:</p>
                <span className="text-base font-medium text-slate-600">12:00 - 02:00</span>
              </div>
              <p className="text-base font-medium text-slate-600">Телефон</p>
            </div>
            <Button title={"Подробнее"} description={"Перейти в ресторан"}/>
          </div> 
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;