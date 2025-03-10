export interface PizzaIngridiet {
  name: string,
  cost: number,
  img: string
}

export interface PizzaSize {
  name: string,
  price: number
}

export interface PizzaDough {
  name: string,
  price: number
}

export interface Pizza {
  id: number,
  img: string,
  name: string,
  ingridients: PizzaIngridiet[],
  toppings: PizzaIngridiet[],
  description: string,
  sizes: PizzaSize[],
  calories: number,
  protein: string,
  totalFat: string,
  carbohydrates: string,
  sodium: string,
  allergens: string[],
  isVegetarian: boolean,
  isGlutenFree: boolean,
  isNew: boolean,
  isHit: boolean,
}