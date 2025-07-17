# number-to-words

# Convert Number to Words | Number to Words Converter Including Currency Format  ➡️🔠

Convert numbers to words with currency formatting for 130+ countries. Perfect for invoices, checks, and financial applications.

[![npm version](https://img.shields.io/npm/v/number-to-words)](https://www.npmjs.com/package/number-to-words)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## Table of Contents

- [Features ✨](#features-)
- [Installation 📦](#installation-)
- [Basic Usage 🔢](#basic-usage-)
- [Convert to Currency Words 💰](#convert-to-currency-words-)
- [Supported Countries 🌎](#supported-countries-)
- [API Reference 📚](#api-reference-)
- [Advanced Usage 🛠](#advanced-usage-)
- [TypeScript Support ✅](#typescript-support-)
- [Benchmarks ⚡](#benchmarks-)
- [Browser Compatibility 🌐](#browser-compatibility-)
- [Contributing 🤝](#contributing-)
- [License 📄](#license-)

---

## Features ✨

- 🔢 Convert numbers to words (e.g., `123` → "One Hundred Twenty Three")
- 💰 Currency formatting for 100+ countries
- 🔣 Supports both integer and decimal numbers
- 🔧 TypeScript and JavaScript compatible
- 📦 Lightweight (zero dependencies)
- 🌍 Supports negative and large numbers up to quadrillions

---

## Installation 📦

```bash
npm install number-to-words
# or
yarn add number-to-words



Basic Usage 🔢


Convert Numbers to Words

const { numberToWords } = require('number-to-words');

console.log(numberToWords(125.55));
// Output: "One Hundred Twenty Five and Point Five Five"

console.log(numberToWords(588532654484815));
// Output: "Five Hundred Eighty Eight Trillion Five Hundred Thirty Two Billion Six Hundred Fifty Four Million Four Hundred Eighty Four Thousand Eight Hundred Fifteen"



Convert to Currency Words 💰

const { numberToCurrencyWords } = require('number-to-words');

// US Dollars
console.log(numberToCurrencyWords(1234.56, 'US'));
// "One Thousand Two Hundred Thirty Four Dollars and Fifty Six Cents Only"

// British Pounds
console.log(numberToCurrencyWords(789.12, 'GB'));
// "Seven Hundred Eighty Nine Pounds and Twelve Pence Only"

// Indian Rupees
console.log(numberToCurrencyWords(4567.89, 'IN'));
// "Four Thousand Five Hundred Sixty Seven Rupees and Eighty Nine Paise Only"




API Reference 📚
numberToWords(num: number | string): string
Converts any number to its word representation.

Parameters:

num: Number or numeric string to convert

Returns: String representation of the number

numberToCurrencyWords(amount: number | string, countryCode: string = 'US'): string
Converts a monetary amount to words with appropriate currency formatting.

Parameters:

amount: Number or numeric string to convert

countryCode: ISO 3166-1 alpha-2 country code (default: 'US')

Returns: Currency-formatted string




Advanced Usage 🛠

Handling Negative Numbers

numberToCurrencyWords(-100.50, 'US');
// "Negative One Hundred Dollars and Fifty Cents Only"



Large Number Support

numberToWords(1000000000000000);
// "One Quadrillion"





🌍 Supported Countries
This package supports 130+ countries using ISO 3166-1 alpha-2 codes.

| Country                | Code | Country              | Code | Country        | Code |
| ---------------------- | ---- | -------------------- | ---- | -------------- | ---- |
| Afghanistan            | AF   | Albania              | AL   | Algeria        | DZ   |
| Angola                 | AO   | Argentina            | AR   | Armenia        | AM   |
| Australia              | AU   | Austria              | AT   | Azerbaijan     | AZ   |
| Bahrain                | BH   | Bangladesh           | BD   | Belarus        | BY   |
| Belgium                | BE   | Benin                | BJ   | Bolivia        | BO   |
| Bosnia and Herzegovina | BA   | Brazil               | BR   | Bulgaria       | BG   |
| Burkina Faso           | BF   | Cambodia             | KH   | Cameroon       | CM   |
| Canada                 | CA   | Chile                | CL   | China          | CN   |
| Colombia               | CO   | Costa Rica           | CR   | Croatia        | HR   |
| Cuba                   | CU   | Czech Republic       | CZ   | DR Congo       | CD   |
| Denmark                | DK   | Ecuador              | EC   | Egypt          | EG   |
| El Salvador            | SV   | Estonia              | EE   | Ethiopia       | ET   |
| Finland                | FI   | France               | FR   | Gabon          | GA   |
| Georgia                | GE   | Germany              | DE   | Ghana          | GH   |
| Greece                 | GR   | Guatemala            | GT   | Guinea         | GN   |
| Haiti                  | HT   | Honduras             | HN   | Hong Kong      | HK   |
| Hungary                | HU   | India                | IN   | Indonesia      | ID   |
| Iran                   | IR   | Iraq                 | IQ   | Ireland        | IE   |
| Israel                 | IL   | Italy                | IT   | Ivory Coast    | CI   |
| Japan                  | JP   | Jordan               | JO   | Kazakhstan     | KZ   |
| Kenya                  | KE   | Kuwait               | KW   | Kyrgyzstan     | KG   |
| Laos                   | LA   | Latvia               | LV   | Lebanon        | LB   |
| Libya                  | LY   | Lithuania            | LT   | Madagascar     | MG   |
| Malawi                 | MW   | Malaysia             | MY   | Mali           | ML   |
| Mexico                 | MX   | Moldova              | MD   | Morocco        | MA   |
| Mozambique             | MZ   | Myanmar              | MM   | Namibia        | NA   |
| Nepal                  | NP   | Netherlands          | NL   | New Zealand    | NZ   |
| Nicaragua              | NI   | Niger                | NE   | Nigeria        | NG   |
| North Macedonia        | MK   | Norway               | NO   | Oman           | OM   |
| Pakistan               | PK   | Palestine            | PS   | Panama         | PA   |
| Paraguay               | PY   | Peru                 | PE   | Philippines    | PH   |
| Poland                 | PL   | Portugal             | PT   | Qatar          | QA   |
| Romania                | RO   | Russia               | RU   | Rwanda         | RW   |
| Saudi Arabia           | SA   | Senegal              | SN   | Serbia         | RS   |
| Sierra Leone           | SL   | Singapore            | SG   | Slovakia       | SK   |
| Slovenia               | SI   | South Africa         | ZA   | South Korea    | KR   |
| South Sudan            | SS   | Spain                | ES   | Sri Lanka      | LK   |
| Sudan                  | SD   | Sweden               | SE   | Switzerland    | CH   |
| Syria                  | SY   | Tajikistan           | TJ   | Taiwan         | TW   |
| Tanzania               | TZ   | Thailand             | TH   | Tunisia        | TN   |
| Turkey                 | TR   | Turkmenistan         | TM   | Uganda         | UG   |
| Ukraine                | UA   | United Arab Emirates | AE   | United Kingdom | GB   |
| United States          | US   | Uruguay              | UY   | Uzbekistan     | UZ   |
| Venezuela              | VE   | Vietnam              | VN   | Yemen          | YE   |
| Zambia                 | ZM   | Zimbabwe             | ZW   |                |      |





TypeScript Support ✅
This package includes full TypeScript type definitions:

import { numberToWords, numberToCurrencyWords, CountryCode } from 'number-to-words';

const amount: string = numberToCurrencyWords(123.45, 'US' as CountryCode);


Benchmarks ⚡
✅ ~2 KB minified & gzipped
✅ Converts up to quadrillion-range numbers in <1ms
✅ Zero dependencies ensures lightning-fast startup


Browser Compatibility 🌐
This library is fully compatible with:

✅ Node.js (14+)
✅ All modern browsers
✅ Works with bundlers like Webpack, Vite, and Rollup
✅ Works in serverless functions and frontend apps


Contributing 🤝
Contributions are welcome! Please:

Fork the repository
Create a new branch
Submit an issue or feature request
Open a Pull Request


License 📄
MIT © codeshumon
See LICENSE for full details.
