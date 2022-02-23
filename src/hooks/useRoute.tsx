import { matchRoutes, useLocation } from 'react-router-dom';
import { routes } from '@/router';
import { useMemo } from 'react';

export function useRoute() {
  const location = useLocation();

  const routeTree = useMemo(() => {
    return matchRoutes(routes, location.pathname)?.map(
      ({ route, pathname }) =>
        ({
          ...route,
          path: pathname,
        } as RouteConfig),
    );
  }, [location]);

  const route = useMemo(
    () => routeTree?.find(({ path }) => location.pathname === path),
    [location, routeTree],
  );
  return { routeTree, route, path: location.pathname };
}
