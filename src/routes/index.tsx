import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Details } from "../pages/Details";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/product/:name", element: <Details /> },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
