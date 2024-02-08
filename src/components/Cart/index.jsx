import "./Cart.css";

function Cart() {

    return (
        <div className="px-6 md:px-4 lg:px-2 xl:px-0 py-28 md:py-32 lg:py-40 max-w-7xl m-auto ">
            <div className="flex flex-col gap-10 items-center">
                <img className="w-40" src="/image/shopping-bag.png" alt="" />
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400">
                    Ваша корзина пуста
                </p>
            </div>
            
        </div>
    )
    
}

export default Cart;