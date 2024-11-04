import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Dhead';
import AgentList from './Aglist';

const AgentsDashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Header />
        <main className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Agents Working with Field Rentals</h2>
          <AgentList />
        </main>
      </div>
    </div>
  );
};

export default AgentsDashboard;
