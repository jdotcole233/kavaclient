import { createBrowserRouter } from "react-router-dom";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import Account from "./pages/Account";
import AllOffers from "./pages/AllOffers";
import AllTreaties from "./pages/AllTreaties/AllTreaties";
import Dashboard from "./pages/Dashboard";
import LoginScreen from "./pages/Login/Login";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Activities from "./pages/Activities";

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
        element: <Dashboard />,
      },
      {
        path: "offers",
        element: <AllOffers />,
      },
      {
        path: "treaties",
        element: <AllTreaties />,
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
          {
            path: "activities",
            element: <Activities />,
          },
        ],
      },
    ],
  },
]);

export default router;
