<h1 align="center">number-to-words</h1>

<h1 align="center">Convert Number to Words | Number to Words Converter Including Currency Format ➡️🔠</h1>

<p align="center">
Convert numbers to words with currency formatting for 130+ countries. Perfect for invoices, checks, and financial applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/number-to-words">
    <img src="https://img.shields.io/npm/v/number-to-words" alt="npm version">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
  </a>
</p>

---

## Table of Contents

<ul>
  <li><a href="#features-">Features ✨</a></li>
  <li><a href="#installation-">Installation 📦</a></li>
  <li><a href="#basic-usage-">Basic Usage 🔢</a></li>
  <li><a href="#convert-to-currency-words-">Convert to Currency Words 💰</a></li>
  <li><a href="#supported-countries-">Supported Countries 🌎</a></li>
  <li><a href="#api-reference-">API Reference 📚</a></li>
  <li><a href="#advanced-usage-">Advanced Usage 🛠️</a></li>
  <li><a href="#typescript-support-">TypeScript Support ✅</a></li>
  <li><a href="#benchmarks-">Benchmarks ⚡</a></li>
  <li><a href="#browser-compatibility-">Browser Compatibility 🌐</a></li>
  <li><a href="#contributing-">Contributing 🤝</a></li>
  <li><a href="#license-">License 📄</a></li>
</ul>

---

## Features ✨

<ul>
  <li>🔢 Convert numbers to words (e.g., <code>123</code> → "One Hundred Twenty Three")</li>
  <li>💰 Currency formatting for 100+ countries</li>
  <li>🔣 Supports both integer and decimal numbers</li>
  <li>🔧 TypeScript and JavaScript compatible</li>
  <li>📦 Lightweight (zero dependencies)</li>
  <li>🌍 Supports negative and large numbers up to quadrillions</li>
</ul>

---

## Installation 📦

<pre><code>npm install number-to-words
# or
yarn add number-to-words
</code></pre>

---

## Basic Usage 🔢

### Convert Numbers to Words

<pre><code>const { numberToWords } = require('number-to-words');

console.log(numberToWords(125.55));
// Output: "One Hundred Twenty Five and Point Five Five"

console.log(numberToWords(588532654484815));
// Output: "Five Hundred Eighty Eight Trillion Five Hundred Thirty Two Billion Six Hundred Fifty Four Million Four Hundred Eighty Four Thousand Eight Hundred Fifteen"
</code></pre>

---

## Convert to Currency Words 💰

<pre><code>const { numberToCurrencyWords } = require('number-to-words');

// US Dollars
console.log(numberToCurrencyWords(1234.56, 'US'));
// "One Thousand Two Hundred Thirty Four Dollars and Fifty Six Cents Only"

// British Pounds
console.log(numberToCurrencyWords(789.12, 'GB'));
// "Seven Hundred Eighty Nine Pounds and Twelve Pence Only"

// Indian Rupees
console.log(numberToCurrencyWords(4567.89, 'IN'));
// "Four Thousand Five Hundred Sixty Seven Rupees and Eighty Nine Paise Only"
</code></pre>

---

## API Reference 📚

### <code>numberToWords(num: number | string): string</code>
<p>Converts any number to its word representation.</p>
<p><strong>Parameters:</strong></p>
<ul>
  <li><code>num</code>: Number or numeric string to convert</li>
</ul>
<p><strong>Returns:</strong> String representation of the number</p>

### <code>numberToCurrencyWords(amount: number | string, countryCode: string = 'US'): string</code>
<p>Converts a monetary amount to words with appropriate currency formatting.</p>
<p><strong>Parameters:</strong></p>
<ul>
  <li><code>amount</code>: Number or numeric string to convert</li>
  <li><code>countryCode</code>: ISO 3166-1 alpha-2 country code (default: 'US')</li>
</ul>
<p><strong>Returns:</strong> Currency-formatted string</p>

---

## Advanced Usage 🛠️

### Handling Negative Numbers
<pre><code>numberToCurrencyWords(-100.50, 'US');
// "Negative One Hundred Dollars and Fifty Cents Only"
</code></pre>

### Large Number Support
<pre><code>numberToWords(1000000000000000);
// "One Quadrillion"
</code></pre>

---

## 🌍 Supported Countries
<p>This package supports 130+ countries using ISO 3166-1 alpha-2 codes.</p>
<table>
  <thead>
    <tr>
      <th>Country</th>
      <th>Code</th>
      <th>Country</th>
      <th>Code</th>
      <th>Country</th>
      <th>Code</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Afghanistan</td><td>AF</td><td>Albania</td><td>AL</td><td>Algeria</td><td>DZ</td></tr>
    <tr><td>Angola</td><td>AO</td><td>Argentina</td><td>AR</td><td>Armenia</td><td>AM</td></tr>
    <tr><td>Australia</td><td>AU</td><td>Austria</td><td>AT</td><td>Azerbaijan</td><td>AZ</td></tr>
    <tr><td>Bahrain</td><td>BH</td><td>Bangladesh</td><td>BD</td><td>Belarus</td><td>BY</td></tr>
    <tr><td>Belgium</td><td>BE</td><td>Benin</td><td>BJ</td><td>Bolivia</td><td>BO</td></tr>
    <tr><td>Bosnia and Herzegovina</td><td>BA</td><td>Brazil</td><td>BR</td><td>Bulgaria</td><td>BG</td></tr>
    <tr><td>Burkina Faso</td><td>BF</td><td>Cambodia</td><td>KH</td><td>Cameroon</td><td>CM</td></tr>
    <tr><td>Canada</td><td>CA</td><td>Chile</td><td>CL</td><td>China</td><td>CN</td></tr>
    <tr><td>Colombia</td><td>CO</td><td>Costa Rica</td><td>CR</td><td>Croatia</td><td>HR</td></tr>
    <tr><td>Cuba</td><td>CU</td><td>Czech Republic</td><td>CZ</td><td>DR Congo</td><td>CD</td></tr>
    <tr><td>Denmark</td><td>DK</td><td>Ecuador</td><td>EC</td><td>Egypt</td><td>EG</td></tr>
    <tr><td>El Salvador</td><td>SV</td><td>Estonia</td><td>EE</td><td>Ethiopia</td><td>ET</td></tr>
    <tr><td>Finland</td><td>FI</td><td>France</td><td>FR</td><td>Gabon</td><td>GA</td></tr>
    <tr><td>Georgia</td><td>GE</td><td>Germany</td><td>DE</td><td>Ghana</td><td>GH</td></tr>
    <tr><td>Greece</td><td>GR</td><td>Guatemala</td><td>GT</td><td>Guinea</td><td>GN</td></tr>
    <tr><td>Haiti</td><td>HT</td><td>Honduras</td><td>HN</td><td>Hong Kong</td><td>HK</td></tr>
    <tr><td>Hungary</td><td>HU</td><td>India</td><td>IN</td><td>Indonesia</td><td>ID</td></tr>
    <tr><td>Iran</td><td>IR</td><td>Iraq</td><td>IQ</td><td>Ireland</td><td>IE</td></tr>
    <tr><td>Israel</td><td>IL</td><td>Italy</td><td>IT</td><td>Ivory Coast</td><td>CI</td></tr>
    <tr><td>Japan</td><td>JP</td><td>Jordan</td><td>JO</td><td>Kazakhstan</td><td>KZ</td></tr>
    <tr><td>Kenya</td><td>KE</td><td>Kuwait</td><td>KW</td><td>Kyrgyzstan</td><td>KG</td></tr>
    <tr><td>Laos</td><td>LA</td><td>Latvia</td><td>LV</td><td>Lebanon</td><td>LB</td></tr>
    <tr><td>Libya</td><td>LY</td><td>Lithuania</td><td>LT</td><td>Madagascar</td><td>MG</td></tr>
    <tr><td>Malawi</td><td>MW</td><td>Malaysia</td><td>MY</td><td>Mali</td><td>ML</td></tr>
    <tr><td>Mexico</td><td>MX</td><td>Moldova</td><td>MD</td><td>Morocco</td><td>MA</td></tr>
    <tr><td>Mozambique</td><td>MZ</td><td>Myanmar</td><td>MM</td><td>Namibia</td><td>NA</td></tr>
    <tr><td>Nepal</td><td>NP</td><td>Netherlands</td><td>NL</td><td>New Zealand</td><td>NZ</td></tr>
    <tr><td>Nicaragua</td><td>NI</td><td>Niger</td><td>NE</td><td>Nigeria</td><td>NG</td></tr>
    <tr><td>North Macedonia</td><td>MK</td><td>Norway</td><td>NO</td><td>Oman</td><td>OM</td></tr>
    <tr><td>Pakistan</td><td>PK</td><td>Palestine</td><td>PS</td><td>Panama</td><td>PA</td></tr>
    <tr><td>Paraguay</td><td>PY</td><td>Peru</td><td>PE</td><td>Philippines</td><td>PH</td></tr>
    <tr><td>Poland</td><td>PL</td><td>Portugal</td><td>PT</td><td>Qatar</td><td>QA</td></tr>
    <tr><td>Romania</td><td>RO</td><td>Russia</td><td>RU</td><td>Rwanda</td><td>RW</td></tr>
    <tr><td>Saudi Arabia</td><td>SA</td><td>Senegal</td><td>SN</td><td>Serbia</td><td>RS</td></tr>
    <tr><td>Sierra Leone</td><td>SL</td><td>Singapore</td><td>SG</td><td>Slovakia</td><td>SK</td></tr>
    <tr><td>Slovenia</td><td>SI</td><td>South Africa</td><td>ZA</td><td>South Korea</td><td>KR</td></tr>
    <tr><td>South Sudan</td><td>SS</td><td>Spain</td><td>ES</td><td>Sri Lanka</td><td>LK</td></tr>
    <tr><td>Sudan</td><td>SD</td><td>Sweden</td><td>SE</td><td>Switzerland</td><td>CH</td></tr>
    <tr><td>Syria</td><td>SY</td><td>Tajikistan</td><td>TJ</td><td>Taiwan</td><td>TW</td></tr>
    <tr><td>Tanzania</td><td>TZ</td><td>Thailand</td><td>TH</td><td>Tunisia</td><td>TN</td></tr>
    <tr><td>Turkey</td><td>TR</td><td>Turkmenistan</td><td>TM</td><td>Uganda</td><td>UG</td></tr>
    <tr><td>Ukraine</td><td>UA</td><td>United Arab Emirates</td><td>AE</td><td>United Kingdom</td><td>GB</td></tr>
    <tr><td>United States</td><td>US</td><td>Uruguay</td><td>UY</td><td>Uzbekistan</td><td>UZ</td></tr>
    <tr><td>Venezuela</td><td>VE</td><td>Vietnam</td><td>VN</td><td>Yemen</td><td>YE</td></tr>
    <tr><td>Zambia</td><td>ZM</td><td>Zimbabwe</td><td>ZW</td><td></td><td></td></tr>
  </tbody>
</table>

---

## TypeScript Support ✅
<p>This package includes full TypeScript type definitions:</p>
<pre><code>import { numberToWords, numberToCurrencyWords, CountryCode } from 'number-to-words';

const amount: string = numberToCurrencyWords(123.45, 'US' as CountryCode);
</code></pre>

---

## Benchmarks ⚡
<ul>
  <li>✅ ~2 KB minified & gzipped</li>
  <li>✅ Converts up to quadrillion-range numbers in &lt;1ms</li>
  <li>✅ Zero dependencies ensures lightning-fast startup</li>
</ul>

---

## Browser Compatibility 🌐
<p>This library is fully compatible with:</p>
<ul>
  <li>✅ Node.js (14+)</li>
  <li>✅ All modern browsers</li>
  <li>✅ Works with bundlers like Webpack, Vite, and Rollup</li>
  <li>✅ Works in serverless functions and frontend apps</li>
</ul>

---

## Contributing 🤝
<p>Contributions are welcome! Please:</p>
<ul>
  <li>Fork the repository</li>
  <li>Create a new branch</li>
  <li>Submit an issue or feature request</li>
  <li>Open a Pull Request</li>
</ul>

---

## License 📄
<p>MIT © codeshumon</p>
<p>See LICENSE for full details.</p>