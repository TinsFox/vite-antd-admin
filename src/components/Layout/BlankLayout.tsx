import React from 'react';
import { Outlet } from 'react-router-dom';
const BlankLayout: React.FC = () => {
  return (
    <>
      <h1>BlankLayout</h1>
      <Outlet />
    </>
  );
};

export default BlankLayout;
