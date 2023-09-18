import ReactDOM from "react-dom/client";

import App from "./App";
// global styles
import "./styles/globals.css";
import "./styles/index.css";
// Start mock server in development mode (See success message in console log -> [MSW] Mocking enabled.)
import "./utils/mock";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(<App />);
