import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      <h2 className="text-xl font-semibold">Available Football Fields</h2>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search schools"
          className="px-4 py-2 border rounded-md"
        />
        <select className="px-4 py-2 border rounded-md">
          <option value="">Location</option>
          <option value="north">North</option>
          <option value="south">South</option>
        </select>
        <select className="px-4 py-2 border rounded-md">
          <option value="">Availability</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
