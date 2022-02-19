import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, useRoutes } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import NotFound from "./views/sys/not-found";
import Expenses from "./views/test-views/expenses";
import Invoice from "./views/test-views/Invoice";
import Invoices from "./views/test-views/Invoices";

ReactDOM.render(
  // <React.StrictMode> NOTE antd 会报错
  <HashRouter>
    <Routes>
      <App />
      {/* <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route> */}
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
