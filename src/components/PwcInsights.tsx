import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { 
  Users, Award, TrendingUp, ShoppingBag, 
  Lightbulb, AlertCircle, ShieldAlert, FileText, 
  Mail, MapPin, Globe2, BatteryCharging, 
  Volume2, VolumeX, Smartphone, ArrowRightLeft, Radio, BellRing, ChevronRight, Clock
} from 'lucide-react';

const GEOGRAPHY_DATA = [
  { name: 'Tier 1 Metro', value: 18, color: '#3b82f6' },
  { name: 'Tier 2 Cities', value: 12, color: '#6366f1' },
  { name: 'Tier 3 Towns', value: 9, color: '#8b5cf6' },
  { name: 'Semi-Urban', value: 7, color: '#ec4899' },
  { name: 'Rural Area', value: 5, color: '#f43f5e' },
];

const DOMAIN_DATA = [
  { name: 'Kirana/Local Retail', count: 25, color: '#10b981' },
  { name: 'Restaurants/Food', count: 11, color: '#f59e0b' },
  { name: 'Pharmacy/Medical', count: 8, color: '#06b6d4' },
  { name: 'Jewelers', count: 4, color: '#8b5cf6' },
  { name: 'Petrol Pumps', count: 3, color: '#ec4899' },
];

export default function PwcInsights() {
  const [activeTab, setActiveTab] = useState<'survey' | 'commercials' | 'innovations' | 'challenges'>('survey');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              <FileText className="w-3.5 h-3.5" />
              PwC Payments Study
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Soundbox Industry Insights</h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Survey outcomes, futuristic G2C emergency alerts, commercial models, and merchant expectations based on PwC India's payments transformation analysis.
            </p>
          </div>
          <div className="text-xs md:text-right text-slate-400 font-medium md:border-l md:border-slate-800 md:pl-6 shrink-0 space-y-1">
            <p className="font-bold text-slate-300 uppercase tracking-widest text-[10px]">Research Authors</p>
            <p className="flex items-center gap-1.5 md:justify-end">
              <Mail className="w-3 h-3 text-indigo-400" />
              vivek.belgavi@pwc.com
            </p>
            <p className="flex items-center gap-1.5 md:justify-end">
              <Mail className="w-3 h-3 text-indigo-400" />
              mihir.gandhi@pwc.com
            </p>
          </div>
        </div>
      </div>

      {/* Hero Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Merchants Surveyed</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-slate-950">51</span>
            <span className="text-xs font-semibold text-slate-500">Retailers</span>
          </div>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-1">
            <Users className="w-3 h-3 text-slate-400" />
            Across 5 Core Sectors
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Avg Onboarding Rating</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-indigo-600">4.7</span>
            <span className="text-xs font-semibold text-slate-500">/ 5.0</span>
          </div>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-1">
            <Award className="w-3 h-3 text-indigo-500" />
            Includes setup & delivery
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Overall Experience Rating</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-emerald-600">4.61</span>
            <span className="text-xs font-semibold text-slate-500">/ 5.0</span>
          </div>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-1">
            <BatteryCharging className="w-3 h-3 text-emerald-500" />
            Battery, audio, usage
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Daily Volume Range</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-orange-500">~250</span>
            <span className="text-xs font-semibold text-slate-500">Txns</span>
          </div>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-orange-400" />
            Per interviewed merchant
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white p-1.5 rounded-xl border border-slate-200 flex overflow-x-auto hide-scrollbar gap-1">
        <button
          onClick={() => setActiveTab('survey')}
          className={`flex-1 min-w-[150px] py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap
            ${activeTab === 'survey'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }
          `}
        >
          Merchant Survey (n=51)
        </button>
        <button
          onClick={() => setActiveTab('commercials')}
          className={`flex-1 min-w-[150px] py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap
            ${activeTab === 'commercials'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }
          `}
        >
          Commercials & Audio Ads
        </button>
        <button
          onClick={() => setActiveTab('innovations')}
          className={`flex-1 min-w-[150px] py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap
            ${activeTab === 'innovations'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }
          `}
        >
          Futuristic Use-Cases
        </button>
        <button
          onClick={() => setActiveTab('challenges')}
          className={`flex-1 min-w-[150px] py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap
            ${activeTab === 'challenges'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }
          `}
        >
          Challenges & Expectations
        </button>
      </div>

      {/* Tab Contents */}
      <div className="min-h-[400px]">
        {activeTab === 'survey' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {/* Geographies Pie Chart */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  Geographic Demographics
                </h3>
                <p className="text-slate-500 text-xs mt-1">Survey distribution across urban and rural locations (n = 51)</p>
              </div>

              <div className="h-[240px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={GEOGRAPHY_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {GEOGRAPHY_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value} Merchants`, 'Count']}
                      contentStyle={{ borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-4 text-center">
                {GEOGRAPHY_DATA.map((g) => (
                  <div key={g.name} className="p-2 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                    <span className="text-[10px] font-extrabold text-slate-500 truncate">{g.name}</span>
                    <span className="text-sm font-extrabold text-slate-900 mt-0.5">{g.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Domains Bar Chart */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  Merchant Domain Breakdown
                </h3>
                <p className="text-slate-500 text-xs mt-1">Business domain representation covered in the study</p>
              </div>

              <div className="h-[240px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={DOMAIN_DATA} margin={{ left: -10, right: 10, top: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}
                    />
                    <Bar dataKey="count" radius={[6, 6, 0, 0]} barSize={35}>
                      {DOMAIN_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <p className="text-[10px] text-slate-400 font-bold text-center mt-4 uppercase">
                * Local vendors cover retail stores, general/kirana shops. Others cover jewelers, petrol pumps etc.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'commercials' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {/* Commercial Models */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs lg:col-span-1 space-y-6">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-indigo-500" />
                  Soundbox Rental Structures
                </h3>
                <p className="text-slate-500 text-xs mt-1">Four core pricing dynamics utilized by Fintechs</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-slate-900">Monthly Fixed Price</span>
                    <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">Common</span>
                  </div>
                  <p className="text-slate-500 text-xs">
                    Predetermined amount charged periodically (e.g., ₹100–150/month) regardless of volume. Ensures recurring revenue for the acquirer.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-slate-900">Transaction Fee (MDR)</span>
                    <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Usage-Based</span>
                  </div>
                  <p className="text-slate-500 text-xs">
                    Charges structured per transaction (especially on UPI credit card payments or higher-value transactions).
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-slate-900">Discounts & Promos</span>
                    <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">Acquisition</span>
                  </div>
                  <p className="text-slate-500 text-xs">
                    Waivers on setup fees (typically ₹299 reduced to ₹99) or discounted monthly rents for highly active merchants.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-slate-900">Cashback & Loyalty</span>
                    <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">Retention</span>
                  </div>
                  <p className="text-slate-500 text-xs">
                    Refunds of rental costs directly back into the merchant settlement accounts if transaction volumes cross thresholds.
                  </p>
                </div>
              </div>
            </div>

            {/* Soundbox Ads Audio Spot Collaboration */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md lg:col-span-2 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
                    Innovative Business Model
                  </span>
                  <Radio className="w-5 h-5 text-indigo-400 animate-pulse" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight">Soundbox Audio Ads</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Leading Fintechs are conducting audio collaborations with FMCG and consumer service brands, leveraging the physical speaker real estate sitting directly on the checkout counter.
                </p>

                {/* Ads Mechanism */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs">1</div>
                    <span className="block text-xs font-bold">Audio Spots</span>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      A short 4-5 second advertisement plays automatically *immediately* after the payment confirmation tone ends.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs">2</div>
                    <span className="block text-xs font-bold">Smart Targeting</span>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Ads are contextual and targetable based on geographical factors: State, regional Language, and Pin Code.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs">3</div>
                    <span className="block text-xs font-bold">Rental Discount</span>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Merchants receive discounted device rentals or fee offsets for opting into playing ads, securing a high opt-in rate.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-indigo-950/50 rounded-xl border border-indigo-800/40 text-xs text-indigo-300 mt-6 flex items-start gap-3">
                  <Lightbulb className="w-4.5 h-4.5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold block text-slate-200">Revenue Sharing:</span>
                    Successful rollouts convert the soundbox from an operational cost-center into an advertisement-driven revenue-sharing mechanism between the merchant, fintech, and advertiser.
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-6 flex justify-between items-center text-[10px] text-indigo-400 font-extrabold uppercase tracking-wider">
                <span>PwC payments transformation insight</span>
                <span>4-5s Ads Duration</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'innovations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {/* Use-cases list */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 shadow-xs transition-all duration-200 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Radio className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">1. Emergency Alerts (G2C)</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Integrate soundboxes with civil systems to broadcast regional disaster warnings and public safety bulletins, utilizing local shop presence for emergency communication.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 text-[10px] font-bold text-slate-400 uppercase">
                <span className="block text-indigo-600">Considerations:</span>
                API links, GPS geolocation
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 shadow-xs transition-all duration-200 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                  <BellRing className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">2. Personalised Promotions</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Deliver custom auditory greetings, restaurant promotions, or specialized product discount deals to in-store customers dynamically during transaction success checks.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 text-[10px] font-bold text-slate-400 uppercase">
                <span className="block text-indigo-600">Considerations:</span>
                Web-based Content CMS
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 shadow-xs transition-all duration-200 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">3. Accessible Transit Hubs</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Deploy at train, metro, or bus terminals to play ticket confirmations, announce arrival/delay warnings, and assist visually impaired or non-literate travelers.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 text-[10px] font-bold text-slate-400 uppercase">
                <span className="block text-indigo-600">Considerations:</span>
                Central announcement integration
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 shadow-xs transition-all duration-200 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">4. Multilingual (B2C / G2C)</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Support regional voice dialects for payment announcements. Promoters currently leverage up to 11 distinct languages for high adoption.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 text-[10px] font-bold text-slate-400 uppercase">
                <span className="block text-indigo-600">Considerations:</span>
                Firmware multi-language packs
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 shadow-xs transition-all duration-200 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">5. End-of-Day Voice Alerts</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Remind merchants through periodic auditory summaries about upcoming utility bill payments, rental dues, or business summaries at BOD/EOD schedules.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 text-[10px] font-bold text-slate-400 uppercase">
                <span className="block text-indigo-600">Considerations:</span>
                Settlement calendar scheduler
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 shadow-xs transition-all duration-200 space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                  <ArrowRightLeft className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">6. IoT Store Integration</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Link devices with inventory frameworks or pharmacy order trackers to play sound signals when items fall short or online delivery orders are dispatched.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 text-[10px] font-bold text-slate-400 uppercase">
                <span className="block text-indigo-600">Considerations:</span>
                Smart inventory protocols, Wi-Fi IoT
              </div>
            </div>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {/* Key Adoption Challenges */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-rose-500" />
                  Key Adoption Obstacles
                </h3>
                <p className="text-slate-500 text-xs mt-1">Hurdles identified by merchants and networks in the study</p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Infrastructural Gaps</span>
                    <p className="text-slate-500 text-xs mt-0.5">Connectivity dropouts in rural territories delay real-time audio voice notifications.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Fraudulent Stickers (Dummy QRs)</span>
                    <p className="text-slate-500 text-xs mt-0.5">Fraudsters pasting dummy QR stickers over the merchant box. Real-time audio alerts resolve this by validating receipt before packaging.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Battery Degradation</span>
                    <p className="text-slate-500 text-xs mt-0.5">Heavy continuous usage causes rapid battery decay, requiring frequent charging cycles or hardwires.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Skipped Alerts</span>
                    <p className="text-slate-500 text-xs mt-0.5">Occasional sound delays or missing notification triggers during peak shop hour rushes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Merchant Expectations */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-500" />
                  Merchant Expectations
                </h3>
                <p className="text-slate-500 text-xs mt-1">Specific product improvements sought after by merchants</p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">High Capacity Battery Upgrade</span>
                    <p className="text-slate-500 text-xs mt-0.5">Stable backup capability to sustain up to 3,000 audible notifications under one charge cycle.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">5G Connectivity Integration</span>
                    <p className="text-slate-500 text-xs mt-0.5">Moving away from slow 2G/3G networks to 4G/5G for zero-latency checkout validations.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Reduced Fees & Rental Costs</span>
                    <p className="text-slate-500 text-xs mt-0.5">Desire for fee offsets, cashbacks, and discounted rental subscription structures.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Easier Language Selection Configuration</span>
                    <p className="text-slate-500 text-xs mt-0.5">Simple options to toggle pronunciation and speech dialects without calling IT customer support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Embedded Citations */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3 flex items-center">
          <AlertCircle className="w-4 h-4 mr-2 text-indigo-500" />
          Study Sources & Reference Guidelines
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          The survey dataset, ratings, and future G2C emergency alert features are sourced from the <strong>PwC India Payments Transformation study</strong>. Merchant metrics are compiled from 51 retail respondents with an average daily transaction capacity of 250 checkouts.
        </p>
      </div>

    </div>
  );
}
