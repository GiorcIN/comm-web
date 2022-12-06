import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from 'libs/ui-shared/src';
import Box from '@mui/material/Box';
import Container from './Container';

const ClassroomMessenger = React.lazy(() =>
  import('classroom-messenger/Module')
);

const Reporting = React.lazy(() => import('reporting/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Box sx={{ backgroundColor: 'background.main' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/classroom-messenger" element={<ClassroomMessenger />} />
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </Box>
    </React.Suspense>
  );
}

export default App;
