import { ExternalLink, BookOpen } from 'lucide-react';

export default function Sources() {
  const sources = [
    {
      title: "Paytm Financial Results & Disclosures",
      type: "Company Filing",
      url: "https://paytm.com/investor-relations",
      description: "Official financial results highlighting the distribution of soundboxes, active merchants, and lending portfolio metrics."
    },
    {
      title: "PhonePe Pulse Report (Q4 2021) - Primary Source",
      type: "Company Data",
      url: "https://www.phonepe.com/pulsestatic/847/pulse/static/7ef04b6ce8115686e6334bf2285f8cbb/Pulse_Report_Q4_2021_L_Cr.pdf",
      description: "Primary source for digital payment trends, TPV of ₹11 lakh crores, and digitization of 2.5 Cr merchants."
    },
    {
      title: "PhonePe & BCG: Digital Payments in India",
      type: "Analyst Report",
      url: "https://www.phonepe.com/pulsestatic/847/pulse/static/83bc2c9e9038369af2eb9eb7d62cb49f/PhonePe_Pulse_BCG_report.pdf",
      description: "Joint report by BCG and PhonePe detailing the $10 Trillion opportunity and offline merchant payment penetration."
    },
    {
      title: "BharatPe Annual Reports & Media Statements",
      type: "Company Data",
      url: "https://bharatpe.com/",
      description: "Information regarding loan disbursals tied to QR, merchant cash advances, and soundbox metrics."
    },
    {
      title: "NPCI UPI Statistics",
      type: "Industry Data",
      url: "https://www.npci.org.in/what-we-do/upi/product-statistics",
      description: "Monthly transaction data for P2M (Person-to-Merchant) UPI transactions across different payment aggregators."
    },
    {
      title: "Industry Research (Macquarie, Bernstein, BofA)",
      type: "Analyst Reports",
      url: "https://www.macquarie.com/",
      description: "Financial analysis on the unit economics of soundbox hardware, market share estimates, and merchant lending profitability."
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          Data Sources & Methodology
        </h3>
        <p className="text-sm font-medium text-slate-600 leading-relaxed mb-4">
          The information presented in this interactive market study is synthesized from public company filings, press statements, NPCI metrics, and recognized financial analyst reports.
        </p>

        <div className="mt-6 space-y-4">
          {sources.map((source, index) => (
            <a 
              key={index} 
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group"
            >
              <div className="mt-1">
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{source.title}</h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    {source.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  {source.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <p className="text-xs font-medium text-blue-800 leading-relaxed">
          <span className="font-bold">Disclaimer:</span> This is a market study dashboard. Revenue figures, market shares, and transaction volumes are approximations based on public data up to 2024 and are intended for illustrative analytical purposes.
        </p>
      </div>
    </div>
  );
}
