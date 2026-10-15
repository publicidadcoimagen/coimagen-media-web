import { createRoot } from "react-dom/client";
import App from "./App";
import { redirectToPreferredLanguage } from "./lib/localePath";
import "./index.css";

if (!redirectToPreferredLanguage()) {
  createRoot(document.getElementById("root")!).render(<App />);
}
