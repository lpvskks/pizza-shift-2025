const Header = () => {
  return (
    <header className="bg-white border border-gray-300 w-full h-[87px] flex items-center">
      <div className="flex flex-wrap items-center justify-between w-full lg:px-[240px] sm:px-6 px-4 h-[39px]">

        <div className="flex items-center">
          <img src="src/assets/images/logo.svg" alt="Logo" className="w-[102px] h-[39px]" />
        </div>

        <div className="flex items-center ml-8 mr-6">
          <img src="src/assets/images/User.svg" alt="Профиль" className="w-[24px] h-[24px]" />
          <span className="text-[16px] font-medium text-gray-800 pl-3">Профиль</span>
        </div>

        <div className="flex items-center">
          <img src="src/assets/images/Time.svg" alt="Заказы" className="w-[24px] h-[24px]" />
          <span className="text-[16px] font-medium text-gray-800 pl-3">Заказы</span>
        </div>

        <div className="flex items-center ml-auto">
          <img src="src/assets/images/basket.svg" alt="Корзина" className="w-[24px] h-[24px]" />
          <span className="text-[16px] font-medium text-gray-800 pl-3">Корзина</span>
        </div>

      </div>
    </header>
  );
};

export default Header;
