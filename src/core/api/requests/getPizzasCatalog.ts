import { PizzaCatalogResponse } from '@/@types/interfacesApi';
import { instance } from '../../constants/api';

export const getPizzasCatalog = async (): Promise<PizzaCatalogResponse> => {
  const response =  await instance.get(`/pizza/catalog`);
  return response.data;
};
