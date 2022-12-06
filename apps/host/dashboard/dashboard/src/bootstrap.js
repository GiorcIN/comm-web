import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { DataProvider } from 'libs/data-access/data-context/src';

import { theme } from 'libs/ui-shared/src';
import App from './app/App';
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
