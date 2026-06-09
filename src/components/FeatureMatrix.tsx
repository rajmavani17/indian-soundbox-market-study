import { PROVIDERS } from '../data';
import { Check, Info, X, Cpu, Battery, Activity, Banknote, IndianRupee, TrendingUp, Presentation } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Provider } from '../types';

export default function FeatureMatrix() {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

  const featureKeys = [
    { key: 'setupFee', label: 'Initial Setup Fee' },
    { key: 'monthlyRental', label: 'Monthly Rental' },
    { key: 'batteryLife', label: 'Battery Capacity' },
    { key: 'connectivity', label: 'Network' },
    { key: 'languages', label: 'Supported Languages' },
  ];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col min-h-0 relative">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
          <h3 className="font-bold text-slate-800">Feature Comparison Matrix</h3>
          <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded border border-blue-100">Q3 UPDATED</span>
        </div>
        
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                <th className="px-6 py-4">Specification</th>
                {PROVIDERS.map((p) => (
                  <th key={p.id} className="px-6 py-4 cursor-pointer group" onClick={() => setSelectedProvider(p)}>
                    <div className="flex items-center">
                      <div 
                        className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold text-white mr-2 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: p.color }}
                      >
                        {p.logoLetter}
                      </div>
                      <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors border-b border-transparent group-hover:border-blue-200">{p.name} <span className="text-[9px] ml-1 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">Deep Dive &rarr;</span></span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {featureKeys.map((feat) => (
                <tr key={feat.key} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">
                    {feat.label}
                  </td>
                  {PROVIDERS.map((p) => (
                    <td 
                      key={`${p.id}-${feat.key}`} 
                      className="px-6 py-4 text-slate-600 font-mono text-sm cursor-pointer hover:bg-blue-50/50 transition-colors"
                      onClick={() => setSelectedProvider(p)}
                    >
                      {p.features[feat.key as keyof typeof p.features]}
                    </td>
                  ))}
                </tr>
              ))}
              
              {/* Product Highlight Row */}
              <tr className="bg-slate-50/30">
                <td className="px-6 py-4 font-bold text-slate-900 align-top">
                  Differentiator
                </td>
                {PROVIDERS.map((p) => (
                  <td 
                    key={`${p.id}-highlight`} 
                    className="px-6 py-4 text-xs font-medium align-top leading-relaxed text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors"
                    onClick={() => setSelectedProvider(p)}
                  >
                    <div className="flex gap-1.5 border-l-2 border-blue-400 pl-2">
                      <span>{p.features.highlight}</span>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-slate-900 text-slate-400 p-4 text-[11px] flex justify-between items-center mt-auto">
          <span>Source: Corporate Disclosures and Market Surveys. Click any provider column for detailed hardware and financial teardown.</span>
        </div>
      </div>

      <AnimatePresence>
        {selectedProvider && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedProvider(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div 
                className="px-6 py-5 flex justify-between items-center text-white shrink-0"
                style={{ backgroundColor: selectedProvider.color }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xl backdrop-blur-sm">
                    {selectedProvider.logoLetter}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">{selectedProvider.name} Deep Dive</h2>
                    <p className="text-white/80 text-xs font-medium uppercase tracking-wider">{selectedProvider.deploymentCount} Devices Deployed</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProvider(null)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 md:p-8 flex-1 bg-slate-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Hardware Specs */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                      <Cpu className="w-5 h-5 text-slate-700" />
                      <h3 className="text-lg font-bold text-slate-800">Hardware Specifications</h3>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Processor</p>
                          <p className="text-sm font-medium text-slate-900 mt-0.5">{selectedProvider.hardwareDetails.processor}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Audio Output</p>
                          <p className="text-sm font-medium text-slate-900 mt-0.5">{selectedProvider.hardwareDetails.speakerOutput}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Battery</p>
                          <p className="text-sm font-medium text-slate-900 mt-0.5">{selectedProvider.hardwareDetails.batteryCapacity}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Charging</p>
                          <p className="text-sm font-medium text-slate-900 mt-0.5">{selectedProvider.hardwareDetails.chargingPort}</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Connectivity</p>
                        <p className="text-sm font-medium text-slate-900 mt-0.5">{selectedProvider.hardwareDetails.networkSupport}</p>
                      </div>
                      
                      {selectedProvider.hardwareDetails.display && (
                        <div className="pt-4 border-t border-slate-100">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Display</p>
                          <p className="text-sm font-medium text-slate-900 mt-0.5">{selectedProvider.hardwareDetails.display}</p>
                        </div>
                      )}

                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Additional Features</p>
                        <ul className="space-y-1">
                          {selectedProvider.hardwareDetails.additionalFeatures.map((feat, idx) => (
                            <li key={idx} className="text-sm font-medium text-slate-700 flex items-start gap-2">
                              <span className="text-blue-500 mt-0.5">&bull;</span> {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Financials & Economics */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-lg font-bold text-slate-800">Financials & Economics</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Revenue Headline */}
                      <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-5 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Latest Reported Revenue</p>
                          <p className="text-xl font-extrabold text-slate-900 mt-1">{selectedProvider.financialDetails.latestRevenue}</p>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded-full text-emerald-600">
                          <Banknote className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Profitability */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                         <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 mb-3">Operating Status</p>
                         <p className="text-sm font-bold text-slate-800">{selectedProvider.financialDetails.profitabilityStatus}</p>
                      </div>

                      {/* Unit Economics */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                         <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 mb-3 flex items-center gap-1"><IndianRupee className="w-3 h-3"/> Hardware Unit Economics</p>
                         <p className="text-sm text-slate-700 leading-relaxed font-medium">{selectedProvider.financialDetails.hardwareUnitEconomics}</p>
                      </div>

                      {/* Revenue Streams */}
                      <div className="bg-slate-800 text-white rounded-xl shadow-sm p-5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700 pb-2 mb-3 flex items-center gap-1"><Presentation className="w-3 h-3"/> Revenue Streams</p>
                        <ul className="space-y-3">
                          {selectedProvider.financialDetails.revenueBreakdown.map((stream, idx) => {
                            const [title, desc] = stream.split(': ');
                            return (
                              <li key={idx} className="text-sm leading-relaxed">
                                <span className="font-bold text-emerald-400">{title}:</span> <span className="text-slate-300">{desc}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      
                      {/* Lending Mechanism */}
                      <div className="bg-blue-50 border border-blue-100 rounded-xl shadow-sm p-5">
                         <p className="text-[10px] font-bold uppercase tracking-wider text-blue-800 border-b border-blue-200 pb-2 mb-3 flex items-center gap-1"><Activity className="w-3 h-3"/> Lending Flywheel</p>
                         <p className="text-sm text-blue-900 leading-relaxed font-medium">{selectedProvider.financialDetails.lendingMechanism}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
