// handler.js is a module where we will have all our request handlers.
// The handlers from this module can be reused for both browser and Node.
import authRoutes from "./routes/auth";
import countriesRoutes from "./routes/countries";
import userRoutes from "./routes/user";

export const handlers = [authRoutes, countriesRoutes, userRoutes].flat();
