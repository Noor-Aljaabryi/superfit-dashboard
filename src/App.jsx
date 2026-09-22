import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
      <Header />
      
      <main className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">محتوى لوحة التحكم سيظهر هنا...</p>
      </main>
    </div>
  );
}

export default App;