import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Router>
  );
}

export default App;