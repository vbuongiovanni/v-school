import {createRoot} from "react-dom/client";
import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container);
root.render(
    <div>
        <h1>CSS Gradient Code Generator</h1>
        <App />
    </div>
)