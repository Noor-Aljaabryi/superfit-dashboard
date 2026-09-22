import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center rounded-xl mb-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">لوحة التحكم</h1>
        <p className="text-sm text-gray-500">مرحباً بكِ مجدداً في SuperFit</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
          نشط الآن
        </span>
      </div>
    </header>
  );
}

export default Header;