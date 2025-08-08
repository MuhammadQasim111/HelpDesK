import React from 'react';
import './Dashboard.css';
import TicketList from '../TicketList/TicketList';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Tickets</h3>
          <p className="stat-value">24</p>
        </div>
        <div className="stat-card">
          <h3>Open Tickets</h3>
          <p className="stat-value">8</p>
        </div>
        <div className="stat-card">
          <h3>Closed Tickets</h3>
          <p className="stat-value">16</p>
        </div>
      </div>
      <div className="dashboard-content">
        <TicketList />
      </div>
    </div>
  );
};

export default Dashboard;