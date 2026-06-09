import React, { useState } from 'react';
import { PROVIDERS } from '../data';
import { Speaker, CreditCard, Smartphone, CheckCircle2 } from 'lucide-react';

export default function DeviceCatalog() {
  const [selectedProviderId, setSelectedProviderId] = useState(PROVIDERS[0].id);

  const selectedProvider = PROVIDERS.find(p => p.id === selectedProviderId) || PROVIDERS[0];

  const getDeviceIcon = (type: string) => {
    switch(type) {
      case 'soundbox': return <Speaker className="w-8 h-8 text-blue-500" />;
      case 'pos': return <CreditCard className="w-8 h-8 text-emerald-500" />;
      case 'hybrid': return <Speaker className="w-8 h-8 text-purple-500" />;
      case 'pocket': return <Smartphone className="w-8 h-8 text-amber-500" />;
      default: return <Speaker className="w-8 h-8 text-slate-500" />;
    }
  };

  return (
    <div className="animate-in fade-in duration-500 flex flex-col md:flex-row gap-6 h-full">
      {/* Sidebar for Providers */}
      <div className="w-full md:w-64 shrink-0 space-y-2">
        <h3 className="font-bold text-slate-800 mb-4 px-2">Hardware Providers</h3>
        {PROVIDERS.map((provider) => (
          <button
            key={provider.id}
            onClick={() => setSelectedProviderId(provider.id)}
            className={`w-full text-left px-4 py-3 rounded-xl flex items-center transition-all ${
              selectedProviderId === provider.id 
                ? 'bg-white shadow-sm border border-slate-200 ring-2 ring-blue-500/20' 
                : 'hover:bg-slate-100 border border-transparent'
            }`}
          >
            <div 
              className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold text-white mr-3 shadow-sm"
              style={{ backgroundColor: provider.color }}
            >
              {provider.logoLetter}
            </div>
            <span className={`font-bold ${selectedProviderId === provider.id ? 'text-slate-900' : 'text-slate-600'}`}>
              {provider.name}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content for Devices */}
      <div className="flex-1 bg-white rounded-3xl border border-slate-200 p-6 md:p-10 overflow-y-auto shadow-sm">
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
            {selectedProvider.name} Hardware Catalog
          </h2>
          <p className="text-slate-500 font-medium">
            Explore the different point-of-sale and audio devices offered by {selectedProvider.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {selectedProvider.devices.map((device, index) => (
            <div key={index} className="border border-slate-100 bg-slate-50 rounded-2xl p-8 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent opacity-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  {device.imageUrl ? (
                    <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                      <img src={device.imageUrl} alt={device.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 shrink-0">
                      {getDeviceIcon(device.type)}
                    </div>
                  )}
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-200 text-slate-600">
                    {device.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-slate-900 mb-2">{device.name}</h4>
                <p className="text-sm text-slate-600 font-medium mb-6 min-h-[40px]">
                  {device.description}
                </p>
                
                <div className="space-y-3">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Key Features</h5>
                  {device.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-sm font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
