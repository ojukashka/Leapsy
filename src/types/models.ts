export interface IProduct {
  id: number;
  name: string;
  price: string;
  img: string;
}

export interface IProducts extends Array<IProduct> {}
