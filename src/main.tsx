import ReactDOM from "react-dom/client";

import App from "./App";
// global styles
import "./styles/globals.css";
import "./styles/index.css";

// Start Mock Service Worker in development mode
if (import.meta.env.DEV) {
  const { worker } = await import("../mocks/browser.ts");
  worker.start();
}

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(<App />);
