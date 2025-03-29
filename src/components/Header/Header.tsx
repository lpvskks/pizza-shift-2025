import { headerItems } from '../../utils/constants/headerItems';
import IconWithText from './IconWithText';


const Header = () => (
    <header className="bg-white border border-gray-300 w-full h-[87px] flex items-center">
      <div className="flex flex-wrap items-center justify-between w-full lg:px-[240px] sm:px-6 px-4 h-[39px]">

        <div className="flex items-center">
          <img src="src/assets/images/logo.svg" alt="Logo" className="w-[102px] h-[39px]" />
        </div>

          {headerItems.map((item, index) => (
            <IconWithText
              key={index}
              src={item.src}
              alt={item.alt}
              text={item.text}
              className={item.className}
            />
          ))}
   
      </div>
    </header>
  );

export default Header;
