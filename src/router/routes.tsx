import Home from "../pages/home";
import Login from "../pages/login";

const routes: RouteConfig[] = [
  {
    path: "/home",
    title: "首页",
    page: <Home />,
  },
  {
    path: "/login",
    title: "登录",
    page: <Login />,
  },
];

export default routes;
