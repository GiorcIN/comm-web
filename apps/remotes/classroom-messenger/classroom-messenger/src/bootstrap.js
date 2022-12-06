import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/system';
import * as ReactDOM from 'react-dom/client';

import App from './app/App';
import { theme } from 'libs/ui-shared/src';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
