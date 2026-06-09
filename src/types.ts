export interface Features {
  setupFee: string;
  monthlyRental: string;
  batteryLife: string;
  connectivity: string;
  languages: number;
  highlight: string;
}

export interface Device {
  name: string;
  type: 'soundbox' | 'pos' | 'hybrid' | 'pocket';
  description: string;
  features: string[];
  imageUrl?: string;
}


export interface BusinessModel {
  coreStrategy: string[];
  primaryRevenue: string[];
  ecosystemPlay: string[];
  lendingFocus: string[];
  howTheyMakeMoney: string[];
  profitStrategy: string[];
  targetAudience: string;
  tierMarketCapture: string;
  upiSponsorBanks?: string[];
  lendingPartners?: string[];
}

export interface HardwareSpecs {
  processor: string;
  speakerOutput: string;
  batteryCapacity: string;
  chargingPort: string;
  dimensions: string;
  weight: string;
  networkSupport: string;
  display?: string;
  additionalFeatures: string[];
}

export interface Financials {
  latestRevenue: string;
  profitabilityStatus: string;
  revenueBreakdown: string[];
  hardwareUnitEconomics: string[];
  lendingMechanism: string[];
  approxTransactionVolume: string;
}

export interface Provider {
  id: string;
  name: string;
  color: string;
  lightColor: string;
  marketShare: number; // percentage
  deploymentCount: string; // e.g. "8M+"
  logoLetter: string;
  features: Features;
  devices: Device[];
  businessModel: BusinessModel;
  hardwareDetails: HardwareSpecs;
  financialDetails: Financials;
  keyTakeaway: string;
}

export type ViewState = 'overview' | 'features' | 'business-models' | 'sources' | 'devices' | 'strategy' | 'calculator' | 'upi-ecosystem' | 'meet-team' | 'pwc-insights' | 'soundbox-wars';
