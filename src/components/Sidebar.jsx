import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-[#0B132B] text-gray-300 min-h-screen p-6 flex flex-col justify-between hidden md:flex">
      <div className="flex flex-col gap-8">
        {/* الشعار */}
        <div className="flex items-center gap-3">
          <span className="bg-emerald-500 text-white font-bold p-2 rounded-xl text-sm">SF</span>
          <span className="text-xl font-bold text-white">SuperFit</span>
        </div>
        
        {/* القوائم */}
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 font-medium transition-colors">
            الرئيسية
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-900/20">
            المشتركين
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 font-medium transition-colors">
            الحصص
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 font-medium transition-colors">
            التقدم
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 font-medium transition-colors">
            الإعدادات
          </a>
        </nav>
      </div>

      {/* معلومات المدرب في الأسفل */}
      <div className="pt-6 border-t border-gray-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">
          أ
        </div>
        <div>
          <div className="text-sm font-bold text-white">كابتن أحمد</div>
          <div className="text-xs text-gray-400">مدرب معتمد</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;