import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import CreateTicket from './pages/CreateTicket';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/create" element={<CreateTicket />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;