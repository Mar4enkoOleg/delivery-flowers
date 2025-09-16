export type TShop = {
  id: string;
  name: string;
};
type TFlower = {
  id: string;
  name: string;
  price: number;
  shopId: string;
  createdAt: string;
};

export type TFlowerData = {
  flowers: TFlower[];
  total: number;
};
