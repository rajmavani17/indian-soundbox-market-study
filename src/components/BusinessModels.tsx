import { PROVIDERS } from '../data';
import { Target, Coins, Workflow, PiggyBank, RefreshCw, BarChart2, Activity, ChevronRight, PieChart, Users, Map, Wallet, TrendingUp } from 'lucide-react';

export default function BusinessModels() {
  const renderBulletPoints = (points: string[]) => (
    <ul className="text-sm text-slate-600 ml-6 space-y-2.5 list-none mt-2">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start">
          <ChevronRight className="w-4 h-4 mr-2 text-slate-400 shrink-0 mt-0.5" />
          <span className="leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="animate-in fade-in duration-500 h-full overflow-y-auto pr-2 pb-8 space-y-6">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
          Deep Dive: How They Monetize
        </h3>
        <p className="text-slate-600 font-medium leading-relaxed">
          The soundbox war isn't about selling hardware. It's a defensive play to retain merchant current accounts (for banks), a way to acquire a captive audience for cross-selling high-margin financial services (for PhonePe & GPay), or an aggressive data-driven lending tool (for Paytm & BharatPe).
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {PROVIDERS.map((provider) => (
          <div 
            key={provider.id} 
            className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col"
          >
            <div className="flex items-center mb-8 border-b border-slate-100 pb-6">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white mr-4 shadow-sm shrink-0"
                style={{ backgroundColor: provider.color }}
              >
                {provider.logoLetter}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{provider.name} Strategy</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-900 mb-1">
                    <Target className="w-5 h-5 mr-2 text-indigo-500" />
                    Core Strategy
                  </h4>
                  {renderBulletPoints(provider.businessModel.coreStrategy)}
                </div>

                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-900 mb-1">
                    <Coins className="w-5 h-5 mr-2 text-emerald-500" />
                    Primary Revenue
                  </h4>
                  {renderBulletPoints(provider.businessModel.primaryRevenue)}
                </div>

                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-900 mb-1">
                    <Workflow className="w-5 h-5 mr-2 text-blue-500" />
                    Ecosystem Play
                  </h4>
                  {renderBulletPoints(provider.businessModel.ecosystemPlay)}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-900 mb-1">
                    <PiggyBank className="w-5 h-5 mr-2 text-amber-500" />
                    Lending Focus
                  </h4>
                  {renderBulletPoints(provider.businessModel.lendingFocus)}
                </div>

                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-900 mb-1">
                    <RefreshCw className="w-5 h-5 mr-2 text-rose-500" />
                    How They Make Money
                  </h4>
                  {renderBulletPoints(provider.businessModel.howTheyMakeMoney)}
                </div>

                <div>
                  <h4 className="flex items-center text-sm font-bold text-slate-900 mb-1">
                    <BarChart2 className="w-5 h-5 mr-2 text-cyan-500" />
                    Profit Strategy
                  </h4>
                  {renderBulletPoints(provider.businessModel.profitStrategy)}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-slate-500" />
                Financial Deep Dive & Market Position
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Market Position */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <h5 className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        <Users className="w-4 h-4 mr-2 text-indigo-500" /> Target Audience
                      </h5>
                      <p className="text-sm text-slate-800 leading-relaxed font-medium">{provider.businessModel.targetAudience}</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        <Map className="w-4 h-4 mr-2 text-emerald-500" /> Tier Market Capture
                      </h5>
                      <p className="text-sm text-slate-800 leading-relaxed font-medium">{provider.businessModel.tierMarketCapture}</p>
                    </div>
                  </div>

                  {/* UPI Sponsor & Lending Partners */}
                  <div className="border-t border-slate-200/60 pt-5 space-y-4">
                    {provider.businessModel.upiSponsorBanks && provider.businessModel.upiSponsorBanks.length > 0 && (
                      <div>
                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          UPI Sponsor Banks
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {provider.businessModel.upiSponsorBanks.map((bank, index) => (
                            <span 
                              key={index} 
                              className="text-[10px] font-bold bg-white text-slate-600 border border-slate-200/80 px-2.5 py-1 rounded-md shadow-2xs"
                            >
                              {bank}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {provider.businessModel.lendingPartners && provider.businessModel.lendingPartners.length > 0 && (
                      <div>
                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Credit & Lending Partners
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {provider.businessModel.lendingPartners.map((partner, index) => (
                            <span 
                              key={index} 
                              className="text-[10px] font-bold bg-indigo-50/50 text-indigo-700 border border-indigo-100 px-2.5 py-1 rounded-md"
                            >
                              {partner}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Financials */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex-1 min-w-[140px]">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Latest Revenue</p>
                      <p className="text-sm font-bold text-slate-900">{provider.financialDetails.latestRevenue}</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex-1 min-w-[140px]">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Profitability Status</p>
                      <p className="text-sm font-bold text-slate-900">{provider.financialDetails.profitabilityStatus}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h5 className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        <Wallet className="w-4 h-4 mr-2 text-blue-500" /> Revenue Breakdown
                      </h5>
                      {renderBulletPoints(provider.financialDetails.revenueBreakdown)}
                    </div>
                    <div>
                      <h5 className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        <TrendingUp className="w-4 h-4 mr-2 text-amber-500" /> Unit Economics (Hardware)
                      </h5>
                      {renderBulletPoints(provider.financialDetails.hardwareUnitEconomics)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex gap-3">
                <div className="mt-0.5 text-orange-500 shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Approx. Transaction Volume</h4>
                  <p className="text-sm font-bold text-slate-800">{provider.financialDetails.approxTransactionVolume}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NPCI Interoperable Infrastructure Disruption */}
      <div className="mt-12 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 md:p-8 shadow-xl border border-indigo-500/30 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-300">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">The Future: NPCI's Interoperable Infrastructure</h3>
              <p className="text-indigo-200 font-medium mt-1">Common backend infrastructure for UPI soundboxes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-rose-400" />
                The Disruption
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 mr-3 shrink-0"></div>
                  <p className="text-slate-300 text-sm leading-relaxed"><strong>Common Platform:</strong> NPCI is building an infrastructure to allow a single device to process payments across any payment app (Paytm, PhonePe, GPay).</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 mr-3 shrink-0"></div>
                  <p className="text-slate-300 text-sm leading-relaxed"><strong>End to Hardware Monopolies:</strong> Currently, fintechs trap merchants with closed-ecosystem hardware, charging monthly rentals. The new framework breaks this lock-in.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 mr-3 shrink-0"></div>
                  <p className="text-slate-300 text-sm leading-relaxed"><strong>Reduced Duplication:</strong> Merchants will no longer need 3-4 separate devices cluttering their counter space.</p>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-500/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/20">
              <h4 className="text-lg font-bold text-indigo-300 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
                How It's Beneficial To Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-emerald-400/20 p-1.5 rounded-md mr-3 shrink-0 mt-0.5">
                    <PiggyBank className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <strong className="text-white text-sm block mb-0.5">Drastically Lower CapEx</strong>
                    <p className="text-slate-300 text-sm leading-relaxed">We don't need to heavily subsidize proprietary hardware to acquire merchants. We can leverage standard NPCI-compatible devices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-400/20 p-1.5 rounded-md mr-3 shrink-0 mt-0.5">
                    <Workflow className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <strong className="text-white text-sm block mb-0.5">Level Playing Field</strong>
                    <p className="text-slate-300 text-sm leading-relaxed">Incumbents (Paytm/PhonePe) will lose their hardware moat. We can acquire their merchants simply by offering a better software/settlement experience on the same box.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-400/20 p-1.5 rounded-md mr-3 shrink-0 mt-0.5">
                    <BarChart2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <strong className="text-white text-sm block mb-0.5">Pivot to SaaS & AI Value</strong>
                    <p className="text-slate-300 text-sm leading-relaxed">We can shift our monetization model from "Hardware Rental" to "Value-Added Services" (e.g., AI-driven insights, credit scoring, inventory management, embedded lending).</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
