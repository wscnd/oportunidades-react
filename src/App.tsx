import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import HomePage from 'pages/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
