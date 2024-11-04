import React from 'react';
import FieldCard from './UCard';

const FieldList: React.FC = () => {
  const fields = [
    { schoolName: 'Central High School', location: 'North', price: '$50/hr', availability: 'Morning' },
    { schoolName: 'Westview School', location: 'South', price: '$45/hr', availability: 'Afternoon' },
    { schoolName: 'Eastside Academy', location: 'East', price: '$60/hr', availability: 'Evening' },
    { schoolName: 'Southridge School', location: 'South', price: '$40/hr', availability: 'All Day' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {fields.map((field, index) => (
        <FieldCard key={index} {...field} />
      ))}
    </div>
  );
};

export default FieldList;
