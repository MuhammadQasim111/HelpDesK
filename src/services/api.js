// Mock API service for the helpdesk ticket system
// In a real application, this would connect to a backend API

const API_BASE_URL = '/api';

// Mock data
const mockTickets = [
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

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getTickets = async () => {
  await delay(500); // Simulate network delay
  return mockTickets;
};

export const createTicket = async (ticketData) => {
  await delay(500); // Simulate network delay
  const newTicket = {
    id: mockTickets.length + 1,
    ...ticketData,
    status: 'Open',
    createdAt: new Date().toISOString().split('T')[0]
  };
  mockTickets.push(newTicket);
  return newTicket;
};

export const updateTicket = async (id, ticketData) => {
  await delay(500); // Simulate network delay
  const index = mockTickets.findIndex(ticket => ticket.id === id);
  if (index !== -1) {
    mockTickets[index] = { ...mockTickets[index], ...ticketData };
    return mockTickets[index];
  }
  throw new Error('Ticket not found');
};

export const deleteTicket = async (id) => {
  await delay(500); // Simulate network delay
  const index = mockTickets.findIndex(ticket => ticket.id === id);
  if (index !== -1) {
    mockTickets.splice(index, 1);
    return true;
  }
  throw new Error('Ticket not found');
};