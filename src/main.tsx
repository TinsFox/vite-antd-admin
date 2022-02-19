import ReactDOM from "react-dom";
import { RouterManager, routes } from "./router";

ReactDOM.render(
  <RouterManager routeConfig={routes} />,
  document.getElementById("root")
);
