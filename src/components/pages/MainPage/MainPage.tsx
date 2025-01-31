import React, { useEffect, useState } from 'react';
import { getPizzasCatalog } from '../../../core/api/requests/getPizzasCatalog';
import { Pizza } from '@/@types/interfacesPizzas';
import PizzaCard from './PizzaCard';

const MainPage: React.FC = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      const response = await getPizzasCatalog();
      if (response.success) {
        setPizzas(response.catalog);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="mt-[48px] px-36">
    <div className="flex flex-wrap justify-center gap-9">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  </div>
  
  );
};

export default MainPage;