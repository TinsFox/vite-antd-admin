import Home from '../pages/home';
import Login from '../pages/login';
import Table from '@/pages/table';
import Anauthorized from '@/pages/exception/401';
import NotFound from '@/pages/exception/404';
import Request from '@/pages/request';
const routes: RouteConfig[] = [
  {
    path: '/home',
    page: <Home />,
    meta: {
      title: '首页',
    },
  },
  {
    path: 'table',
    page: <Table />,
    meta: {
      title: '表格',
    },
    children: [
      {
        path: 'basic-table',
        meta: {
          title: '基础表格',
        },
      },
      {
        path: 'c-table',
        meta: {
          title: '进阶表格',
        },
      },
      {
        path: 'b-table',
        meta: {
          title: '基础表格',
        },
      },
    ],
  },
  {
    path: 'request',
    meta: { title: '网络请求' },
    page: <Request />,
  },
  {
    path: 'exception',
    meta: {
      title: '异常页',
    },
    children: [
      {
        path: '401',
        page: <Anauthorized />,
        meta: {
          title: '401',
        },
      },
      {
        path: '403',
        page: <NotFound />,
        meta: {
          title: '403',
        },
      },
      {
        path: '404',
        page: <NotFound />,
        meta: {
          title: '404',
        },
      },
    ],
  },
  {
    path: '/login',
    meta: {
      title: '登录',
    },
    children: [
      {
        path: '2',
        meta: {
          title: '二级导航',
        },
        children: [
          {
            path: '23',
            page: <Login />,
            meta: {
              title: '三级导航',
            },
          },
          {
            path: '232',
            page: <Login />,
            meta: {
              title: '三级导航2',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
