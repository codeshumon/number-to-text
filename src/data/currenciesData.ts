import { CountryCode, CurrencyConfig } from "../types";

export const CURRENCY_CONFIG: Record<CountryCode, CurrencyConfig> = {
  US: {
    major: 'Dollar',
    majorPlural: 'Dollars',
    minor: 'Cent',
    minorPlural: 'Cents',
    conjunction: 'and',
    suffix: 'Only'
  },
  GB: {
    major: 'Pound',
    majorPlural: 'Pounds',
    minor: 'Pence',
    minorPlural: 'Pence',
    conjunction: 'and',
    suffix: 'Only'
  },
  BD: {
    major: 'Taka',
    majorPlural: 'Taka',
    minor: 'Poisha',
    minorPlural: 'Poisha',
    conjunction: 'and',
    suffix: 'Only'
  },
  IN: {
    major: 'Rupee',
    majorPlural: 'Rupees',
    minor: 'Paisa',
    minorPlural: 'Paise',
    conjunction: 'and',
    suffix: 'Only'
  },
  AE: {
    major: 'Dirham',
    majorPlural: 'Dirhams',
    minor: 'Fils',
    minorPlural: 'Fils',
    conjunction: 'and',
    suffix: 'Only'
  },
  MY: {
    major: 'Ringgit',
    majorPlural: 'Ringgit',
    minor: 'Sen',
    minorPlural: 'Sen',
    conjunction: 'and',
    suffix: 'Only'
  },
  PK: {
    major: 'Rupee',
    majorPlural: 'Rupees',
    minor: 'Paisa',
    minorPlural: 'Paise',
    conjunction: 'and',
    suffix: 'Only'
  },
  CA: {
    major: 'Dollar',
    majorPlural: 'Dollars',
    minor: 'Cent',
    minorPlural: 'Cents',
    conjunction: 'and',
    suffix: 'Only'
  },
  QA: {
    major: 'Riyal',
    majorPlural: 'Riyals',
    minor: 'Dirham',
    minorPlural: 'Dirhams',
    conjunction: 'and',
    suffix: 'Only'
  },
  SA: {
    major: 'Riyal',
    majorPlural: 'Riyals',
    minor: 'Halala',
    minorPlural: 'Halalas',
    conjunction: 'and',
    suffix: 'Only'
  }
} as const;