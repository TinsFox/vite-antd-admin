import React from 'react';
import { Spin, Breadcrumb, PageHeader } from 'antd';
import styles from './styles.module.less';
import { useRoute } from '@/hooks/useRoute';

type PageContainerProps = {
  loading?: boolean;
};

export const PageContainer: React.FC<PageContainerProps> = ({ loading, children }) => {
  const { routeTree } = useRoute();
  return (
    <Spin spinning={!!loading} size="large" tip="数据加载中" wrapperClassName={styles.spinning}>
      <PageHeader
        breadcrumb={
          <Breadcrumb>
            {routeTree?.map((item, idx) => {
              return <Breadcrumb.Item key={idx.toString()}>{item?.meta?.title}</Breadcrumb.Item>;
            })}
          </Breadcrumb>
        }
      />
      <>
        <div>{children}</div>
      </>
    </Spin>
  );
};

PageContainer.displayName = 'PageContainer';
