import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-semibold mb-6">Field Rentals</h1>
      <nav>
        <ul>
          <li className="mb-3">
            <a href="/" className="text-gray-300 hover:text-white">
              Dashboard
            </a>
          </li>
          <li className="mb-3">
            <a href="/agents" className="text-gray-300 hover:text-white">
              Agents
            </a>
          </li>
          <li className="mb-3">
            <a href="/users" className="text-gray-300 hover:text-white">
              Fields for Rent
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-300 hover:text-white">
              My Bookings
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-300 hover:text-white">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
