import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Helpdesk Ticket System</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="/tickets" className="nav-link">Tickets</a>
            </li>
            <li className="nav-item">
              <a href="/create" className="nav-link">Create Ticket</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;