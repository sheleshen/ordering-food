function Header() {

    return (
        <header className="bg-white shadow-lg shadow-slate-200">
            <div className="px-6 md:px-4 lg:px-2 xl:px-0 max-w-7xl m-auto py-8 flex flex-row justify-between">
                {/* Лого */}
                <div>
                    Лого
                </div>
                {/* Корзина и избранное */}
                <div className="flex gap-4">
                    <div>
                        Избранное
                    </div>
                    <div>
                        Корзина
                    </div>
                </div> 
            </div>
        </header>
    )     
}

export default Header