import {createRoot, } from "react-dom/client";
import App from "./App";
import {AppContextProvider} from "./AppContext"

const root = createRoot(document.getElementById("root"));

root.render(
    <AppContextProvider>
        <App/>
    </AppContextProvider>
);