import { Provider } from './types';

export const PROVIDERS: Provider[] = [
  {
    id: 'paytm',
    name: 'Paytm',
    color: '#002970',
    lightColor: '#E6F0FF',
    marketShare: 59,
    deploymentCount: '15.0M',
    logoLetter: 'P',
    features: {
      setupFee: '₹299',
      monthlyRental: '₹125',
      batteryLife: 'Up to 7 days',
      connectivity: '4G WiFi Bluetooth',
      languages: 11,
      highlight: 'First-mover, highly customizable variants (Music, Card Machine).',
    },
    devices: [
      { name: 'Paytm Soundbox 3.0', type: 'soundbox', description: 'Standard device with instant audio confirmation.', features: ['4G Connectivity', '11 Languages', 'Up to 7 days battery'], imageUrl: 'https://assetscdn1.paytm.com/images/catalog/product/F/FU/FULSOUNDBOX-3-0OCL-870346A11513D0/1092.png' },
      { name: 'Paytm Music Soundbox', type: 'hybrid', description: 'Doubles as a Bluetooth speaker to play music while receiving alerts.', features: ['Voice Overlay', 'Bluetooth Streaming', '10W Speaker'], imageUrl: 'https://assetscdn1.paytm.com/images/catalog/product/F/FU/FULSOUNDBOX-3-0OCL-870346A11513D0/1686318011922_1085.jpg' },
      { name: 'Paytm Pocket Soundbox', type: 'pocket', description: 'Highly portable card-sized device for mobile merchants.', features: ['In-built Torch', '5-day Battery', 'Pocket-sized'], imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=300&q=80' },
      { name: 'Paytm Card Soundbox', type: 'pos', description: '2-in-1 device combining audio alerts with NFC card payments.', features: ['Tap and Pay (up to ₹5000)', 'LCD Display', 'Audio Alerts'], imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&q=80' }
    ],
    businessModel: {
      coreStrategy: ['Hardware subscription to offset costs.', 'Robust merchant lending pipeline.'],
      primaryRevenue: ['Monthly rental fee.', 'Transaction MDR (on credit/wallets).'],
      ecosystemPlay: ['Hooks merchants into the Paytm for Business app.', 'Pushes Paytm wallet & post-paid.'],
      lendingFocus: ['High lending focus.', 'Major revenue driver is loan underwriting based on soundbox transaction history.'],
      howTheyMakeMoney: ['Subscription fees for Soundboxes.', 'MDR on transactions.', 'Lending margins.'],
      profitStrategy: ['Achieve operating profitability by scaling high-margin lending products.', 'Recurring hardware subscription fees.'],
      targetAudience: 'Tier 1 to Tier 3 kirana stores, micro-merchants, and organized retail.',
      tierMarketCapture: 'Extremely strong in Tier 1 and Tier 2 cities; expanding aggressively into Tier 3+ via low-cost variants.',
      upiSponsorBanks: ['State Bank of India', 'Axis Bank', 'HDFC Bank', 'YES Bank'],
      lendingPartners: ['DMI Finance', 'L&T Finance', 'Aditya Birla Finance', 'Piramal Capital', 'Tata Capital'],
    },
    hardwareDetails: {
      processor: 'MediaTek / Custom IoT SoC',
      speakerOutput: '2W to 3W RMS Audio',
      batteryCapacity: '2000mAh Lithium-ion',
      chargingPort: 'USB Type-C (5V/1A or 5V/2A)',
      dimensions: 'Approx 130 x 85 x 60 mm',
      weight: '~150g to 200g',
      networkSupport: '4G LTE (eSIM + Physical SIM slot), Wi-Fi on advanced models',
      display: 'LED Indicators, optional LCD for Music & Card models',
      additionalFeatures: ['Bluetooth configuration', 'NFC on premium models', 'Multi-language voice prompts']
    },
    financialDetails: {
      latestRevenue: '₹7,990 Cr (FY 2023 Consolidated)',
      profitabilityStatus: 'Operating positive (EBITDA before ESOPs positive)',
      revenueBreakdown: [
        'Hardware Rental: Recurring ₹125/month from millions of devices.',
        'MDR Payments: Margin from credit cards and wallet usage.',
        'Merchant Loans: Earning 2.5% to 4% take rate on short-term merchant loans underwritten by partners.'
      ],
      hardwareUnitEconomics: ['Cost to manufacture ~₹1000-1500.', 'Upfront fee of ₹299 partially covers initial cost.', 'Rental of ₹125/month breaks even in 8-12 months.', 'Pure profit thereafter.'],
      lendingMechanism: ['Uses transaction data to pre-approve loans.', 'Daily loan deductions are processed before the daily settlement to the merchant.'],
      approxTransactionVolume: '~$150B+ Annual TPV'
    },
    keyTakeaway: 'The undisputed pioneer. Moved from just facilitating transactions to monetizing hardware and lending.',
  },
  {
    id: 'phonepe',
    name: 'PhonePe',
    color: '#5f259f',
    lightColor: '#F3E8FF',
    marketShare: 36,
    deploymentCount: '9.19M',
    logoLetter: 'Ph',
    features: {
      setupFee: '₹1 / ₹299 (varies)',
      monthlyRental: '₹49 - ₹125',
      batteryLife: 'Up to 4 days',
      connectivity: '4G',
      languages: 11,
      highlight: 'Aggressive pricing and rapid on-ground deployment via massive field force.',
    },
    devices: [
      { name: 'SmartSpeaker 2.0', type: 'soundbox', description: 'Next-gen audio device with extended battery and fast charging.', features: ['4G Connectivity', '21 Languages', 'Fast Charging (75 mins)'], imageUrl: 'https://images.unsplash.com/photo-1589003071536-467f8e81d77a?auto=format&fit=crop&w=300&q=80' },
      { name: 'PhonePe POS', type: 'pos', description: 'Android-based POS for cards and UPI.', features: ['Touchscreen', 'In-built Printer', 'PCI-PTS 6 Certified'], imageUrl: 'https://images.unsplash.com/photo-1556742044-3c52d4e8e05c?auto=format&fit=crop&w=300&q=80' },
      { name: 'Smart Pod', type: 'hybrid', description: 'All-in-one payment device supporting biometric authentication.', features: ['Fingerprint/Face Scan', 'One-click Checkouts', 'RBI Approved Biometrics'], imageUrl: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=300&q=80' }
    ],
    businessModel: {
      coreStrategy: ['Market share acquisition over immediate hardware profit.', 'Subsidized hardware.'],
      primaryRevenue: ['Cross-selling insurance and wealth management.', 'Capturing total offline retail footprint.'],
      ecosystemPlay: ['Leveraging its #1 position in consumer UPI to force merchant adoption.'],
      lendingFocus: ['Growing lending focus.', 'Using the hardware footprint to enter the merchant lending space heavily.'],
      howTheyMakeMoney: ['Commissions on mutual funds, insurance, bill payments.', 'Merchant transaction MDR.'],
      profitStrategy: ['Massive market share acquisition.', 'Cross-selling high-margin financial services and insurance.'],
      targetAudience: 'Pan-India retail footprint, from roadside tapris to large supermarkets.',
      tierMarketCapture: 'Dominant across Tier 2, Tier 3, and rural areas due to massive on-ground field force.',
      upiSponsorBanks: ['YES Bank', 'ICICI Bank', 'Axis Bank', 'HDFC Bank'],
      lendingPartners: ['L&T Finance', 'Muthoot Finance', 'DMI Finance', 'Tata Capital'],
    },
    hardwareDetails: {
      processor: 'Custom Embedded SoC',
      speakerOutput: '2W High-fidelity speaker',
      batteryCapacity: '1500mAh - 2000mAh',
      chargingPort: 'USB Type-C',
      dimensions: 'Compact, varied by latest v2/v3 iterations',
      weight: '~160g',
      networkSupport: '4G LTE (Global Auto-switching SIM card)',
      additionalFeatures: ['Offline voice support caching', 'Heavy-duty rugged casing for Indian environments']
    },
    financialDetails: {
      latestRevenue: '₹2,914 Cr (FY 2023)',
      profitabilityStatus: 'Loss-making (investing in market expansion & new categories like insurance/broking)',
      revenueBreakdown: [
        'Consumer App Ecosystem: Mobile recharges, bill payments commissions.',
        'Financial Services: Insurance distribution, wealth management mutual funds.',
        'Merchant Ecosystem: Soundbox monthly rental (though highly subsidized for many).'
      ],
      hardwareUnitEconomics: ['Willing to take a loss/extended breakeven on the hardware unit.', 'Setup is often waived (₹1).', 'Rental drops to ₹49 to aggressively capture the counter space from Paytm.'],
      lendingMechanism: ['Ramping up lending.', 'The primary goal of the speaker is defensive: keep the merchant engaged in the PhonePe Business app.', 'Eventually cross-sell loans and insurance.'],
      approxTransactionVolume: '₹11 Lakh Crores Quarterly TPV (Q4 2021)'
    },
    keyTakeaway: 'Aggressive challenger using deep pockets to commoditize the hardware and capture the offline footprint.',
  },
  {
    id: 'bharatpe',
    name: 'BharatPe',
    color: '#00D1FF',
    lightColor: '#E0FAFF',
    marketShare: 4,
    deploymentCount: '0.9M',
    logoLetter: 'B',
    features: {
      setupFee: 'Waived on conditions',
      monthlyRental: 'Daily deduction (₹4-5)',
      batteryLife: 'Up to 5 days',
      connectivity: '4G GPRS',
      languages: 8,
      highlight: 'Lifetime free models based on taking loans or specific transaction volumes.',
    },
    devices: [
      { name: 'BharatPe Speaker', type: 'soundbox', description: 'Standard 4G voice alert device for instant notifications.', features: ['4G Connectivity', '10 Languages', 'Transaction Replay Button'], imageUrl: 'https://images.unsplash.com/photo-1589003071536-467f8e81d77a?auto=format&fit=crop&w=300&q=80' },
      { name: 'BharatPe One', type: 'pos', description: 'All-in-one Android POS with touchscreen, card swipe, and audio.', features: ['HD Touchscreen', 'Card Tap/Insert', 'Wi-Fi & 4G'], imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&q=80' },
      { name: 'BharatPe Swipe', type: 'pos', description: 'Dedicated machine for card and static QR payments.', features: ['Card Processing', 'Paper Receipts', 'Long Battery Life'], imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=300&q=80' }
    ],
    businessModel: {
      coreStrategy: ['Pure lending play.', 'The soundbox is merely a tool for auto-recovery of loans.'],
      primaryRevenue: ['Interest income from merchant loans.'],
      ecosystemPlay: ['Unified QR and daily settlements to build trust.', 'Culminating in the "BharatPe Club".'],
      lendingFocus: ['Extremely high lending focus.', 'If a merchant takes a loan, device cost is absorbed to guarantee daily repayment sweeps.'],
      howTheyMakeMoney: ['Interest on loans given to merchants.', 'Collected automatically via daily QR flow.'],
      profitStrategy: ['Loss-leader hardware subsidizes high-yield unsecured merchant cash advances.'],
      targetAudience: 'Mid-sized shop owners, electronics stores, and merchants with higher ticket sizes needing credit.',
      tierMarketCapture: 'Strongest in Tier 1 and Tier 2 commercial hubs where working capital demand is highest.',
      upiSponsorBanks: ['ICICI Bank', 'YES Bank', 'Axis Bank'],
      lendingPartners: ['L&T Finance', 'IIFL Finance', 'Northern Arc', 'Liquiloans (P2P)']
    },
    hardwareDetails: {
      processor: 'Low-power ARM variant',
      speakerOutput: '2W Audio',
      batteryCapacity: '2000mAh',
      chargingPort: 'Micro-USB / Type-C (newer models)',
      dimensions: 'Standard wedge shape',
      weight: '~140g',
      networkSupport: '4G LTE & GPRS fallback',
      display: 'LED panel for battery and connectivity status',
      additionalFeatures: ['Integrated with BharatPe 0% MDR QR', 'Loan status voice updates']
    },
    financialDetails: {
      latestRevenue: '₹904 Cr (FY 2023 Operating Revenue)',
      profitabilityStatus: 'Loss-making (focusing on reducing burn, path to profitability by FY25)',
      revenueBreakdown: [
        'Lending (Primary): Significant portion of revenue from merchant cash advances and business loans.',
        'Swipe/POS devices: Rental and MDR on card machines (BharatSwipe).',
        'Speaker rentals: Daily deductions for non-loan merchants.'
      ],
      hardwareUnitEconomics: ['The unit is a loss-leader.', 'Cost of device (~₹1200) is easily recovered if the merchant takes a ₹1 Lakh loan at 2% monthly interest.', 'The box ensures the daily EMI of ₹400 is swept from the QR payments before the merchant sees the money.'],
      lendingMechanism: ['The Soundbox is effectively a collection agent.', 'Loans are given entirely based on the QR flow.', 'The soundbox guarantees the collection hook is physically present on the counter.'],
      approxTransactionVolume: '~$25B+ Annual TPV'
    },
    keyTakeaway: 'Brilliant model where the soundbox acts as an EMI collection agent for their core lending business.',
  },
  {
    id: 'gpay',
    name: 'Google Pay',
    color: '#1A73E8',
    lightColor: '#E8F0FE',
    marketShare: 1,
    deploymentCount: '0.2M',
    logoLetter: 'G',
    features: {
      setupFee: 'Varies / ₹299',
      monthlyRental: '₹125',
      batteryLife: 'Up to 3-4 days',
      connectivity: '4G',
      languages: 7,
      highlight: 'Piloting its own white-labeled "Soundpod" in North India since late 2025; specific deployment volumes not publicly disclosed.',
    },
    devices: [
      { name: 'GPay Soundbox', type: 'soundbox', description: 'Standard audio device integrated with Google ecosystem.', features: ['Google Assistant Integration', '4G Connectivity', 'Multiple Languages'], imageUrl: 'https://images.unsplash.com/photo-1589003071536-467f8e81d77a?auto=format&fit=crop&w=300&q=80' }
    ],
    businessModel: {
      coreStrategy: ['Defending UPI market share.', 'Ensuring brand presence at merchant counters.'],
      primaryRevenue: ['Protecting transaction volume.', 'Ecosystem engagement.'],
      ecosystemPlay: ['Driving adoption of GPay for Business.', 'Merchant insights.'],
      lendingFocus: ['Growing lending focus.', 'Partnering with banks to offer pre-approved merchant loans.'],
      howTheyMakeMoney: ['MDR on non-UPI transactions.', 'Lead generation fees from lending partners.'],
      profitStrategy: ['Leverage massive consumer user base to lower merchant acquisition costs.', 'Monetize via lending partnerships.'],
      targetAudience: 'Urban merchants and existing Google Pay business users.',
      tierMarketCapture: 'Predominantly Tier 1 and Tier 2 cities with high smartphone penetration.',
      upiSponsorBanks: ['ICICI Bank', 'HDFC Bank', 'Axis Bank', 'State Bank of India'],
      lendingPartners: ['DMI Finance', 'L&T Finance', 'Federal Bank']
    },
    hardwareDetails: {
      processor: 'Standard IoT SoC',
      speakerOutput: '2W Audio',
      batteryCapacity: '2000mAh',
      chargingPort: 'USB Type-C',
      dimensions: 'Standard compact',
      weight: '~150g',
      networkSupport: '4G LTE',
      display: 'LED Indicators',
      additionalFeatures: ['Google Assistant integration for voice notifications']
    },
    financialDetails: {
      latestRevenue: 'N/A (Part of Google India)',
      profitabilityStatus: 'Investing heavily in hardware subsidies',
      revenueBreakdown: [
        'Lending Commissions: Referral fees from banking partners.',
        'Platform Engagement: Indirect revenue from maintaining UPI dominance.'
      ],
      hardwareUnitEconomics: ['Subsidized to compete with PhonePe and Paytm.', 'Focus is not on hardware profit.'],
      lendingMechanism: ['Acts as a marketplace matching merchants with lending partners like DMI Finance.', 'Based on transaction data.'],
      approxTransactionVolume: '~$500B+ Annual TPV (overall UPI)'
    },
    keyTakeaway: 'Late entrant but has massive distribution power and brand trust to quickly capture counter space.',
  },
  {
    id: 'others',
    name: 'Banks & Others',
    color: '#828282',
    lightColor: '#F3F4F6',
    marketShare: 1,
    deploymentCount: '0.1M',
    logoLetter: 'O',
    features: {
      setupFee: 'Premium / Free with current A/C',
      monthlyRental: 'Often bundled',
      batteryLife: 'Variable',
      connectivity: '4G / POS combined',
      languages: 4,
      highlight: 'Traditional banks offering smart-hub ecosystem to prevent merchant churn.',
    },
    devices: [
      { name: 'Standard POS Machines', type: 'pos', description: 'Traditional heavy-duty EDC machines provided by banks.', features: ['Card Swipe/Insert', 'Paper Receipts', 'Secure Processing'] },
      { name: 'White-labeled Soundboxes', type: 'soundbox', description: 'Generic OEM audio devices branded by specific banks.', features: ['Audio Alerts', 'Direct Bank Settlement', 'LED Indicators'] }
    ],
    businessModel: {
      coreStrategy: ['Defensive play to prevent fintechs from taking over their merchant deposit accounts.'],
      primaryRevenue: ['CASA (Current Account Savings Account) float.', 'Traditional banking fees.'],
      ecosystemPlay: ['Integrating soundbox with heavy-duty POS machines and trade finance.'],
      lendingFocus: ['Traditional MSME loans rather than sachet-sized daily loans.'],
      howTheyMakeMoney: ['Float income from CASA deposits.', 'Transaction fees on associated banking services.'],
      profitStrategy: ['Retention of low-cost deposits.', 'Lent out at traditional banking rates.'],
      targetAudience: 'Established retail chains, high-value merchants, and current account holders.',
      tierMarketCapture: 'Concentrated in Tier 1 and premium Tier 2 markets where traditional banking relationships are strong.',
      upiSponsorBanks: ['In-house Bank Infrastructure', 'Partner Public Sector Banks', 'Partner Private Sector Banks'],
      lendingPartners: ['In-house Credit Operations', 'Affiliated NBFCs']
    },
    hardwareDetails: {
      processor: 'Generic OEM solutions',
      speakerOutput: '1.5W to 2W',
      batteryCapacity: '1500mAh to 2600mAh',
      chargingPort: 'Micro-USB / Type-C',
      dimensions: 'Variable depending on OEM',
      weight: '150g - 250g',
      networkSupport: '4G LTE / Wi-Fi combinations',
      display: 'LED Indicators',
      additionalFeatures: ['Direct bank settlement notifications', 'White-labeled designs']
    },
    financialDetails: {
      latestRevenue: 'N/A (Bundled into overall banking revenue)',
      profitabilityStatus: 'Profitable at branch level due to CASA deposits',
      revenueBreakdown: [
        'CASA Float: Interest earned on the zero-interest current accounts where settlements land.',
        'Banking Fees: Transaction fees, POS rental fees, minimum balance penalties.',
        'Traditional Lending: Secured working capital and MSME term loans.'
      ],
      hardwareUnitEconomics: ['No need to profit on the device.', 'Banks absorb the ₹1500 cost as a customer acquisition or retention cost.', 'Keeps the high-balance current account from moving to Paytm/PhonePe.'],
      lendingMechanism: ['Underwriting is based on traditional banking history and compliance, not just daily QR flow.', 'Loans are larger, slower, but defensively priced.'],
      approxTransactionVolume: 'Varies by bank (e.g., hundreds of billions annually for top banks)'
    },
    keyTakeaway: 'Late to the party, but leveraging massive existing account bases to distribute bundled hardware.',
  },
];
