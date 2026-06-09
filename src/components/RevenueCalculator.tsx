import React, { useState } from 'react';
import { Calculator, TrendingUp, IndianRupee, Users, ShoppingCart, Percent, Box, Truck, Wifi, HeadphonesIcon } from 'lucide-react';

export default function RevenueCalculator() {
  // Input States
  const [merchantCount, setMerchantCount] = useState<number>(10000);
  const [txnsPerDay, setTxnsPerDay] = useState<number>(50);
  const [aov, setAov] = useState<number>(150);
  const [takeRate, setTakeRate] = useState<number>(1.0); // Percentage
  const [monthlySubscription, setMonthlySubscription] = useState<number>(99);

  // Constants for Costs (Per Merchant / Device)
  const DEVICE_COST = 1500; // One-time, amortized over 12 months for monthly P&L
  const LOGISTICS_COST = 150; // One-time shipping/setup, amortized over 12 months
  const SIM_DATA_COST = 40; // Monthly OpEx
  const SUPPORT_COST = 50; // Monthly Field/Tech Support OpEx

  // Calculations (Monthly assuming 30 days)
  const monthlyTxnVolume = merchantCount * txnsPerDay * 30;
  const monthlyGmv = monthlyTxnVolume * aov;
  
  // Revenues
  const transactionRevenue = monthlyGmv * (takeRate / 100);
  const subscriptionRevenue = merchantCount * monthlySubscription;
  const totalRevenue = transactionRevenue + subscriptionRevenue;

  // Costs (Monthly Amortized)
  const amortizedCapEx = merchantCount * (DEVICE_COST / 12);
  const amortizedLogistics = merchantCount * (LOGISTICS_COST / 12);
  const monthlyOpEx = merchantCount * (SIM_DATA_COST + SUPPORT_COST);
  const totalCosts = amortizedCapEx + amortizedLogistics + monthlyOpEx;

  // Profit
  const netProfit = totalRevenue - totalCosts;
  const profitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;

  // Formatting Helper
  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakh`;
    return `₹${val.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="animate-in fade-in duration-500 h-full overflow-y-auto pr-2 pb-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-blue-600" />
          Revenue Prediction System
        </h3>
        <p className="text-slate-600 font-medium leading-relaxed">
          Simulate the unit economics of deploying a soundbox network. Adjust the sliders below to see real-time projections for GMV, revenues, operational costs (OpEx), and hardware amortization (CapEx).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Sliders */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-8">
            <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Revenue Drivers</h4>
            
            {/* Merchant Count */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold flex items-center text-slate-700">
                  <Users className="w-4 h-4 mr-2 text-indigo-500" /> Active Merchants
                </label>
                <span className="text-sm font-bold text-blue-600">{merchantCount.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" min="1000" max="250000" step="1000" 
                value={merchantCount} onChange={(e) => setMerchantCount(Number(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Daily Txns */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold flex items-center text-slate-700">
                  <TrendingUp className="w-4 h-4 mr-2 text-emerald-500" /> Daily Txns per Merchant
                </label>
                <span className="text-sm font-bold text-blue-600">{txnsPerDay}</span>
              </div>
              <input 
                type="range" min="5" max="500" step="5" 
                value={txnsPerDay} onChange={(e) => setTxnsPerDay(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* AOV */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold flex items-center text-slate-700">
                  <ShoppingCart className="w-4 h-4 mr-2 text-amber-500" /> Avg. Order Value (AOV)
                </label>
                <span className="text-sm font-bold text-blue-600">₹{aov}</span>
              </div>
              <input 
                type="range" min="20" max="1000" step="10" 
                value={aov} onChange={(e) => setAov(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Take Rate */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold flex items-center text-slate-700">
                  <Percent className="w-4 h-4 mr-2 text-purple-500" /> Transaction Cut (Take Rate)
                </label>
                <span className="text-sm font-bold text-blue-600">{takeRate.toFixed(2)}%</span>
              </div>
              <input 
                type="range" min="0" max="5" step="0.1" 
                value={takeRate} onChange={(e) => setTakeRate(Number(e.target.value))}
                className="w-full accent-purple-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-xs text-slate-500 mt-1">Note: UPI usually has 0% MDR. This applies to card/wallet txns.</p>
            </div>

            {/* Subscription */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold flex items-center text-slate-700">
                  <IndianRupee className="w-4 h-4 mr-2 text-rose-500" /> Monthly Subscription Fee
                </label>
                <span className="text-sm font-bold text-blue-600">₹{monthlySubscription} / mo</span>
              </div>
              <input 
                type="range" min="0" max="299" step="10" 
                value={monthlySubscription} onChange={(e) => setMonthlySubscription(Number(e.target.value))}
                className="w-full accent-rose-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Dashboard Outputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Line Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Monthly GMV</h5>
              <p className="text-2xl font-black text-slate-900">{formatCurrency(monthlyGmv)}</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Total Monthly Revenue</h5>
              <p className="text-2xl font-black text-white">{formatCurrency(totalRevenue)}</p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50">
              <h4 className="font-bold text-slate-900 flex items-center">
                <IndianRupee className="w-5 h-5 mr-2 text-slate-500" /> Monthly P&L Breakdown
              </h4>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Revenues Section */}
              <div>
                <h5 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-3">Revenues</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 flex items-center"><Percent className="w-4 h-4 mr-2" /> Transaction Cut ({takeRate}%)</span>
                    <span className="font-bold text-slate-900">{formatCurrency(transactionRevenue)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 flex items-center"><IndianRupee className="w-4 h-4 mr-2" /> Subscription Fees</span>
                    <span className="font-bold text-slate-900">{formatCurrency(subscriptionRevenue)}</span>
                  </div>
                </div>
              </div>

              {/* Costs Section */}
              <div className="pt-4 border-t border-slate-100">
                <h5 className="text-sm font-bold text-rose-600 uppercase tracking-wider mb-3">Costs (Amortized / Monthly)</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 flex items-center"><Box className="w-4 h-4 mr-2 text-slate-400" /> Device Cost (CapEx amortized 12m)</span>
                    <span className="font-bold text-slate-900">-{formatCurrency(amortizedCapEx)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 flex items-center"><Truck className="w-4 h-4 mr-2 text-slate-400" /> Logistics & Setup (Amortized 12m)</span>
                    <span className="font-bold text-slate-900">-{formatCurrency(amortizedLogistics)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 flex items-center"><Wifi className="w-4 h-4 mr-2 text-slate-400" /> SIM & Data Connectivity (OpEx)</span>
                    <span className="font-bold text-slate-900">-{formatCurrency(merchantCount * SIM_DATA_COST)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 flex items-center"><HeadphonesIcon className="w-4 h-4 mr-2 text-slate-400" /> Field Support & Maint. (OpEx)</span>
                    <span className="font-bold text-slate-900">-{formatCurrency(merchantCount * SUPPORT_COST)}</span>
                  </div>
                </div>
              </div>

              {/* Net Profit Section */}
              <div className={`p-4 rounded-lg flex justify-between items-center ${netProfit >= 0 ? 'bg-emerald-50 border border-emerald-100' : 'bg-rose-50 border border-rose-100'}`}>
                <div>
                  <h5 className={`font-bold uppercase tracking-wider text-sm ${netProfit >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                    Projected Monthly Profit
                  </h5>
                  <p className={`text-xs mt-1 ${netProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    Margin: {profitMargin.toFixed(1)}%
                  </p>
                </div>
                <span className={`text-2xl font-black ${netProfit >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {netProfit >= 0 ? '+' : ''}{formatCurrency(netProfit)}
                </span>
              </div>

            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-sm text-blue-800 leading-relaxed">
            <strong>Assumptions used:</strong> Hardware cost is ₹{DEVICE_COST} per unit. Logistics/Setup cost is ₹{LOGISTICS_COST} per unit. Both are treated as CapEx and amortized over 12 months. Monthly OpEx includes SIM/Data (₹{SIM_DATA_COST}/mo) and Field Support (₹{SUPPORT_COST}/mo) per active merchant.
          </div>

        </div>
      </div>
    </div>
  );
}
