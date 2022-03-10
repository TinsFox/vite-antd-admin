import React, { useCallback, useMemo } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
export { default as routes } from './routes';

type PageRouterProps = {
  routeConfig: RouteConfig[];
};

export const PageRouter = React.memo<PageRouterProps>(({ routeConfig }) => {
  const getRouteElement = useCallback((routes: RouteConfig[]) => {
    return routes.map((route) => {
      /* 对于父级组件将不会渲染 */
      const renderElement = route.page && !route.children?.length ? route.page : <Outlet />;
      return (
        <Route key={route.path} path={route.path} element={renderElement}>
          {Array.isArray(route.children) && getRouteElement(route.children)}
        </Route>
      );
    });
  }, []);
  const routes = useMemo(() => {
    return getRouteElement(routeConfig);
  }, [getRouteElement, routeConfig]);
  return <Routes>{routes}</Routes>;
});
