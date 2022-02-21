import { Col, Layout, Row, Image, Space, Typography } from 'antd';

export type HeaderProps = {
  icon: string;
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ icon, title }) => {
  return (
    <Layout.Header style={{ background: '#fff' }}>
      <Row justify="space-between" align="middle">
        <Col>
          <Space size={12} direction="horizontal">
            <Image src={icon} height={36} preview={false} />
            <Typography.Title level={4} style={{ margin: 'unset' }}>
              {title}
            </Typography.Title>
          </Space>
        </Col>
        <Col>用户</Col>
      </Row>
    </Layout.Header>
  );
};
