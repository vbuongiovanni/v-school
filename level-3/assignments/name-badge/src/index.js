import {createRoot} from "react-dom/client";
import App from "./App"

const reactContainer = document.getElementById("root");

const root = createRoot(reactContainer);

root.render(<App />)
