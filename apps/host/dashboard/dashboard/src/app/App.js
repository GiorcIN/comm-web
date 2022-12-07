import * as React from 'react';
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';

import Container from './Container';
import { Navbar } from 'libs/ui-shared/src';

const ClassroomMessenger = React.lazy(() =>
  import('classroom-messenger/Module')
);

const Reporting = React.lazy(() => import('reporting/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Box sx={{ backgroundColor: 'background.main', height: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/home" element={<Container />} />
          <Route path="/chats" element={<ClassroomMessenger />} />
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </Box>
    </React.Suspense>
  );
}

export default App;
