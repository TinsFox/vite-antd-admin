import React, { useCallback, useMemo } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
export { default as routes } from './routes';

type RouterManagerProps = {
  mode?: 'hash' | 'history';
  routeConfig: RouteConfig[];
};

export const RouterManager = React.memo<RouterManagerProps>(({ routeConfig }) => {
  const getRoutes = useCallback((routes: RouteConfig[]) => {
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
  }, []);

  const routes = useMemo(() => {
    return getRoutes(routeConfig);
  }, [getRoutes, routeConfig]);
  return <Routes>{routes}</Routes>;
});
