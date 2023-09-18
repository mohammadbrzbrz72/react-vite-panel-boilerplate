import { rest } from "msw";

import authData from "../db/auth.json";
import { resp } from "../tools";
import type { RoutesType } from "../types";

const AUTH_KEY = import.meta.env.VITE_STORAGE_KEY_IS_AUTHENTICATED;
const routes: RoutesType = [];

routes.push(
  rest.post("/sign-in", async (req, _, ctx) => {
    const { email, password } = await req.json();

    if (email === "jack@mail.com" && password === "123456") {
      // Persist user's authentication in the session for request guard
      sessionStorage.setItem(AUTH_KEY, "true");

      return resp(200, ctx.json(authData.user));
    }

    return resp(
      401,
      ctx.json({
        message: "Invalid email or password",
      }),
    );
  }),

  rest.post("/sign-up", async (req, res, ctx) => {
    const { email, password } = await req.json();

    if (email && password) {
      // Persist user's authentication in the session
      sessionStorage.setItem(AUTH_KEY, "true");
      return res(ctx.status(200), ctx.json(authData.user));
    }

    return res(res => {
      res.headers.set("Content-Type", "application/json");
      res.status = 401;
      res.body = { message: "Invalid email or password" };

      return res;
    });
    // ctx.status(401),
    // ctx.json({
    //   message: "Invalid email or password",
    // }),
  }),

  rest.post("/logout", () => {
    // Remove user's authentication in the session for request guard
    sessionStorage.removeItem(AUTH_KEY);
  }),
);

export default routes;
