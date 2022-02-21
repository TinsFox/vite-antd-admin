import React, { useCallback } from 'react';
import { routes } from '@/router';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export const SideMenu: React.FC = () => {
  const getMenuElement = useCallback((routeConfig: RouteConfig[], parentRoutePath?: string) => {
    return routeConfig.map((route) => {
      const routePath = (parentRoutePath ?? '') + `/${route.path.replace(/^\//g, '')}`;
      if (route.children?.length) {
        return (
          <Menu.SubMenu key={routePath} icon={route.meta.icon} title={route.meta.title}>
            {getMenuElement(route.children, routePath)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={routePath} icon={route.meta.icon}>
          <Link to={routePath}>{route.meta.title}</Link>
        </Menu.Item>
      );
    });
  }, []);

  return <Menu mode="inline">{getMenuElement(routes)}</Menu>;
};
