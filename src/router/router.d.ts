declare type RouteConfig = {
  path: string;
  page: JSX.Element;
  title: string;
  children?: RouteConfig[];
};
