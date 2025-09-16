export type FlowerToOrder = {
  flowerId: string;
  count: number;
};

export type CreateOrder = {
  name: string;
  phone: string;
  email: string;
  address: string;
  flowers: FlowerToOrder[];
};

export type GetOrderParams = {
  email: string;
};
