import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from 'libs/ui-shared/src';
import Container from './container/container';

const ClassroomMessenger = React.lazy(
  () => import('classroom-messenger/Module')
);

const Reporting = React.lazy(() => import('reporting/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/classroom-messenger" element={<ClassroomMessenger />} />
        <Route path="/reporting" element={<Reporting />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
