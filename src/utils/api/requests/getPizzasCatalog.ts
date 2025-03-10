import { PizzaCatalogResponse } from 'utils/types/interfacesApi';
import { instance } from '../../constants/api';

export const getPizzasCatalog = async () => {
  const response =  await instance.get<PizzaCatalogResponse>('/pizza/catalog');
  return response.data;
};
