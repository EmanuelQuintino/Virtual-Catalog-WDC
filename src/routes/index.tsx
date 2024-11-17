import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
