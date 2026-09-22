import React from 'react';
import Sidebar from './components/Sidebar';
import SubscribersTable from './components/SubscribersTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      <Sidebar />
      <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 overflow-x-auto">
        <main>
          <SubscribersTable />
        </main>
      </div>
    </div>
  );
}

export default App;