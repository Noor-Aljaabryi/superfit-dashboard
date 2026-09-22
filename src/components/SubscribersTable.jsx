import React from 'react';

function SubscribersTable() {
  const data = [
    { id: 1, name: 'ياسر المطيري', email: 'yasser@example.com', plan: 'خطة نشطة', progress: '100%', status: 'نشط', trainer: 'كابتن أحمد', initial: 'ي' },
    { id: 2, name: 'عبدالله الغامدي', email: 'abdullah@example.com', plan: 'خطة سارية', progress: '96%', status: 'نشط', trainer: 'كابتن أحمد', initial: 'ع' },
    { id: 3, name: 'أحمد الشمري', email: 'ahmed@example.com', plan: 'خطة سارية', progress: '94%', status: 'نشط', trainer: 'كابتن أحمد', initial: 'أ' },
    { id: 4, name: 'سارة القحطاني', email: 'sara@example.com', plan: 'خطة سارية', progress: '92%', status: 'نشط', trainer: 'كابتن أحمد', initial: 'س' },
    { id: 5, name: 'ريم الدوسري', email: 'reem@example.com', plan: 'خطة سارية', progress: '68%', status: 'متوقف', trainer: 'كابتن أحمد', initial: 'ر' },
    { id: 6, name: 'محمد العتيبي', email: 'mohammed@example.com', plan: 'خطة سارية', progress: '64%', status: 'نشط', trainer: 'كابتن أحمد', initial: 'م' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* رأس الصفحة: العنوان، زر الإضافة، شريط البحث والتصفية */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">المشتركون</h1>
          <p className="text-sm text-gray-500 mt-1">إدارة المشتركين، متابعة البرنامج اليومي، ومراجعة الخطط التدريبية والغذائية.</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <span>+ إضافة خطة مشتركة</span>
        </button>
      </div>

      {/* شريط البحث والتصفية */}
      <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <span>⚙️ تصفية</span>
        </button>
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="بحث باسم المشترك أو بريده الإلكتروني..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm text-right focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* جدول البيانات */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 text-xs font-semibold uppercase">
              <th className="py-3 px-4">اسم المشترك</th>
              <th className="py-3 px-4">نوع الخطة</th>
              <th className="py-3 px-4">نسبة الإنجاز</th>
              <th className="py-3 px-4">الحالة</th>
              <th className="py-3 px-4">المدرب الرياضي</th>
              <th className="py-3 px-4 text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm text-gray-600">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-4 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm">
                    {item.initial}
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.email}</div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
                    {item.plan}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-10">{item.progress}</span>
                    <div className="w-24 bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${parseInt(item.progress) > 60 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                        style={{ width: item.progress }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${
                    item.status === 'نشط' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600 font-medium">{item.trainer}</td>
                <td className="py-4 px-4 text-center text-gray-400 font-bold cursor-pointer">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubscribersTable;