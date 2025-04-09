import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Swipe from "./pages/swipe/Swipe";
import Auth from "./pages/Auth";
import AppLayout from "./layouts/AppLayout";
import Profile from "./pages/Profile";
import AllLikes from "./pages/likes/AllLikes";
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
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/likes",
            element: <AllLikes />,
          },
        ],
      },
    ],
  },
]);
