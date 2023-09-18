import type { SetupWorker, StopHandler, rest } from "msw";

/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />
declare module "*.jpg";
declare module "redux-persist/lib/storage";

declare global {
  interface Window {
    msw: {
      __mswStop: StopHandler;
      worker: SetupWorker;
      rest: typeof rest;
    };
  }
}
