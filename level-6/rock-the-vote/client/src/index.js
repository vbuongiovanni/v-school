import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {UserContextProvider} from "./context/UserContext";
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <App/>
    </UserContextProvider>
  </BrowserRouter>
);