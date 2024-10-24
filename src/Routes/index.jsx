import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import ScrollToTop from "./ScrollToTop";

export function Routes() {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
        </BrowserRouter>
    )
}