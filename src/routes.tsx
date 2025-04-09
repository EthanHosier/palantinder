import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Swipe from "./pages/swipe/Swipe";
import Auth from "./pages/Auth";
import AppLayout from "./layouts/AppLayout";
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
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <Swipe />,
          },
        ],
      },
    ],
  },
]);
