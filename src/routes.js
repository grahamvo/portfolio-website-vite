import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "components/home/Home";
import Bio from "components/bio/Bio";
import Portfolio from "components/portfolio/Portfolio";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: "/bio", Component: Bio },
            { path: "/portfolio", Component: Portfolio}
        ]
    }
]);

export default router;
