import {
  AntDesignOutlined,
  CrownOutlined,
  DashboardOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import React from "react";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/dashboard",
        name: "仪表盘",
        icon: <DashboardOutlined />,
        component: "./dashboard",
      },
      {
        path: "/lottery",
        name: "抽奖管理",
        icon: <CrownOutlined />,
        component: "./lottery",
        routes: [
          {
            path: "/lottery/index",
            name: "抽奖列表",
            icon: <CrownOutlined />,
            component: "./mobile/lottery/index",
          },
          {
            path: "/admin/sub-page2",
            name: "二级页面",
            icon: <CrownOutlined />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page3",
            name: "三级页面",
            icon: <CrownOutlined />,
            component: "./Welcome",
          },
        ],
      },
      {
        name: "列表页",
        icon: <TabletOutlined />,
        path: "/list",
        component: "./ListTableList",
        routes: [
          {
            path: "/list/sub-page",
            name: "一级列表页面",
            icon: <CrownOutlined />,
            routes: [
              {
                path: "sub-sub-page1",
                name: "一一级列表页面",
                icon: <CrownOutlined />,
                component: "./Welcome",
              },
              {
                path: "sub-sub-page2",
                name: "一二级列表页面",
                icon: <CrownOutlined />,
                component: "./Welcome",
              },
              {
                path: "sub-sub-page3",
                name: "一三级列表页面",
                icon: <CrownOutlined />,
                component: "./Welcome",
              },
            ],
          },
          {
            path: "/list/sub-page2",
            name: "二级列表页面",
            icon: <CrownOutlined />,
            component: "./Welcome",
          },
          {
            path: "/list/sub-page3",
            name: "三级列表页面",
            icon: <CrownOutlined />,
            component: "./Welcome",
          },
        ],
      },
      {
        path: "https://ant.design",
        name: "Ant Design 官网外链",
        icon: <AntDesignOutlined />,
      },
    ],
  },
  location: {
    pathname: "/",
  },
};
