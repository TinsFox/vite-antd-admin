import React from 'react';
import type { ResultProps } from 'antd';
import { Button, Result as AntdResult } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Result = React.memo<Pick<ResultProps, 'status' | 'title' | 'subTitle'>>(
  ({ status, title, subTitle }) => {
    const navigate = useNavigate();

    return (
      <AntdResult
        status={status}
        title={title}
        subTitle={subTitle}
        extra={
          <Button type="primary" onClick={() => navigate(-1)}>
            返回上一页
          </Button>
        }
      />
    );
  },
);

export const NoMatch = React.memo(() => {
  return <Result status="404" title="404" subTitle="抱歉，您访问的页面不存在" />;
});

export const UnAccessible = React.memo(() => {
  return <Result status="403" title="403" subTitle="抱歉，您无权访问该页面" />;
});

export const ServerError = React.memo(() => {
  return <Result status="500" title="500" subTitle="抱歉，页面出错了" />;
});
