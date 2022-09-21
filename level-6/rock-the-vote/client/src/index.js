import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { UserContextProvider } from "./context/UserContext";
import { IssueContextProvider } from "./context/IssueContext";
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <UserContextProvider>
        <IssueContextProvider>
          <App/>
        </IssueContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  </BrowserRouter>
);