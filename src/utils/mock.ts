// Start Mock Service Worker in development mode
if (import.meta.env.DEV) {
  const { worker } = await import("../../mocks/browser.ts");

  worker.start({
    /**
     * boolean (default: false)
     * true -> Disables the logging of matched requests in a browser's console.
     */
    quiet: false,
    /**
     * (default: "warn") -> Produces a warning in the browser's console.
     * Specifies how to handle a request that is not listed in the request handlers.
     * "error" -> Produces an error in the browser's console.
     */
    onUnhandledRequest: "error",
  });
}
