import { createBrowserRouter } from "react-router-dom";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import LoginScreen from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <LoginScreen />,
      },
    ],
  },
  {
    path: "app",
    element: <Admin />,
    children: [
      {
        index: true,
        element: null,
      },
    ],
  },
]);

export default router;