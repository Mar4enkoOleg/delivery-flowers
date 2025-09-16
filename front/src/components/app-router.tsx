import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";

const AppRouter = () => (
  <Routes>
    {routes.map(({ path, Component }) => (
      <Route key={path} path={path} Component={Component}></Route>
    ))}
  </Routes>
);

export default AppRouter;
