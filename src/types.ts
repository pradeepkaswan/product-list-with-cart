type DessertImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Dessert = {
  image: DessertImage;
  name: string;
  category: string;
  price: number;
};

export type CartItem = Dessert & {
  quantity: number;
};
