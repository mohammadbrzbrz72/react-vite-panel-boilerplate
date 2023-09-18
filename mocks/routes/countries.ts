import { rest } from "msw";

import countriesData from "../db/countries.json";
import type { RoutesType } from "../types";

const routes: RoutesType = [];

routes.push(
  rest.get("/countries", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(countriesData));
  }),
);

export default routes;
