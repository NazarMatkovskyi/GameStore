import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/home-page';
import {Header} from './components/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" exact element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
