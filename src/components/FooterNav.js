import React from 'react';

const FooterNav = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="flex justify-around">
        <i className="bi bi-house-door text-2xl"></i>
        <i className="bi bi-compass text-2xl"></i>
        <i className="bi bi-gear text-2xl"></i>
      </div>
    </footer>
  );
};

export default FooterNav;
