// src/mocks/browser.js
import { rest, setupWorker } from "msw";

import { mocks } from "./handlers";

// This configures a Service Worker with the given mocks api.
export const worker = setupWorker(...mocks);

/**
 * Write the stop method on the window to access during runtime,
 * Calling window.__mswStop() in the browser would disable the mocking for the current page.
 *
 * Make the `worker` and `rest` references available globally,
 * so they can be accessed in both runtime and test suites (in E2E tests like Cypress)
 * Example at this website will illustrate the usage of this method in E2E tests with Cypress: https://mswjs.io/docs/api/setup-worker/use
 */
window.msw = {
  __mswStop: worker.stop,
  worker,
  rest,
};
