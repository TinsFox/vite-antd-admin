import React from 'react';
import { Layout } from 'antd';
import { PageRouter, routes } from '@/router';
import { Header as PageHeader } from './Header';
import { SideMenu } from './SideMenu';
import { BrowserRouter } from 'react-router-dom';

const { Sider, Footer, Content } = Layout;

const PageLayout: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout style={{ height: '100vh' }}>
        <PageHeader
          title="管理后台"
          icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
        <Layout>
          <Sider style={{ background: '#fff' }}>
            <SideMenu />
          </Sider>
          <Layout style={{ justifyContent: 'space-between' }}>
            <Content>
              <PageRouter routeConfig={routes} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Power by React</Footer>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
export default PageLayout;
