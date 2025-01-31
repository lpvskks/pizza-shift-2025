import { Pizza } from '@/@types/interfacesPizzas';
import React from 'react';

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  return (
    <div className="w-[298.67px] h-[484px] bg-white flex flex-col py-4">
      <img
        src={`https://shift-intensive.ru/api${pizza.img}`} 
        className="w-[220px] h-[220px] mx-auto"
      />
      
      <div className="py-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
        <p className="font-normal text-gray-600">{pizza.description}</p>
        <h3 className="text-xl font-semibold mt-auto">от {pizza.sizes[0].price} ₽</h3>
      </div>

      <div className="mt-auto">
        <button className="w-full h-[56px] bg-brand text-white rounded-2xl hover:bg-orange-700 transition-colors">
          Выбрать
        </button>
      </div>
    </div>
  );
};


export default PizzaCard;