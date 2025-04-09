import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Swipe from "./pages/Swipe";
import Auth from "./pages/Auth";
export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "/",
        element: <Swipe />,
      },
    ],
  },
]);
