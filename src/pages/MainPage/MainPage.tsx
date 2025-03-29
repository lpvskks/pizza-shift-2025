import { useEffect, useState } from 'react';
import { getPizzasCatalog } from '../../utils/api/requests/getPizzasCatalog';
import PizzaCard from './PizzaCard';
import { Pizza } from 'utils/types/interfacesPizzas';

const MainPage = () => {
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