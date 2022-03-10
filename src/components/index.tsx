import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const Store = React.createContext({});

export const RootElement: React.FC<{
  routeMode?: 'hash' | 'history';
  theme?: 'dark' | 'light';
  children: React.ReactNode;
}> = ({ routeMode, children }) => {
  const Router = routeMode === 'hash' ? HashRouter : BrowserRouter;

  return (
    <Store.Provider value={{}}>
      <Router>{children}</Router>
    </Store.Provider>
  );
};
