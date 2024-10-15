import React from 'react';

const SavioursList = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <span className="font-semibold">Saviours</span>
        <span className="font-semibold flex items-center">
          Active
          <span className="ml-2 w-2 h-2 bg-green-500 rounded-full live-indicator"></span>
        </span>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div className="flex items-center">
            <i className="bi bi-person-circle text-3xl mr-3"></i>
            <div>
              <h3 className="font-bold">SAURABH GAURAV</h3>
            </div>
          </div>
          <span className="text-sm text-gray-500">5 mins ago</span>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div className="flex items-center">
            <i className="bi bi-person-circle text-3xl mr-3"></i>
            <div>
              <h3 className="font-bold">RISHI RAJ</h3>
            </div>
          </div>
          <span className="active-status font-bold">ACTIVE</span>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div className="flex items-center">
            <i className="bi bi-person-circle text-3xl mr-3"></i>
            <div>
              <h3 className="font-bold">GAURAV</h3>
            </div>
          </div>
          <span className="text-sm text-gray-500">1 min ago</span>
        </div>
      </div>
    </div>
  );
};

export default SavioursList;
