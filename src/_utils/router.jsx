import { createBrowserRouter } from "react-router-dom";
import Root from "../_components/Root";
import Home from "../_components/Home";
import About from "../_components/About";
import Projects from "../_components/Projects";
import Contact from "../_components/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);