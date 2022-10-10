import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import {Home} from './Home'
import {Login} from './Login'
import {Dashboard} from './Dashboard'
import { Profile } from "./Profile";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/dashbord",
        element: <Dashboard/>
    },
    {
        path: "/:username",
        element: <Profile/>
    },
]);

export const Router = () => (
    <RouterProvider router={router} />
)