import React, { useMemo } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  HashRouter,
} from "react-router-dom";
export { default as routes } from "./routes";

type RouterManagerProps = {
  mode?: "hash" | "history";
  routeConfig: RouteConfig[];
};

export const RouterManager = React.memo<RouterManagerProps>(
  ({ mode, routeConfig }) => {
    const getRoutes = (routes: RouteConfig[]) => {
      return routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <>
              {route.page}
              <Outlet />
            </>
          }
        >
          {Array.isArray(route.children) && getRoutes(route.children)}
        </Route>
      ));
    };

    const routes = useMemo(() => {
      return getRoutes(routeConfig);
    }, [routeConfig]);

    const Router = mode === "hash" ? HashRouter : BrowserRouter;

    return (
      <Router>
        <Routes>{routes}</Routes>
      </Router>
    );
  }
);
