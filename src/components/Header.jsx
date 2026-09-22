import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center rounded-xl mb-6">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-gray-800">إدارة الخطط</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-600">مرحباً بكِ، المدير</span>
      </div>
    </header>
  );
}

export default Header;