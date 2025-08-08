import React from 'react';
import './TicketItem.css';

const TicketItem = ({ ticket }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      case 'Low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Open':
        return 'status-open';
      case 'In Progress':
        return 'status-in-progress';
      case 'Closed':
        return 'status-closed';
      default:
        return '';
    }
  };

  return (
    <div className="ticket-item">
      <div className="ticket-header">
        <h4 className="ticket-title">{ticket.title}</h4>
        <span className={`ticket-priority ${getPriorityClass(ticket.priority)}`}>
          {ticket.priority}
        </span>
      </div>
      <p className="ticket-description">{ticket.description}</p>
      <div className="ticket-details">
        <div className="ticket-info">
          <span className="ticket-label">Status:</span>
          <span className={`ticket-status ${getStatusClass(ticket.status)}`}>
            {ticket.status}
          </span>
        </div>
        <div className="ticket-info">
          <span className="ticket-label">Created:</span>
          <span className="ticket-date">{ticket.createdAt}</span>
        </div>
        <div className="ticket-info">
          <span className="ticket-label">Assigned to:</span>
          <span className="ticket-assignee">{ticket.assignedTo}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;