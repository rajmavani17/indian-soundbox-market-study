import { Activity, ArrowLeft, ArrowRight, BarChart3, BookOpen, Calculator, Database, Flame, Layers, Lightbulb, Link, Smartphone, Speaker, Users } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import BusinessModels from './components/BusinessModels';
import DeviceCatalog from './components/DeviceCatalog';
import FeatureMatrix from './components/FeatureMatrix';
import MeetTheTeam from './components/MeetTheTeam';
import Overview from './components/Overview';
import PwcInsights from './components/PwcInsights';
import RevenueCalculator from './components/RevenueCalculator';
import SoundboxWars from './components/SoundboxWars';
import Sources from './components/Sources';
import StrategyPlaybook from './components/StrategyPlaybook';
import UpiEcosystem from './components/UpiEcosystem';
import { ViewState } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('overview');

  const navItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Market Overview', icon: <BarChart3 className="w-4 h-4 mr-2" /> },
    { id: 'upi-ecosystem', label: 'UPI Ecosystem', icon: <Activity className="w-4 h-4 mr-2 text-indigo-500" /> },
    { id: 'features', label: 'Feature Matrix', icon: <Database className="w-4 h-4 mr-2" /> },
    { id: 'business-models', label: 'Business Models', icon: <Layers className="w-4 h-4 mr-2" /> },
    { id: 'devices', label: 'Device Catalog', icon: <Smartphone className="w-4 h-4 mr-2" /> },
    { id: 'strategy', label: 'Startup Playbook', icon: <Lightbulb className="w-4 h-4 mr-2" /> },
    { id: 'calculator', label: 'Revenue Predictor', icon: <Calculator className="w-4 h-4 mr-2" /> },
    { id: 'pwc-insights', label: 'PwC Insights', icon: <BookOpen className="w-4 h-4 mr-2 text-amber-500" /> },
    { id: 'soundbox-wars', label: 'Soundbox Wars', icon: <Flame className="w-4 h-4 mr-2 text-rose-500" /> },
    { id: 'sources', label: 'Sources', icon: <Link className="w-4 h-4 mr-2" /> },
    { id: 'meet-team', label: 'Meet Us', icon: <Users className="w-4 h-4 mr-2" /> },
  ];

  const currentIndex = navItems.findIndex((item) => item.id === currentView);
  const prevView = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextView = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Market Research Report 2026</span>
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none flex items-center gap-2">
            <Speaker className="w-8 h-8 text-blue-600" />
            Soundbox <span className="text-blue-600">India</span>
          </h1>
          <p className="text-slate-500 mt-2 text-sm max-w-2xl font-medium">
            Interactive case study on Indian retail IoT fintech, analyzing physical features, business models, and market positioning.
          </p>
        </div>

        {/* Navigation */}
        <nav className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex overflow-x-auto hide-scrollbar gap-2 py-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`flex items-center px-4 py-2 text-sm font-bold rounded transition-all border whitespace-nowrap
                    ${currentView === item.id
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full flex-1"
            >
              {currentView === 'overview' && <Overview />}
              {currentView === 'upi-ecosystem' && <UpiEcosystem />}
              {currentView === 'features' && <FeatureMatrix />}
              {currentView === 'business-models' && <BusinessModels />}
              {currentView === 'devices' && <DeviceCatalog />}
              {currentView === 'strategy' && <StrategyPlaybook />}
              {currentView === 'calculator' && <RevenueCalculator />}
              {currentView === 'pwc-insights' && <PwcInsights />}
              {currentView === 'soundbox-wars' && <SoundboxWars />}
              {currentView === 'sources' && <Sources />}
              {currentView === 'meet-team' && <MeetTheTeam />}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Pagination / Page Transitions */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            {prevView ? (
              <button
                onClick={() => {
                  setCurrentView(prevView.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex items-center gap-4 px-5 py-3.5 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50/20 text-left transition-all duration-200 shadow-xs cursor-pointer group"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-600 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Previous</span>
                  <span className="block text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors">{prevView.label}</span>
                </div>
              </button>
            ) : (
              <div className="hidden sm:block w-[200px]" />
            )}

            {/* Pagination dots */}
            <div className="flex items-center gap-2 order-first sm:order-none bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200/50">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  title={item.label}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'bg-blue-600 w-6'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {nextView ? (
              <button
                onClick={() => {
                  setCurrentView(nextView.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-4 px-5 py-3.5 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50/20 text-right transition-all duration-200 shadow-xs cursor-pointer group"
              >
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Next</span>
                  <span className="block text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors">{nextView.label}</span>
                </div>
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-600 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ) : (
              <div className="hidden sm:block w-[200px]" />
            )}
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="bg-slate-100 px-8 py-3 border-t border-slate-200 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-tighter shrink-0 hidden md:flex">
        <div className="flex gap-8">
          <span>Ref ID: 8829-X</span>
          <span>Confidential Distribution</span>
          <span>© 2024 Financial Research Partners</span>
        </div>
        <div className="flex gap-4">
          <span className="text-blue-600">Internal Use Only</span>
          <span>Page 01/01</span>
        </div>
      </footer>
    </div>
  );
}
