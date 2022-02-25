import { PageContainer } from '@/components/PageContainer';
import { Button, Card, Col, Drawer, Form, Input, InputNumber, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';

const AwardForm: React.FC<{
  visible: boolean;
  item?: Record<string, any>;
  onCancel: () => void;
  onSuccess?: (values: Record<string, any>) => void;
}> = ({ item, visible, onCancel, onSuccess }) => {
  return (
    <Drawer title="奖品设置" visible={visible} onClose={onCancel} destroyOnClose>
      <Form onFinish={onSuccess} initialValues={item}>
        <Form.Item label="奖品名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="奖品数量" name="stock">
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

const Login: React.FC = () => {
  const [state, setState] = useState<Record<string, any>>({});
  const [editingItem, setEditingItem] = useState<[string | number, Record<string, any>]>();
  const [index, setIndex] = useState<string | number>('');
  return (
    <PageContainer>
      <AwardForm
        item={editingItem}
        visible={!!editingItem}
        onCancel={() => {
          setEditingItem(undefined);
        }}
        onSuccess={(v) => {
          setState((prev) => ({ ...prev, [index]: v }));
          setEditingItem(undefined);
        }}
      />
      <Row gutter={[16, 16]} style={{ width: 750, marginLeft: 30 }}>
        {Array.from({ length: 9 }, (_, x) => x).map((idx) => (
          <Col span={8} key={idx.toString()}>
            <Card
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                setEditingItem(state[idx] ?? {});
                setIndex(idx);
              }}
            >
              {!state[idx] ? (
                <span>设置奖品</span>
              ) : (
                <Space direction="vertical">
                  <span>{state[idx].name}</span>
                  <span>{state[idx].stock}</span>
                </Space>
              )}
            </Card>
          </Col>
        ))}
      </Row>
      <Typography.Paragraph>{JSON.stringify(Object.values(state))}</Typography.Paragraph>
    </PageContainer>
  );
};

export default Login;
