import { PROVIDERS } from '../data';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Volume2, TrendingUp, Users } from 'lucide-react';

export default function Overview() {
  const totalMarketDeployment = PROVIDERS.reduce(
    (acc, p) => {
      const val = parseFloat(p.deploymentCount.replace(/[^\d.]/g, ''));
      return acc + (isNaN(val) ? 0 : val);
    }, 
    0
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Deployments</p>
            <p className="text-3xl font-extrabold text-slate-900 mt-1">~{totalMarketDeployment.toFixed(1)}M+</p>
          </div>
          <div className="bg-blue-50 text-blue-600 p-3 rounded-full border border-blue-100">
            <Volume2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">FY30 Proj. Mkt Size</p>
            <p className="text-3xl font-extrabold text-slate-900 mt-1">$275M+</p>
          </div>
          <div className="bg-blue-50 text-blue-600 p-3 rounded-full border border-blue-100">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">FY30 Deployments</p>
            <p className="text-3xl font-extrabold text-slate-900 mt-1">40M+</p>
          </div>
          <div className="bg-blue-50 text-blue-600 p-3 rounded-full border border-blue-100">
            <Users className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Share Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            Market Share Estimate
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PROVIDERS}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="marketShare"
                >
                  {PROVIDERS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value}%`, 'Share']}
                  contentStyle={{ borderRadius: '0.75rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {PROVIDERS.map(p => (
              <div key={p.id} className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-600">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: p.color }} />
                {p.name} ({p.marketShare}%)
              </div>
            ))}
          </div>
        </div>

        {/* Deployments Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            Deployments in Millions
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PROVIDERS} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 13, fontWeight: 600 }} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  formatter={(value: number) => [`${value}M`, 'Units']}
                  contentStyle={{ borderRadius: '0.75rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar 
                  dataKey={(p) => parseFloat(p.deploymentCount.replace(/[^\d.]/g, ''))} 
                  radius={[0, 6, 6, 0]}
                  barSize={32}
                >
                  {PROVIDERS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-600 text-white p-8 rounded-xl shadow-md flex flex-col justify-between border border-blue-700">
        <div>
          <h4 className="text-xs uppercase font-bold tracking-widest text-blue-200 mb-3">Key Strategic Insight</h4>
          <p className="text-lg font-medium leading-relaxed">
            The market has exploded from ~9 million units in FY23 to <strong>{totalMarketDeployment.toFixed(1)} million units in FY26</strong>. 
            What started as a simple IoT speaker to confirm UPI transactions has evolved into the most crucial real estate for Indian fintechs. 
            Once a device is placed on a merchant's counter, the provider controls the checkout flow, captures rich transaction data, 
            and builds the ultimate moat for offering lucrative <strong>merchant loans</strong>.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-blue-500 flex justify-between items-center">
          <span className="text-[10px] text-blue-100 font-bold tracking-widest uppercase">Analysis By Fintech Core</span>
        </div>
      </div>

      {/* NPCI Interoperable Soundbox Regulatory Card */}
      <div className="bg-amber-50 border border-amber-200/80 p-6 rounded-2xl shadow-xs flex gap-4 items-start">
        <div className="bg-amber-100 p-3 rounded-xl text-amber-800 shrink-0 border border-amber-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">Regulatory Focus: NPCI Interoperable Soundbox</h4>
          <p className="text-sm text-amber-800 leading-relaxed font-semibold">
            The National Payments Corporation of India (NPCI) is currently developing a unified, interoperable soundbox infrastructure. This initiative aims to allow a single physical speaker to accept payments from any UPI app (Paytm, PhonePe, Google Pay, etc.), reducing countertop clutter and merchant costs. This regulatory shift may significantly alter future standalone device deployment and subscription rental strategies.
          </p>
        </div>
      </div>

      {/* Embedded Sources Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Data Sources & Citations (FY26 Updates)
        </h4>
        <ul className="text-sm text-slate-600 space-y-3">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-slate-300 mr-3 mt-1.5 shrink-0"></span>
            <span><strong>Paytm Deployments:</strong> Reported a merchant subscription base of 15.0 million (1.5 Crore) in Q4 FY26, driven heavily by soundboxes and card terminals.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-slate-300 mr-3 mt-1.5 shrink-0"></span>
            <span><strong>PhonePe Deployments:</strong> Reported 9.19 million net active deployed payment devices (Smartspeakers & EDCs) as of late September 2025.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-slate-300 mr-3 mt-1.5 shrink-0"></span>
            <span><strong>Google Pay:</strong> Piloting its own white-labeled "Soundpod" device in North India since late 2025 (no specific volumes disclosed).</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-slate-300 mr-3 mt-1.5 shrink-0"></span>
            <span><strong>BharatPe Historical:</strong> Specific recent 2026 disclosures are unavailable; previous 2023 figures reported ~0.9 million devices.</span>
          </li>
        </ul>
      </div>

    </div>
  );
}
