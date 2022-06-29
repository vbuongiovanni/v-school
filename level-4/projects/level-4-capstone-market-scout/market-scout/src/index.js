import {createRoot} from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App"
const root = createRoot(document.getElementById("root"));
root.render(
        <BrowserRouter> {/*This gives react router visibility of components outside its scope. will error out if excluded*/}
                <App/>
        </BrowserRouter>
)