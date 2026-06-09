import React from 'react';
import { Users, Code, Lightbulb, Rocket, Mail, Globe } from 'lucide-react';

export default function MeetTheTeam() {
  return (
    <div className="animate-in fade-in duration-500 h-full overflow-y-auto pr-2 pb-8 space-y-8 flex flex-col items-center justify-center pt-8 md:pt-12">
      <div className="text-center space-y-4 max-w-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-4">
          <Users className="w-10 h-10" />
        </div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Meet the Creators</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          This comprehensive market study and prediction dashboard was engineered and curated by the visionaries at the <strong className="text-blue-600">VG PAY TEAM</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Market Strategy</h3>
          <p className="text-sm text-slate-500">Uncovering the unit economics and macro-trends driving Indian fintech.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
            <Code className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Technical Engineering</h3>
          <p className="text-sm text-slate-500">Building dynamic, real-time predictive models for the soundbox ecosystem.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 mb-4">
            <Rocket className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Product Vision</h3>
          <p className="text-sm text-slate-500">Charting the future of B2B payment hardware and lending flywheels.</p>
        </div>
      </div>

      <div className="mt-16 w-full max-w-3xl bg-slate-900 text-white p-8 md:p-12 rounded-2xl text-center shadow-lg relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <h3 className="text-3xl font-black mb-4 relative z-10 tracking-wider">VG PAY TEAM</h3>
        <p className="text-slate-300 relative z-10 max-w-xl mx-auto mb-8 leading-relaxed">
          Pioneering the next generation of merchant payment solutions. We believe in building technology that empowers millions of micro-merchants across the globe.
        </p>
        <div className="flex justify-center gap-4 relative z-10">
          <button className="bg-white/10 hover:bg-white/20 transition-colors px-6 py-2.5 rounded-lg flex items-center text-sm font-medium">
            <Mail className="w-4 h-4 mr-2" /> Contact Us
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-2.5 rounded-lg flex items-center text-sm font-medium">
            <Globe className="w-4 h-4 mr-2" /> Visit Website
          </button>
        </div>
      </div>
    </div>
  );
}
