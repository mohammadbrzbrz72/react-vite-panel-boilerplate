import { createBrowserRouter, Navigate } from "react-router-dom";

// auth routes
import LoginRouter from "@/pages/auth/login";
import SignUpPage from "@/pages/auth/sign-up";

// protected routes
import Layout from "@/layouts";
import DashboardPage from "@/pages/panel/dashboard";
import ProfilePage from "@/pages/panel/profile";

const routesOptions = {
  basename: "/panel",
};

const authRoutes = createBrowserRouter(
  [
    {
      path: "/auth",
      element: <Navigate to="/auth/login" replace />,
    },
    {
      path: "/auth",
      children: [
        {
          // index: true,
          path: "login",
          element: <LoginRouter />,
        },
        {
          path: "signup",
          element: <SignUpPage />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/auth/login" replace />,
    },
  ],
  routesOptions
);

const protectedRoutes = createBrowserRouter(
  [
    {
      path: "/panel",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/panel" replace />,
    },
  ],
  routesOptions
);

export default {
  authRoutes,
  protectedRoutes,
};
