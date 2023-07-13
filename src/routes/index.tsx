import { RouterProvider } from "react-router-dom";

import router from "./routes";
import { authSelector } from "@/store/selectors/auth";

export default function Provider() {
  const { isLogin } = authSelector();

  return (
    <RouterProvider
      router={isLogin ? router.protectedRoutes : router.authRoutes}
    />
  );
}
