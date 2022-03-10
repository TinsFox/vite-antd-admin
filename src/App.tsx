import ReactDOM from 'react-dom';
import { RootElement } from './components';
import { PageRouter as Router, routes } from './router';

ReactDOM.render(
  <RootElement routeMode="history">
    <Router routeConfig={routes} />
  </RootElement>,
  document.getElementById('root'),
);
