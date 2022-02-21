declare type PageMeta = {
  /* 导航栏标题 */
  title: string;
  /* 导航栏图标 */
  icon?: React.ReactNode;
  /* 控制改路由是否在导航栏上展示 */
  hidden?: boolean;
};

declare type RouteConfig = {
  /* 路径 */
  path: string;
  /* 页面组件 */
  page?: JSX.Element;
  /* 嵌套路由， */
  children?: RouteConfig[];
  meta: PageMeta;
};
