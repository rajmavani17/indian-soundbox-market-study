import React from 'react';
import { Target, Lightbulb, Calculator, Building2, Megaphone, Server, Store, Landmark, Coins, TrendingUp } from 'lucide-react';

export default function StrategyPlaybook() {
  return (
    <div className="animate-in fade-in duration-500 h-full overflow-y-auto pr-2 pb-8 space-y-8">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-500" />
          Startup Playbook: Market Entry Strategy
        </h3>
        <p className="text-slate-600 font-medium leading-relaxed">
          Entering the Indian soundbox market against heavyweights like PhonePe and Paytm requires avoiding a direct B2C subsidy war. The most viable paths involve B2B white-labeling, hyper-vertical SaaS bundles, or innovative ad-supported models. Here is a tactical breakdown of how a new entrant can carve out a profitable niche.
        </p>
      </div>

      {/* Target Banks Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center mb-6 border-b border-slate-100 pb-4">
          <Building2 className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-xl font-bold text-slate-900">Which Banks to Target?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-rose-50 border border-rose-100 p-6 rounded-xl">
            <h4 className="font-bold text-rose-800 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" /> Who to Avoid (The Giants)
            </h4>
            <ul className="text-sm text-rose-700 space-y-3 list-disc list-inside ml-2">
              <li className="leading-relaxed"><strong>Top Private Banks (HDFC, ICICI, Axis):</strong> Already have massive in-house merchant acquiring networks (like HDFC SmartHub) or established OEM partnerships.</li>
              <li className="leading-relaxed"><strong>SBI & Large PSUs:</strong> Long procurement cycles, complex tenders, and existing tie-ups for POS terminals.</li>
            </ul>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <Landmark className="w-5 h-5" /> Who to Target (The Sweet Spot)
            </h4>
            <ul className="text-sm text-emerald-700 space-y-3 list-disc list-inside ml-2">
              <li className="leading-relaxed"><strong>Mid-Tier Private Banks (Federal, IDFC First, South Indian Bank):</strong> Highly digital but lacking a ubiquitous physical merchant presence. They are desperate to prevent CASA deposit flight to fintechs.</li>
              <li className="leading-relaxed"><strong>Cooperative Banks & Regional Rural Banks (RRBs):</strong> Deeply entrenched in Tier 3-6 cities. They trust local partners and need a white-label soundbox to digitize their vast merchant networks.</li>
              <li className="leading-relaxed"><strong>Large NBFCs:</strong> Companies like Bajaj Finserv or Muthoot looking to build daily-engagement channels with merchants for lending.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* USPs Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center mb-6 border-b border-slate-100 pb-4">
          <Target className="w-8 h-8 text-indigo-600 mr-3" />
          <h3 className="text-xl font-bold text-slate-900">Unique Selling Propositions (USPs)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-slate-100 bg-slate-50 p-6 md:p-8 rounded-xl">
            <Server className="w-8 h-8 text-purple-600 mb-4" />
            <h4 className="text-lg font-bold text-slate-900 mb-3">White-Label "Soundbox-as-a-Service"</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Don't acquire merchants. Acquire banks. Provide the hardware, SIM management, firmware updates, and a cloud dashboard for the bank. The bank slaps their logo on it and distributes it to their account holders.
            </p>
          </div>
          <div className="border border-slate-100 bg-slate-50 p-6 md:p-8 rounded-xl">
            <Megaphone className="w-8 h-8 text-orange-500 mb-4" />
            <h4 className="text-lg font-bold text-slate-900 mb-3">Ad-Supported Audio Network</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Subsidize the hardware cost by injecting 2-second audio ads after successful transactions. E.g., <i>"Payment of ₹50 received. Quench your thirst with Coca-Cola."</i> Local FMCG distributors pay for hyper-local audio impressions.
            </p>
          </div>
          <div className="border border-slate-100 bg-slate-50 p-6 md:p-8 rounded-xl">
            <Store className="w-8 h-8 text-emerald-500 mb-4" />
            <h4 className="text-lg font-bold text-slate-900 mb-3">Hyper-Vertical Integration</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Build a soundbox that integrates with specific legacy software. For restaurants, a soundbox that doubles as a kitchen ticket (KOT) printer. For pharmacies, integration with Marg ERP to auto-reconcile invoices.
            </p>
          </div>
          <div className="border border-slate-100 bg-slate-50 p-6 md:p-8 rounded-xl">
            <Calculator className="w-8 h-8 text-cyan-600 mb-4" />
            <h4 className="text-lg font-bold text-slate-900 mb-3">Dual-Screen Transparency</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              A device with a customer-facing e-ink display showing dynamic QR codes with exact billing amounts, reducing customer error and showing real-time store offers.
            </p>
          </div>
        </div>
      </div>

      {/* Business Models Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center mb-8 border-b border-slate-100 pb-4">
          <Coins className="w-8 h-8 text-amber-500 mr-3" />
          <h3 className="text-xl font-bold text-slate-900">Detailed Business Models</h3>
        </div>
        <div className="space-y-8">
          
          {/* Model 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              The B2B SaaS Model (Zero Merchant CAC)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Problem</h5>
                <p className="text-sm text-slate-700 leading-relaxed">Mid-tier private banks (like Federal Bank) and Regional Rural Banks (RRBs) are terrified that their merchants are moving their current accounts to Paytm or HDFC because those giants offer soundboxes.</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Playbook</h5>
                <p className="text-sm text-slate-700 leading-relaxed">Instead of spending massive amounts of money acquiring individual merchants, you acquire banks. You build the hardware, write the firmware, and manage the 4G SIM cards. You provide a white-labeled soundbox to the bank, and the bank distributes it to their account holders.</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Money</h5>
                <p className="text-sm text-emerald-700 font-bold leading-relaxed">You sell the hardware to the bank at cost. Then, you charge the bank a recurring SaaS fee (e.g., ₹50/month per active device) for managing the cloud infrastructure. Zero CAC for the merchant—the bank handles distribution.</p>
              </div>
            </div>
          </div>

          {/* Model 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              The Ad-Network Model (Audio Real Estate)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Problem</h5>
                <p className="text-sm text-slate-700 leading-relaxed">Merchants hate paying the ₹125 monthly rental fee for a generic box that only confirms payments.</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Playbook</h5>
                <p className="text-sm text-slate-700 leading-relaxed">Treat the soundbox as a miniature billboard inside a store. Give the merchant the box for absolutely free (no setup fee, no rental). In exchange, every time a payment succeeds, the box plays a 2-second audio ad (e.g., "Payment of ₹100 received. Cool down with a Coca-Cola today.").</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Money</h5>
                <p className="text-sm text-emerald-700 font-bold leading-relaxed">A busy local kirana might do 100 transactions a day. You sell that audio real estate to FMCG brands at a CPM (Cost Per Mille) rate. 10,000 devices doing 100 txns/day = 1,000,000 daily ad impressions.</p>
              </div>
            </div>
          </div>

          {/* Model 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              The Vertical SaaS Bundle (Premium Pricing)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Problem</h5>
                <p className="text-sm text-slate-700 leading-relaxed">A generic box only tells you a payment succeeded. It doesn't help the merchant run their actual business, making it a highly commoditized product.</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Playbook</h5>
                <p className="text-sm text-slate-700 leading-relaxed">Build a soundbox tailored for one specific industry. For restaurants, build a slightly larger soundbox with an integrated thermal printer. When a Swiggy order or QR payment comes in, it announces the payment and instantly prints the Kitchen Order Ticket (KOT).</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Money</h5>
                <p className="text-sm text-emerald-700 font-bold leading-relaxed">You don't charge a ₹49 rental fee. Because it's critical infrastructure, you charge ₹999/month for your "Restaurant Management Software Suite," and the hardware is a perk of the subscription. Guarantees high ARPU and extreme loyalty.</p>
              </div>
            </div>
          </div>

          {/* Model 4 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
              The Lending Flywheel (The Giant's Game)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Problem</h5>
                <p className="text-sm text-slate-700 leading-relaxed">Unsecured merchant lending is incredibly risky. Default rates (NPAs) are usually very high because it is hard to guarantee daily collections.</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Playbook</h5>
                <p className="text-sm text-slate-700 leading-relaxed">The soundbox is a Trojan horse. Deploy boxes at a loss to force the merchant to process all their daily QR payments through your system. Partner with an NBFC to offer them a working capital loan based on their visible cash flow.</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Money</h5>
                <p className="text-sm text-emerald-700 font-bold leading-relaxed flex items-start gap-1">
                  <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>The magic happens in collection: you auto-deduct the daily EMI from their incoming payments before settling the money into their bank account. The soundbox acts as an auto-recovery agent, ensuring near-zero default rates.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Model 5 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
              The Global Export Play (Middle East & SEA)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Problem</h5>
                <p className="text-sm text-slate-700 leading-relaxed">The Indian market is hyper-competitive and saturated with VC-subsidized hardware. Meanwhile, millions of Indian expats and tourists travel to Dubai, Abu Dhabi, and Singapore, where local merchants struggle with cross-border payment friction and lack instant audio confirmation systems.</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Playbook</h5>
                <p className="text-sm text-slate-700 leading-relaxed">Piggyback on NPCI International's push. Export proven Indian soundbox hardware to the Middle East and Southeast Asia. Partner with local acquirers (e.g., Network International in UAE, PayNow in Singapore) to provide multi-currency soundboxes that announce UPI payments for tourists, alongside local wallet payments.</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">The Money</h5>
                <p className="text-sm text-emerald-700 font-bold leading-relaxed flex items-start gap-1">
                  <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Instead of fighting for ₹49/month in India, you charge a premium global SaaS fee of $10 to $15 per month (₹800 - ₹1200) to merchants in Dubai or Singapore. The manufacturing cost remains Indian (~₹1500), but the ARPU is 15x higher.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
