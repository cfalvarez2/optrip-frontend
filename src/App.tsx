import React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import LandingForm from './components/LandingForm';
import GlobalStyles from './Global';
import TripsDisplay from './components/TripsDisplay';

function App() {
  return (
    <div>
      <GlobalStyles/>

    <BrowserRouter>
    <Routes>
          <Route path="/" element={<LandingForm />}>            
          </Route>
          <Route path="/trips" element={<TripsDisplay />}>
            
          </Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
