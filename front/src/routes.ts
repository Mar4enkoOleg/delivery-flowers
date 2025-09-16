import History from "./pages/history";
import Shop from "./pages/shop";
import ShoppingCart from "./pages/shopping-cart";

export const routes = [
  { path: "/shops", Component: Shop },
  { path: "/history", Component: History },
  { path: "/cart", Component: ShoppingCart },
];
