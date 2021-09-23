export interface ISliderSettings {
  automated?: boolean;
  endless?: boolean;
  slidesAmount: number;
}

export const DEFAULT_SETTINGS = {
  automated: true,
  endless: true,
  slidesAmount: 1,
};

export interface ISliderProduct {
  id: string;
  name: string;
  rating: number;
  price: number;
  img: string;
  category: string;
}
