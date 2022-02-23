import ReactDOM from 'react-dom';
import PageLayout from '@/components/Layout';
import { Root } from './components/Root';

ReactDOM.render(
  <Root routeMode="history">
    <PageLayout />
  </Root>,
  document.getElementById('root'),
);
