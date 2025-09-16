export type TShop = {
  id: string;
  name: string;
};
export type TFlower = {
  id: string;
  name: string;
  price: number;
  shopId: string;
  createdAt: string;
};

export type TFlowerWithCount = TFlower & {
  count: number;
};

export type TFlowerData = {
  flowers: TFlower[];
  total: number;
};
