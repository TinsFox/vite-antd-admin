declare type PageMeta = {
  title: string;
  icon?: React.ReactNode;
  hidden?: boolean;
};

declare type RouteConfig = {
  path: string;
  page: JSX.Element;
  children?: RouteConfig[];
  meta: PageMeta;
};
