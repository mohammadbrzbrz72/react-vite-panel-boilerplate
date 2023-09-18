import { context, response } from "msw";
import type { ResponseTransformer } from "msw";

export function resp(status: number, ...transformers: ResponseTransformer[]) {
  // A custom response composition chain that embeds
  // a random realistic server response delay to each `res()` call.
  return response(...transformers, context.status(status), context.delay(1500));
}
