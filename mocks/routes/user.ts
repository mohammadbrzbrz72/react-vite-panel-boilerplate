import { rest } from "msw";

import type { RoutesType } from "../types";

const routes: RoutesType = [];

routes.push(
  rest.get("/user", (req, res, ctx) => {
    const userId = req.url.searchParams.get("userId");
    console.log(req.params.postId);

    if (userId === "abc-123") {
      // Return a mocked response only if the `userId` query parameter
      // equals to a specific value.
      return res(
        ctx.json({
          firstName: "John",
          lastName: "Maverick",
        }),
      );
    }

    // Otherwise, explicitly state that you wish to perform this request as-is.
    return req.passthrough();
  }),
);

export default routes;
