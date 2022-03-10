import type { FC } from 'react';
import { useState } from 'react';
import ProLayout from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import { Outlet } from 'react-router-dom';
import defaultConfig from '../../../config';
const BasicLayout: FC = ({ children }) => {
  console.log('render');
  const [pathname, setPathname] = useState('/dashboard');
  return (
    <ProLayout
      layout="mix"
      {...defaultProps}
      defaultCollapsed
      location={{
        pathname,
      }}
      {...defaultConfig}
      waterMarkProps={{
        content: 'Lottery Dashboard',
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            console.log(item.path);
            setPathname(item.path || '/dashboard');
          }}
        >
          {dom}
        </a>
      )}
    >
      {children}
      <Outlet />
    </ProLayout>
  );
};

export default BasicLayout;
