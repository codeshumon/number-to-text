export type CountryCode = 
  | 'US' | 'GB' | 'BD' | 'IN' | 'AE' 
  | 'MY' | 'PK' | 'CA' | 'QA' | 'SA'; 

export interface CurrencyConfig {
  major: string;
  majorPlural: string;
  minor: string;
  minorPlural: string;
  conjunction: string;
  suffix: string;
}