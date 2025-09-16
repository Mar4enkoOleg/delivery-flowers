import History from "./pages/history";
import OrderDetails from "./pages/order-details";
import Shop from "./pages/shop";
import ShoppingCart from "./pages/shopping-cart";

export const routes = [
  { path: "/shops", Component: Shop },
  { path: "/history", Component: History },
  { path: "/cart", Component: ShoppingCart },
  { path: "/order-details/:id", Component: OrderDetails },
];
