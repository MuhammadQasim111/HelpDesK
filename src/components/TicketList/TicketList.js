import React from 'react';
import './TicketList.css';
import TicketItem from '../TicketItem/TicketItem';

const TicketList = () => {
  // Sample ticket data
  const tickets = [
    {
      id: 1,
      title: 'Login Issue',
      description: 'User unable to login to the system',
      status: 'Open',
      priority: 'High',
      createdAt: '2023-05-15',
      assignedTo: 'John Doe'
    },
    {
      id: 2,
      title: 'Printer Not Working',
      description: 'Office printer is not responding',
      status: 'In Progress',
      priority: 'Medium',
      createdAt: '2023-05-14',
      assignedTo: 'Jane Smith'
    },
    {
      id: 3,
      title: 'Email Configuration',
      description: 'Need to setup email client for new employee',
      status: 'Closed',
      priority: 'Low',
      createdAt: '2023-05-10',
      assignedTo: 'Bob Johnson'
    }
  ];

  return (
    <div className="ticket-list">
      <h3 className="ticket-list-title">Recent Tickets</h3>
      <div className="ticket-list-container">
        {tickets.map(ticket => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketList;