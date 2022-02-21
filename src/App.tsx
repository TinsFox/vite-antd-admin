import ReactDOM from 'react-dom';
import PageLayout from '@/components/Layout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <PageLayout />
  </BrowserRouter>,
  document.getElementById('root'),
);
