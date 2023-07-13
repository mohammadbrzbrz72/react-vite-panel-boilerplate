import { RouterProvider } from "react-router-dom";

import router from "./routes";
import { authSelector } from "@/store/selectors/auth";

/**
  ** local project route: http://localhost:5173/panel/auth/login
  origin:                 http://localhost:5173
  basename or homepage:   /panel
  path:                   /auth/login or /*

  basename is for auth routes and protected routes in panel
  it configured in package.json { "homepage": "panel" }
  and Routes options (createBrowserRouter([], options))
 */

export default function Provider() {
  const { isLogin } = authSelector();

  return (
    <RouterProvider
      router={isLogin ? router.protectedRoutes : router.authRoutes}
    />
  );
}
