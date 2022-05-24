import React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import FlightsDisplay from './components/FlightsDisplay';
import LandingForm from './components/LandingForm';
import GlobalStyles from './Global';

function App() {
  return (
    <div>
      <GlobalStyles/>


    <BrowserRouter>
    <Routes>

          <Route path="/" element={<LandingForm />}>
            
          </Route>
          <Route path="/flights" element={<FlightsDisplay />}>
            
          </Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
