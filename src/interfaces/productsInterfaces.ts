
export interface IProduct {
  id: number;
  title: string;
  price: string;
  rating: number;
  imgSrc: string;
}

export interface IProductsRow{
  productsList: IProduct[]
}