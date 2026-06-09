import React, { useState } from 'react';
import { 
  Flame, Swords, Coins, Smartphone, Zap, 
  TrendingUp, Layers, CheckCircle, ShieldAlert, 
  Sparkles, Award, UserCheck, Truck, Info, Mail
} from 'lucide-react';

interface DeviceCardProps {
  title: string;
  cost: string;
  rental: string;
  target: string;
  benefits: string[];
  color: string;
  badge: string;
}

function DeviceShowcaseCard({ title, cost, rental, target, benefits, color, badge }: DeviceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        <div className={`p-4 ${color} text-white flex justify-between items-center`}>
          <h4 className="font-extrabold text-sm tracking-tight">{title}</h4>
          <span className="text-[10px] font-extrabold uppercase bg-white/20 px-2 py-0.5 rounded-md tracking-wider">
            {badge}
          </span>
        </div>
        
        <div className="p-5 space-y-4">
          {/* Price Tag */}
          <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">Upfront Price</span>
              <span className="text-base font-extrabold text-slate-900">{cost}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">Monthly Rent</span>
              <span className="text-base font-extrabold text-indigo-600">{rental}</span>
            </div>
          </div>

          <div>
            <span className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Target Merchant Segment</span>
            <p className="text-slate-700 text-xs font-semibold">{target}</p>
          </div>

          <div className="space-y-2">
            <span className="block text-[10px] uppercase font-bold text-slate-400">Device Features</span>
            <ul className="space-y-1.5">
              {benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
        <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider group-hover:text-blue-600 transition-colors">
          Competitive Spec Sheet
        </span>
      </div>
    </div>
  );
}

export default function SoundboxWars() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<'paytm' | 'phonepe' | 'pinelabs' | 'bharatpe'>('paytm');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-indigo-950 text-white p-8 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider border border-rose-500/30">
              <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              The Soundbox Wars
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Fintech Battle for Countertop Real Estate</h2>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              How startups leverage loud speakers, contactless card tapping, and aggressive pricing models to scale loans and secure merchant stickiness.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-semibold md:border-l md:border-slate-800 md:pl-6 shrink-0 space-y-1">
            <p className="text-slate-400">Industry Sizing (BofA):</p>
            <p className="text-slate-200 font-extrabold">25M Mid-Sized SMEs</p>
            <p className="text-slate-200 font-extrabold">15-17M Micro-Vendors</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Paytm FY23 Payment Rev.</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl md:text-3xl font-extrabold text-slate-950">₹4,928 Cr</span>
            <span className="text-xs font-bold text-emerald-600">+44% YoY</span>
          </div>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-1">
            <Coins className="w-3 h-3 text-emerald-500" />
            Driven by device subscriptions
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Card tap-and-pay MDR</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl md:text-3xl font-extrabold text-indigo-600">Up to 3%</span>
          </div>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-indigo-500" />
            Fintechs capture direct network fees
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Basic PoS Device Cost</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl md:text-3xl font-extrabold text-orange-500">~₹2,000</span>
          </div>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-1">
            <Smartphone className="w-3 h-3 text-orange-500" />
            Standard terminal benchmark cost
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Cheaper Soundbox Rentals</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl md:text-3xl font-extrabold text-rose-500">₹1 - ₹49</span>
            <span className="text-xs font-semibold text-slate-500">/mo</span>
          </div>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-rose-500" />
            PhonePe's aggressive entry pricing
          </div>
        </div>
      </div>

      {/* Device Duel Section */}
      <div>
        <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <Swords className="w-5 h-5 text-rose-500 animate-pulse" />
          The Hardware Stand-off (Pine Labs 'Mini' vs. Paytm 'Card Soundbox')
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DeviceShowcaseCard 
            title="Pine Labs 'Mini'"
            cost="₹1,999 Upfront"
            rental="Volume-Based Fee"
            target="Premium retail outlets and malls who trust Pine Labs' PoS brand"
            benefits={[
              "contactless card tap-and-pay (NFC)",
              "QR scan-and-pay screen output",
              "Audible confirmation speaker",
              "Sleek visual receipt indicator panel"
            ]}
            color="bg-slate-900"
            badge="Premium Tier"
          />

          <DeviceShowcaseCard 
            title="Paytm 'Card Soundbox'"
            cost="₹999 Upfront"
            rental="Fixed Monthly Rent"
            target="Mid-to-low scale micro-merchants needing card and voice alerts combined"
            benefits={[
              "All-in-one contactless card tap-and-pay",
              "Maximum tap txn limit of ₹5,000",
              "Loud audio confirmation alerts",
              "Dynamic UPI QR scanner panel"
            ]}
            color="bg-blue-600"
            badge="Mass Hybrid"
          />

          <DeviceShowcaseCard 
            title="Standard Soundbox (Solo)"
            cost="₹0 - ₹300 Upfront"
            rental="₹125 - ₹150 / mo"
            target="Kiranas and micro-vendors running high volume micro UPI checks"
            benefits={[
              "Zero MDR UPI audio announcements",
              "High battery capacity (3000 alerts)",
              "Loud speaker output",
              "Sticker-based checkout QR display"
            ]}
            color="bg-emerald-600"
            badge="Volume King"
          />
        </div>
      </div>

      {/* Core Revenue Moats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Why Fintechs Love Soundboxes */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-500" />
              The Financial Rationale: Why Fintechs Subsidize Hardware
            </h3>
            <p className="text-slate-500 text-xs mt-1">Four core monetization levers behind the soundbox explosion</p>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
              <div>
                <span className="text-xs font-extrabold text-slate-900">Zero MDR Offset</span>
                <p className="text-slate-500 text-xs mt-0.5">UPI payments generate zero transaction fees for fintechs. The soundbox's monthly rental subscription forms a high-margin recurring cash stream.</p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
              <div>
                <span className="text-xs font-extrabold text-slate-900">Merchant Stickiness & Retention</span>
                <p className="text-slate-500 text-xs mt-0.5">Having physical hardware placed on the shop counter anchors the merchant. Changing soundboxes disrupts checkout operations, building a heavy customer moat.</p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
              <div>
                <span className="text-xs font-extrabold text-slate-900">Lending Engine Enabler</span>
                <p className="text-slate-500 text-xs mt-0.5">As MobiKwik Co-founder Upasana Taku notes: device transactions capture real-time store cashflows. Underwriters use this ledger data to score risk and extend high-margin MSME loans.</p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
              <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</div>
              <div>
                <span className="text-xs font-extrabold text-slate-900">Contactless Card MDR Capture</span>
                <p className="text-slate-500 text-xs mt-0.5">Enabling card tap-and-pay on hybrid soundboxes allows fintechs to collect network Merchant Discount Rate (MDR) up to 3% on credit cards.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitor Playbook Tabs */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold tracking-tight flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Competitor Playbook & Market Focus
            </h3>
            <p className="text-slate-400 text-xs">Click on a provider below to view their soundbox strategy details:</p>

            <div className="flex gap-1.5 flex-wrap">
              {(['paytm', 'phonepe', 'pinelabs', 'bharatpe'] as const).map((name) => (
                <button
                  key={name}
                  onClick={() => setSelectedCompetitor(name)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer
                    ${selectedCompetitor === name 
                      ? 'bg-amber-500 text-slate-950' 
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }
                  `}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="pt-4 space-y-3 border-t border-slate-800/80 min-h-[160px]">
              {selectedCompetitor === 'paytm' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-400">PAYTM (FIRST-MOVER)</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md">Market Leader</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Launched soundboxes in 2019. High reliability in Mumbai surveys due to premium speakers, excellent battery backup, and reliable payment reconciliation with ledger bank statements. Subscription rentals (₹125–150/mo) drive stickiness and scale their high-margin lending book.
                  </p>
                </div>
              )}

              {selectedCompetitor === 'phonepe' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-400">PHONEPE (COST AGGRESSION)</span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-md">Challenger</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    PhonePe uses aggressive pricing (₹1–49/month rentals) to capture market share. Surveys indicate merchants frequently migrate from Paytm to PhonePe exclusively for these low-cost rental offsets.
                  </p>
                </div>
              )}

              {selectedCompetitor === 'pinelabs' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-400">PINE LABS (PREMIUM ENCLAVE)</span>
                    <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-md">PoS Giant</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Entering soundboxes with 'Mini' priced at ₹1,999. Targets premium tier stores where brand trust already exists. Focuses on contactless tapping cards alongside QR outputs.
                  </p>
                </div>
              )}

              {selectedCompetitor === 'bharatpe' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-400">BHARATPE (BUNDLE VALUE)</span>
                    <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-md">SME Bundler</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Known for Android PoS devices (Bharat Swipe). Looking to combine soundboxes, card tap transactions, and digital receipts into all-in-one bundles to cut costs for SME shops.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="text-[10px] text-slate-500 font-extrabold uppercase border-t border-slate-800/80 pt-3 mt-4">
            * Amazon, Google, Reliance, and SBI are in pilot stages (2023).
          </div>
        </div>
      </div>

      {/* Execution Bottlenecks */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <h3 className="text-sm font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-indigo-500" />
          The Execution Bottlenecks: Distribution & Installation
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex gap-3 items-start">
            <Truck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-extrabold text-slate-900">Manpower Intensive</span>
              <p className="text-slate-500 text-xs mt-0.5">Soundbox distribution requires extensive local agent reach. Acquiring countertops is an operations-heavy battle.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex gap-3 items-start">
            <UserCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-extrabold text-slate-900">MID Procurement</span>
              <p className="text-slate-500 text-xs mt-0.5">Quickly processing the Merchant Identification Number (MID) and onboarding checks to clear compliance hurdles fast.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex gap-3 items-start">
            <Award className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-extrabold text-slate-900">24-Hour Installation</span>
              <p className="text-slate-500 text-xs mt-0.5">Winning networks guarantee to deliver, set up, and configure soundboxes at stores within 24 hours of ordering.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Citations */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600 border border-slate-200">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-extrabold text-slate-900">Article Reference (Sept 2023)</span>
            <p className="text-slate-500 text-xs mt-0.5">
              Source: <em>Sound of money: Fintech startups are in the race for soundbox domination</em> by Naina Sood.
            </p>
          </div>
        </div>
        <div className="text-xs text-slate-400 font-medium">
          Includes insights from BofA Securities & Paytm FY23 reports.
        </div>
      </div>

    </div>
  );
}
