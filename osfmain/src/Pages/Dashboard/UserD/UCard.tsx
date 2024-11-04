import React from 'react';

type FieldProps = {
  schoolName: string;
  location: string;
  price: string;
  availability: string;
};

const FieldCard: React.FC<FieldProps> = ({ schoolName, location, price, availability }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-semibold">{schoolName}</h3>
      <p className="text-gray-500">Location: {location}</p>
      <p className="text-gray-500">Price: {price}</p>
      <p className="text-gray-500">Availability: {availability}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">
        Book Now
      </button>
    </div>
  );
};

export default FieldCard;
