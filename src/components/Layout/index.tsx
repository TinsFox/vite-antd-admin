import React from 'react';
import { Layout } from 'antd';
import { PageRouter, routes } from '@/router';
import { Header as PageHeader } from './Header';
import { SideMenu } from './SideMenu';
import { useRoute } from '@/hooks/useRoute';
import { useTitle } from 'ahooks';
import { ErrorBoundary } from '../ErrorBoundary';
import { ServerError } from '../feedback';

const { Sider, Footer, Content } = Layout;

const PageLayout: React.FC = () => {
  const { route } = useRoute();
  useTitle(route?.meta.title ?? '管理后台');

  return (
    <Layout style={{ height: '100vh' }}>
      <PageHeader title="管理后台" icon="/static/images/favicon.svg" />
      <Layout>
        <Sider style={{ background: '#fff' }}>
          <SideMenu />
        </Sider>
        <Layout style={{ justifyContent: 'space-between' }}>
          <Content>
            <ErrorBoundary fallback={<ServerError />}>
              <PageRouter routeConfig={routes} />
            </ErrorBoundary>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Power by React</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
