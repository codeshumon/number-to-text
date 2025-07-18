<h1 align="center">@codeshumon/number-to-words</h1>

<h1 align="center">Convert Number to Words | Number to Words Converter Including Currency Format ➡️🔠</h1>

<p align="center">
Convert numbers to words with currency formatting for 130+ countries. Perfect for invoices, checks, and financial applications.
</p>

<p>
<a href="https://www.npmjs.com/package/@codeshumon/number-to-words">
<img src="https://img.shields.io/npm/v/@codeshumon/number-to-words.svg" alt="npm version">
</a>
<a href="https://opensource.org/licenses/MIT">
<img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
</a>
</p>

Table of Contents

<ul>
<li><a href="#features-">Features ✨</a></li>
<li><a href="#installation-">Installation 📦</a></li>
<li><a href="#basic-usage-">Basic Usage 🔢</a></li>
<li><a href="#advanced-usage-">Advanced Usage 🛠️</a></li>
<li><a href="#api-reference--options-">API Reference & Options 📚</a></li>
<li><a href="#supported-countries-">Supported Countries 🌎</a></li>
<li><a href="#typescript-support-">TypeScript Support ✅</a></li>
<li><a href="#benchmarks-">Benchmarks ⚡</a></li>
<li><a href="#browser-compatibility-">Browser Compatibility 🌐</a></li>
<li><a href="#contributing-">Contributing 🤝</a></li>
<li><a href="#license-">License 📄</a></li>
</ul>

Features ✨

<ul>
<li>🔢 Convert numbers to words (e.g., <code>123</code> → "One Hundred Twenty Three")</li>
<li>💰 Currency formatting for 130+ countries</li>
<li>🔣 Supports both integer and decimal numbers</li>
<li>🔧 TypeScript and JavaScript compatible</li>
<li>📦 Lightweight (zero dependencies)</li>
<li>🌍 Supports negative and large numbers up to Trillion</li>
</ul>

Installation 📦

<pre><code class="language-bash">npm install @codeshumon/number-to-words

or

yarn add @codeshumon/number-to-words
</code></pre>

Basic Usage 🔢

Convert Numbers to Words (Node.js CommonJS - main field)

<pre><code class="language-javascript">const { numberToWords } = require('@codeshumon/number-to-words');

console.log(numberToWords(125.55));
// Output: "One Hundred Twenty Five and Point Five Five"

console.log(numberToWords(588532654484815));
// Output: "Five Hundred Eighty Eight Trillion Five Hundred Thirty Two Billion Six Hundred Fifty Four Million Four Hundred Eighty Four Thousand Eight Hundred Fifteen"
</code></pre>

Convert Number to Currency Words 💰

<pre><code class="language-javascript">const { numberToCurrencyWords } = require('@codeshumon/number-to-words');

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

ES Module Usage (via module field)

<pre><code class="language-javascript">import { numberToWords, numberToCurrencyWords } from '@codeshumon/number-to-words';

console.log(numberToWords(2023));
// Output: "Two Thousand Twenty Three"

console.log(numberToCurrencyWords(2500.75, 'US'));
// Output: "Two Thousand Five Hundred Dollars and Seventy Five Cents Only"
</code></pre>

Browser Usage 🌐 (via CDN using browser field)

Use Directly in HTML

Include the script in your HTML:

<pre><code class="language-html">&lt;script src="https://unpkg.com/@codeshumon/number-to-words"&gt;&lt;/script&gt;
</code></pre>

Then, you can access the functions globally:

<pre><code class="language-javascript">const { numberToWords, numberToCurrencyWords } = window.NumberToWords;

console.log(numberToWords(999.99));
// Output: "Nine Hundred Ninety Nine and Point Nine Nine"

console.log(numberToCurrencyWords(999.99, 'US'));
// Output: "Nine Hundred Ninety Nine Dollars and Ninety Nine Cents Only"
</code></pre>

Advanced Usage 🛠️

Handling Negative Numbers

<pre><code class="language-javascript">numberToCurrencyWords(-100.50, 'US');
// "Negative One Hundred Dollars and Fifty Cents Only"
</code></pre>

Large Number Support

<pre><code class="language-javascript">numberToWords(1000000000000);
// "One Trillion"
</code></pre>

Advanced numberToWords Examples

<pre><code class="language-javascript">const { numberToWords } = require('@codeshumon/number-to-words');

console.log(numberToWords(652222225.52226));
// Output: "Six Hundred Fifty-two Million, Two Hundred Twenty-two Thousand, Two Hundred Twenty-five Point Five Two"

console.log(numberToWords('4322222225.52226', { noHypen: true }));
// Output: "Four Billion, Three Hundred Twenty Two Million, Two Hundred Twenty Two Thousand, Two Hundred Twenty Five Point Five Two"

console.log(numberToWords('4322222225.52226', { noComa: true }));
// Output: "Four Billion Three Hundred Twenty-two Million Two Hundred Twenty-two Thousand Two Hundred Twenty-five Point Five Two"

console.log(numberToWords(2522222225.52226, {isAnd : true }));
// Output: "Two Billion and Five Hundred Twenty-two Million and Two Hundred Twenty-two Thousand and Two Hundred Twenty-five Point Five Two"

console.log(numberToWords('9222222225.8226', {titleCase : true}));
// Output: "Nine Billion, Two Hundred Twenty-Two Million, Two Hundred Twenty-Two Thousand, Two Hundred Twenty-Five Point Eight Two"

console.log(numberToWords(4022222225.6226, { titleCase : true, isAnd : true, noHypen: true }));
// Output: "Four Billion and Twenty Two Million and Two Hundred Twenty Two Thousand and Two Hundred Twenty Five Point Six Two"
</code></pre>

Advanced numberToCurrencyWords Examples

<pre><code class="language-javascript">const { numberToCurrencyWords } = require('@codeshumon/number-to-words');

// Default (assuming 'US' if no currency provided or unrecognized)
console.log(numberToCurrencyWords('115255500015.58780'));
// Output: "One Hundred Fifteen Billion, Two Hundred Fifty-five Million, Five Hundred Thousand, Fifteen Dollars and Fifty-nine Cents only"

console.log(numberToCurrencyWords('5552111111115.2500', 'GB',));
// Output: "Five Trillion, Five Hundred Fifty-two Billion, One Hundred Eleven Million, One Hundred Eleven Thousand, One Hundred Fifteen Pounds and Twenty-five Pence only"

console.log(numberToCurrencyWords('5552111111115.5500', 'GB', {noHypen: true}));
// Output: "Five Trillion, Five Hundred Fifty Two Billion, One Hundred Eleven Million, One Hundred Eleven Thousand, One Hundred Fifteen Pounds and Fifty Five Pence only"

console.log(numberToCurrencyWords('5552111111115.5500', 'GB', {noComa: true}));
// Output: "Five Trillion Five Hundred Fifty-two Billion One Hundred Eleven Million One Hundred Eleven Thousand One Hundred Fifteen Pounds and Fifty-five Pence only"

console.log(numberToCurrencyWords(5552111111115.6500, 'GB', {isAnd : true }));
// Output: "Five Trillion and Five Hundred Fifty-two Billion and One Hundred Eleven Million and One Hundred Eleven Thousand and One Hundred Fifteen Pounds and Sixty-five Pence only"

console.log(numberToCurrencyWords(5552111111115.9500, 'GB', {titleCase : true}));
// Output: "Five Trillion, Five Hundred Fifty-Two Billion, One Hundred Eleven Million, One Hundred Eleven Thousand, One Hundred Fifteen Pounds and Ninety-Five Pence only"

console.log(numberToCurrencyWords(5552111111115.750, 'GB', { titleCase : true, isAnd : true, noHypen: true }));
// Output: "Five Trillion and Five Hundred Fifty Two Billion and One Hundred Eleven Million and One Hundred Eleven Thousand and One Hundred Fifteen Pounds and Seventy Five Pence only"
</code></pre>

ES Module Usage (via module field)

<pre><code class="language-javascript">import { numberToWords, numberToCurrencyWords } from '@codeshumon/number-to-words';

console.log(numberToWords(2023));
// Output: "Two Thousand Twenty Three"

console.log(numberToCurrencyWords(2500.75, 'US'));
// Output: "Two Thousand Five Hundred Dollars and Seventy Five Cents Only"

console.log(numberToWords(652222225.52226));
// Output: "Six Hundred Fifty-two Million, Two Hundred Twenty-two Thousand, Two Hundred Twenty-five Point Five Two"

console.log(numberToCurrencyWords('5552111111115.2500', 'GB',));
// Output: "Five Trillion, Five Hundred Fifty-two Billion, One Hundred Eleven Million, One Hundred Eleven Thousand, One Hundred Fifteen Pounds and Twenty-five Pence only"
</code></pre>

Browser Usage 🌐 (via CDN using browser field)

Use Directly in HTML

<p>Include the script in your HTML:</p>

<pre><code class="language-html">&lt;script src="https://unpkg.com/@codeshumon/number-to-words"&gt;&lt;/script&gt;
</code></pre>

<p>Then, you can access the functions globally:</p>

<pre><code class="language-javascript">const { numberToWords, numberToCurrencyWords } = window.NumberToWords;

console.log(numberToWords(999.99));
// Output: "Nine Hundred Ninety Nine and Point Nine Nine"

console.log(numberToCurrencyWords(999.99, 'US'));
// Output: "Nine Hundred Ninety Nine Dollars and Ninety Nine Cents Only"

console.log(numberToCurrencyWords('115255500015.58780'));
// Output: "One Hundred Fifteen Billion, Two Hundred Fifty-five Million, Five Hundred Thousand, Fifteen Dollars and Fifty-nine Cents only"

console.log(numberToCurrencyWords('5552111111115.2500', 'GB',));
// Output: "Five Trillion, Five Hundred Fifty-two Billion, One Hundred Eleven Million, One Hundred Eleven Thousand, One Hundred Fifteen Pounds and Twenty-five Pence only"

console.log(numberToCurrencyWords('5552111111115.5500', 'GB', {noHypen: true}));
// Output: "Five Trillion, Five Hundred Fifty Two Billion, One Hundred Eleven Million, One Hundred Eleven Thousand, One Hundred Fifteen Pounds and Fifty Five Pence only"

console.log(numberToCurrencyWords('5552111111115.5500', 'GB', {noComa: true}));
// Output: "Five Trillion Five Hundred Fifty-two Billion One Hundred Eleven Million One Hundred Eleven Thousand One Hundred Fifteen Pounds and Fifty-five Pence only"

console.log(numberToCurrencyWords(5552111111115.6500, 'GB', {isAnd : true }));
// Output: "Five Trillion and Five Hundred Fifty-two Billion and One Hundred Eleven Million and One Hundred Eleven Thousand and One Hundred Fifteen Pounds and Sixty-five Pence only"

console.log(numberToCurrencyWords(5552111111115.9500, 'GB', {titleCase : true}));
// Output: "Five Trillion, Five Hundred Fifty-Two Billion, One Hundred Eleven Million, One Hundred Eleven Thousand, One Hundred Fifteen Pounds and Ninety-Five Pence only"

console.log(numberToCurrencyWords(5552111111115.750, 'GB', { titleCase : true, isAnd : true, noHypen: true }));
// Output: "Five Trillion and Five Hundred Fifty Two Billion and One Hundred Eleven Million and One Hundred Eleven Thousand and One Hundred Fifteen Pounds and Seventy Five Pence only"

console.log(numberToWords(652222225.52226));
// Output: "Six Hundred Fifty-two Million, Two Hundred Twenty-two Thousand, Two Hundred Twenty-five Point Five Two"

console.log(numberToWords('4322222225.52226', { noHypen: true }));
// Output: "Four Billion, Three Hundred Twenty Two Million, Two Hundred Twenty Two Thousand, Two Hundred Twenty Five Point Five Two"

console.log(numberToWords('4322222225.52226', { noComa: true }));
// Output: "Four Billion Three Hundred Twenty-two Million Two Hundred Twenty-two Thousand Two Hundred Twenty-five Point Five Two"

console.log(numberToWords(2522222225.52226, {isAnd : true }));
// Output: "Two Billion and Five Hundred Twenty-two Million and Two Hundred Twenty-two Thousand and Two Hundred Twenty-five Point Five Two"

console.log(numberToWords('9222222225.8226', {titleCase : true}));
// Output: "Nine Billion, Two Hundred Twenty-Two Million, Two Hundred Twenty-Two Thousand, Two Hundred Twenty-Five Point Eight Two"

console.log(numberToWords(4022222225.6226, { titleCase : true, isAnd : true, noHypen: true }));
// Output: "Four Billion and Twenty Two Million and Two Hundred Twenty Two Thousand and Two Hundred Twenty Five Point Six Two"
</code></pre>

API Reference & Options 📚

Options for numberToWords & numberToCurrencyWords

<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
<th>Effect Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>noComa</code></td>
<td>boolean</td>
<td>false</td>
<td>Include or exclude commas between large number groups.</td>
<td>
<strong>false:</strong> "One Million, Two Hundred Thousand"<br />
<strong>true:</strong> "One Million Two Hundred Thousand"
</td>
</tr>
<tr>
<td><code>isAnd</code></td>
<td>boolean</td>
<td>false</td>
<td>Insert the word <code>and</code> between number groups for formal reading.</td>
<td>
<strong>false:</strong> "One Million Two Hundred Thousand"<br />
<strong>true:</strong> "One Million and Two Hundred Thousand"
</td>
</tr>
<tr>
<td><code>noHypen</code></td>
<td>boolean</td>
<td>false</td>
<td>Remove hyphens in compound numbers (e.g. "Twenty-Five" → "Twenty Five").</td>
<td>
<strong>false:</strong> "Twenty-Five"<br />
<strong>true:</strong> "Twenty Five"
</td>
</tr>
<tr>
<td><code>titleCase</code></td>
<td>boolean</td>
<td>false</td>
<td>Output words in Title Case, capitalizing hyphenated parts as well.</td>
<td>
<strong>false:</strong> "Twenty-five"<br />
<strong>true:</strong> "Twenty-Five"
</td>
</tr>
</tbody>
</table>

Option Effects Examples

<pre><code class="language-javascript">// Input number: 125.55

// Default
numberToWords(125.55);
// Output: "One Hundred Twenty Five and Point Five Five"

// noComa: true
numberToWords(125.55, { noComa: true });
// Output: "One Hundred Twenty Five and Point Five Five" (no commas)

// isAnd: true
numberToWords(125.55, { isAnd: true });
// Output: "One Hundred and Twenty Five and Point Five Five"

// noHypen: true
numberToWords(125.55, { noHypen: true });
// Output: "One Hundred Twenty Five and Point Five Five" (no hyphen in "Twenty Five")

// titleCase: true
numberToWords(125.55, { titleCase: true });
// Output: "One Hundred Twenty-Five and Point Five Five" (capitalized words)
</code></pre>

🌍 Supported Countries

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

TypeScript Support ✅

<p>This package includes full TypeScript type definitions:</p>
<pre><code class="language-typescript">import { numberToWords, numberToCurrencyWords, CountryCode } from 'number-to-words';

const amount: string = numberToCurrencyWords(123.45, 'US' as CountryCode);
</code></pre>

Benchmarks ⚡

<ul>
<li>✅ Converts up to quadrillion-range numbers in &lt;1ms</li>
<li>✅ Zero dependencies ensures lightning-fast startup</li>
</ul>

Browser Compatibility 🌐

<p>This library is fully compatible with:</p>
<ul>
<li>✅ Node.js (14+)</li>
<li>✅ All modern browsers</li>
<li>✅ Works with bundlers like Webpack, Vite, and Rollup</li>
<li>✅ Works in serverless functions and frontend apps</li>
</ul>

Contributing 🤝

<p>Contributions are welcome! Please:</p>
<ul>
<li>Fork the repository</li>
<li>Create a new branch</li>
<li>Submit an issue or feature request</li>
<li>Open a Pull Request</li>
</ul>

License 📄

<p><a href="https://www.npmjs.com/~codeshumon">MIT © codeshumon</a></p>
<p>See LICENSE for full details.</p>