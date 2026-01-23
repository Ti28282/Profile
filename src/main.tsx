import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const boot = document.getElementById("boot");
if (boot) {
  requestAnimationFrame(() => {
    boot.classList.add("hidden");
    setTimeout(() => boot.remove(), 400);
  });
}
createRoot(document.getElementById("root")!).render(<App />);
