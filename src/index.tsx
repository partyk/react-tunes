import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.scss';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import HomeComponent from "./views/home/Home";
import TunesComponent from "./views/tunes/Tunes";
import AboutComponent from "./views/about/About";
import ErrorPage from "./views/error/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeComponent />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "tunes",
                element: <TunesComponent />
            },
            {
                path: "about",
                element: <AboutComponent />
            }
        ]
    },
    /*
    {
        path: "tunes",
        Component: TunesComponent
    },
    {
        path: "about",
        element: <AboutComponent />
    }
     */
]);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
