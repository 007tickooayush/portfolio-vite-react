import { createBrowserRouter } from "react-router-dom";
import Root from "../_components/Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            
        ]
    }
]);