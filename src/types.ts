export type CountryCode = 
  | 'US' | 'GB' | 'BD' | 'IN' | 'AE' 
  | 'MY' | 'PK' | 'CA' | 'QA' | 'SA'
  | 'AU' | 'AF' | 'AL' | 'DZ' | 'AO'
  | 'AR' | 'AM' | 'AT' | 'AZ' | 'BH'
  | 'BY' | 'BE' | 'BJ' | 'BO' | 'BA'
  | 'BR' | 'BG' | 'BF' | 'KH' | 'CM'
  | 'CL' | 'CN' | 'CO' | 'CR' | 'HR'
  | 'CU' | 'CZ' | 'CD' | 'DK' | 'EC'
  | 'EG' | 'SV' | 'EE' | 'ET' | 'FI'
  | 'FR' | 'GA' | 'GE' | 'DE' | 'GH'
  | 'GR' | 'GT' | 'GN' | 'HT' | 'HN'
  | 'HK' | 'HU' | 'ID' | 'IR' | 'IQ'
  | 'IE' | 'IL' | 'IT' | 'CI' | 'JP'
  | 'JO' | 'KZ' | 'KE' | 'KW' | 'KG'
  | 'LA' | 'LV' | 'LB' | 'LY' | 'LT'
  | 'MG' | 'MW' | 'ML' | 'MX' | 'MD'
  | 'MA' | 'MZ' | 'MM' | 'NA' | 'NP'
  | 'NL' | 'NZ' | 'NI' | 'NE' | 'NG'
  | 'MK' | 'NO' | 'OM' | 'PS' | 'PA'
  | 'PY' | 'PE' | 'PH' | 'PL' | 'PT'
  | 'RO' | 'RU' | 'RW' | 'SN' | 'RS'
  | 'SL' | 'SG' | 'SK' | 'SI' | 'ZA'
  | 'KR' | 'SS' | 'ES' | 'LK' | 'SD'
  | 'SE' | 'CH' | 'SY' | 'TJ' | 'TW'
  | 'TZ' | 'TH' | 'TN' | 'TR' | 'TM'
  | 'UG' | 'UA' | 'UY' | 'UZ' | 'VE'
  | 'VN' | 'YE' | 'ZM' | 'ZW';

export interface CurrencyConfig {
  major: string;
  majorPlural: string;
  minor: string;
  minorPlural: string;
  conjunction: string;
  suffix: string;
}