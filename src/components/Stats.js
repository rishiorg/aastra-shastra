import React from 'react';

const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-bold">SAVIOURS</h2>
        <p className="text-2xl font-bold">35</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-bold">NEAREST</h2>
        <p className="text-2xl font-bold">50 m</p>
      </div>
    </div>
  );
};

export default Stats;