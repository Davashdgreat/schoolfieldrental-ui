import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Dhead';
import SchoolList from './SList';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Header />
        <main className="p-4">
          <SchoolList />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
