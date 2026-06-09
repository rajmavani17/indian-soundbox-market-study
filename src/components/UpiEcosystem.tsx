import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Activity, IndianRupee, PieChart as PieChartIcon, Target, TrendingDown, Store } from 'lucide-react';

export default function UpiEcosystem() {
  // 2025 NPCI Data
  const volumeData = [
    { name: 'P2M (Merchant)', value: 64, color: '#3b82f6' },
    { name: 'P2P (Peer-to-Peer)', value: 36, color: '#94a3b8' }
  ];

  const valueData = [
    { name: 'P2M (Merchant)', value: 29, color: '#10b981' },
    { name: 'P2P (Peer-to-Peer)', value: 71, color: '#94a3b8' }
  ];

  return (
    <div className="animate-in fade-in duration-500 h-full overflow-y-auto pr-2 pb-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
          <Activity className="w-6 h-6 text-indigo-600" />
          UPI Macro Ecosystem (2025)
        </h3>
        <p className="text-slate-600 font-medium leading-relaxed">
          The soundbox market exists because of the sheer scale of the UPI network. Below is the detailed breakdown of the ₹300 Lakh Crore UPI ecosystem, highlighting the critical divergence between transaction volume and monetary value.
        </p>
      </div>

      {/* Top Line Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total 2025 Volume</p>
            <p className="text-4xl font-black text-white mt-1">228 Billion</p>
            <p className="text-sm text-slate-400 mt-2 flex items-center"><TrendingDown className="w-4 h-4 mr-1 text-emerald-400" /> +33% YoY Growth</p>
          </div>
          <div className="bg-slate-800 text-slate-300 p-4 rounded-full">
            <PieChartIcon className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-indigo-600 p-6 rounded-xl shadow-sm border border-indigo-500 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-200">Total 2025 Value</p>
            <p className="text-4xl font-black text-white mt-1">₹300L Cr</p>
            <p className="text-sm text-indigo-200 mt-2">₹300 Trillion Processed</p>
          </div>
          <div className="bg-indigo-500 text-indigo-100 p-4 rounded-full">
            <IndianRupee className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* The Volume vs Value Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Volume Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Store className="w-5 h-5 text-blue-500" />
            Transaction Volume Split
          </h4>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={volumeData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={2} dataKey="value">
                  {volumeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`${value}%`, 'Volume Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <div className="text-center">
              <p className="text-2xl font-black text-blue-600">64%</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">P2M (Merchant)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-slate-400">36%</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">P2P</p>
            </div>
          </div>
        </div>

        {/* Value Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <IndianRupee className="w-5 h-5 text-emerald-500" />
            Transaction Value Split
          </h4>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={valueData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={2} dataKey="value">
                  {valueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`${value}%`, 'Value Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <div className="text-center">
              <p className="text-2xl font-black text-emerald-500">29%</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">P2M (Merchant)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-slate-400">71%</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">P2P</p>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Dive Analysis */}
      <div className="bg-amber-50 border border-amber-200 p-6 md:p-8 rounded-xl shadow-sm">
        <h4 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-600" />
          The Micro-Payment Reality (Why Soundboxes Exist)
        </h4>
        <p className="text-amber-800 leading-relaxed mb-4">
          The massive discrepancy between P2M Volume (64%) and Value (29%) reveals the true nature of Indian digital commerce: <strong>Micro-Transactions</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white/60 p-4 rounded-lg border border-amber-100">
            <p className="text-3xl font-black text-amber-700">86%</p>
            <p className="text-sm font-bold text-amber-900 mt-1">of P2M txns are under ₹500</p>
            <p className="text-xs text-amber-700 mt-2">UPI has completely displaced cash for daily essentials like tea, transport, and groceries.</p>
          </div>
          <div className="bg-white/60 p-4 rounded-lg border border-amber-100">
            <p className="text-3xl font-black text-amber-700">₹1,293</p>
            <p className="text-sm font-bold text-amber-900 mt-1">Average Ticket Size (ATS)</p>
            <p className="text-xs text-amber-700 mt-2">The ATS continues to shrink yearly as QR codes penetrate deeper into rural and micro-retail sectors.</p>
          </div>
        </div>
      </div>

      {/* Embedded Sources Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Data Sources & Citations
        </h4>
        <ul className="text-sm text-slate-600 space-y-4">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-slate-300 mr-3 mt-1.5 shrink-0"></span>
            <div>
              <strong>National Payments Corporation of India (NPCI) 2025 Aggregate Data:</strong>
              <p className="mt-1 text-slate-500">Reported total calendar year volume of 228 billion transactions and total value of nearly ₹300 lakh crore, representing 33% and 21% YoY growth respectively.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-slate-300 mr-3 mt-1.5 shrink-0"></span>
            <div>
              <strong>P2M vs P2P Structural Split:</strong>
              <p className="mt-1 text-slate-500">Industry analytics (2025) confirm P2M volume share expanded to ~64%, while retaining ~29% of the value. P2P remains the primary vehicle for high-value fund transfers at 71% of total value.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-slate-300 mr-3 mt-1.5 shrink-0"></span>
            <div>
              <strong>Ticket Size Compression:</strong>
              <p className="mt-1 text-slate-500">Analysis of the ₹1,293 Average Ticket Size reveals that approximately 86% of all merchant (P2M) payments are for amounts below ₹500, demonstrating deep micro-payment penetration.</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
}
