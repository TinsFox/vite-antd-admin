import React from 'react';
import { Spin } from 'antd';
import styles from './styles.module.less';

type PageContainerProps = {
  loading?: boolean;
};

export const PageContainer: React.FC<PageContainerProps> = ({ loading, children }) => {
  return (
    <Spin spinning={!!loading} size="large" tip="数据加载中" wrapperClassName={styles.spinning}>
      <div>{children}</div>
    </Spin>
  );
};

PageContainer.displayName = 'PageContainer';
