import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';
import logo from '/static/images/logo.svg';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

/* 登陆表单 */
interface ILogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [form, setForm] = useState<ILogin>();
  const onSubmitForm = (values: ILogin) => {
    setForm(values);
    console.log('Received values of form: ', values);
  };
  const renderLabel = (label: string) => <div className={styles.label}>{label}</div>;
  return (
    <div className={styles.login}>
      <div className={styles['login-box']}>
        <div>
          <img src={logo} className={styles.logo} />
          <div className={styles.title}>Vite Antd Admin</div>
          <div className={styles.tip}>Login in to Vite Antd Admin</div>
        </div>
        <div>
          <Form
            name="normal_login"
            initialValues={form}
            className={styles['login-form']}
            onFinish={onSubmitForm}
            layout="vertical"
          >
            <Form.Item
              label={renderLabel('EMAIL')}
              name="email"
              style={{ marginBottom: '10px' }}
              rules={[{ message: 'Please input your Email!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email address" />
            </Form.Item>
            <Form.Item
              label={renderLabel('PASSWORD')}
              name="password"
              rules={[{ message: 'Please input your Password!' }]}
            >
              <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
