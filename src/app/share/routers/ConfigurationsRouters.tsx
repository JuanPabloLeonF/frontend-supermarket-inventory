import type { RouteObject } from "react-router";
import { PATH_ROUTES } from "../utils/ConstantsApp";
import { Navigate } from "react-router";
import { Login } from "../../ui/pages/login/Login";

export const appConfigurationRouters: RouteObject[] = [
  {
    path: PATH_ROUTES.LOGIN,
    element: <Login/>,
  },
  {
    path: PATH_ROUTES.ALL,
    element: <Navigate to={PATH_ROUTES.LOGIN} replace />,
  },
];
