export enum Payment {
  card = 'card',
  cash = 'cash',
}

export interface IOrder {
  name: string;
  email?: string;
  location?: {
    city?: string;
    street?: string;
    floor?: string;
    entrance?: string;
    apartment?: string;
  };
  courier: boolean;
  delivery?: {
    date?: string;
    time?: string;
  };
  phone: string;
  comments?: string;
  payment: Payment;
}

export interface IAddress {
  street: string;
  apartment: string;
  entrance?: string | null;
  floor?: string | null;
}

export interface ILocation {
  city: string;
  street: string;
  floor: string;
  entrance: string;
  apartment: string;
}
