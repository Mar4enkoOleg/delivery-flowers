import { ERecountAction } from "../enums";
import { TFlowerWithCount } from "../types";

export const parseCurrentLocalStorage = () => {
  const ls = localStorage.getItem("cart");
  let parsedLs: TFlowerWithCount[] = [];

  if (ls) {
    parsedLs = JSON.parse(ls);
  }
  return parsedLs;
};

export const getTotalPrice = (): number => {
  let parsedCart: TFlowerWithCount[] = [];
  const storage = localStorage.getItem("cart");

  if (storage) parsedCart = JSON.parse(storage);

  return parsedCart.length
    ? parsedCart
        .map(({ price, count }) => price * count)
        .reduce((acc, val) => acc + val)
    : 0;
};

export const recountFlowersCount = (id: string, action: ERecountAction) => {
  let parsedCart: TFlowerWithCount[] = [];
  const storage = localStorage.getItem("cart");

  if (storage) parsedCart = JSON.parse(storage);

  let countedItem = parsedCart.find((item) => item.id === id);

  if (countedItem) {
    let oldCount = countedItem.count;

    if (action === ERecountAction.increment) {
      countedItem.count = oldCount + 1;
    } else {
      if (countedItem.count > 1) countedItem.count = oldCount - 1;
    }

    const newCart = parsedCart.filter((item) => item.id !== id);
    newCart.push(countedItem);
    newCart.sort((a, b) => a.price - b.price);

    localStorage.setItem("cart", JSON.stringify(newCart));
  }
};

export const getFlowerCounter = (id: string) => {
  let parsedCart: TFlowerWithCount[] = [];
  const storage = localStorage.getItem("cart");

  if (storage) parsedCart = JSON.parse(storage);

  return parsedCart.find((item) => item.id === id)?.count;
};
