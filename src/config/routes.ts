import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About"

interface RouteType {     //Typescript -> creates a check for the format of the Routes!
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
    },
    {
        path: "/about",
        component: About,
        name: "About",
    },
];

export default routes

