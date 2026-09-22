import React, { useState } from 'react';
import { 
  Home, Users, Calendar, TrendingUp, Settings, 
  Search, Plus, Filter, MoreVertical, CheckCircle, AlertCircle 
} from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const subscribers = [
    { id: 1, name: 'ياسر المطيري', email: 'yasser@example.com', plan: 'خطة نشطة', progress: 100, status: 'نشط', trainer: 'كابتن أحمد' },
    { id: 2, name: 'عبدالله الغامدي', email: 'abdullah@example.com', plan: 'خطة سارية', progress: 96, status: 'نشط', trainer: 'كابتن أحمد' },
    { id: 3, name: 'أحمد الشمري', email: 'ahmed@example.com', plan: 'خطة سارية', progress: 94, status: 'نشط', trainer: 'كابتن أحمد' },
    { id: 4, name: 'سارة القحطاني', email: 'sara@example.com', plan: 'خطة سارية', progress: 92, status: 'نشط', trainer: 'كابتن أحمد' },
    { id: 5, name: 'ريم الدوسري', email: 'reem@example.com', plan: 'خطة سارية', progress: 68, status: 'متوقف', trainer: 'كابتن أحمد' },
    { id: 6, name: 'محمد العتيبي', email: 'mohammed@example.com', plan: 'خطة سارية', progress: 64, status: 'نشط', trainer: 'كابتن أحمد' },
    { id: 7, name: 'خالد الحربي', email: 'khaled@example.com', plan: 'خطة سارية', progress: 58, status: 'متوقف', trainer: 'كابتن أحمد' },
    { id: 8, name: 'نورة الشمري', email: 'noura@example.com', plan: 'خطة سارية', progress: 46, status: 'نشط', trainer: 'كابتن أحمد' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      
      {/* القائمة الجانبية */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between hidden md:flex">
        <div>
          <div className="p-6 flex items-center gap-3 border-b border-slate-800">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold">SF</div>
            <span className="text-xl font-bold">SuperFit</span>
          </div>

          <nav className="p-4 space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition">
              <Home size={20} /> الرئيسية
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-600 text-white font-medium transition">
              <Users size={20} /> المشتركين
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition">
              <Calendar size={20} /> الحصص
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition">
              <TrendingUp size={20} /> التقدم
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition">
              <Settings size={20} /> الإعدادات
            </a>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold">أ</div>
          <div>
            <h4 className="text-sm font-semibold">كابتن أحمد</h4>
            <span className="text-xs text-slate-400">مدرب معتمد</span>
          </div>
        </div>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">المشتركون</h1>
            <p className="text-sm text-gray-500">إدارة المشتركين، متابعة البرنامج اليومي، ومراجعة الخطط التدريبية والغذائية.</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition">
            <Plus size={18} /> إضافة خطة مشتركة
          </button>
        </header>

        <div className="p-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex flex-wrap gap-4 justify-between items-center">
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute right-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="بحث باسم المشترك أو بريده الإلكتروني..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="border border-gray-200 px-4 py-2 rounded-lg text-gray-600 flex items-center gap-2 hover:bg-gray-50">
                <Filter size={18} /> تصفية
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
                  <th className="p-4">اسم المشترك</th>
                  <th className="p-4">نوع الخطة</th>
                  <th className="p-4">نسبة الإنجاز</th>
                  <th className="p-4">الحالة</th>
                  <th className="p-4">المدرب الرياضي</th>
                  <th className="p-4 text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {subscribers.map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50/50 transition">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        {sub.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{sub.name}</div>
                        <div className="text-xs text-gray-400">{sub.email}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                        {sub.plan}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${sub.progress > 80 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                            style={{ width: `${sub.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-semibold text-gray-600">{sub.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 w-fit ${
                        sub.status === 'نشط' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {sub.status === 'نشط' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                        {sub.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{sub.trainer}</td>
                    <td className="p-4 text-center">
                      <button className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}