import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/system';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { theme } from 'libs/ui-shared/src';
import { DataProvider } from 'libs/data-access/data-context/src';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </DataProvider>
  </StrictMode>
);
