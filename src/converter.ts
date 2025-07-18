import { CURRENCY_CONFIG } from "./data/currenciesData";
import { CountryCode } from "./types";

const MAX_LIMIT = 999999999999999;

export const numberToWords = (
  num: number | string,
  options?: {
    noComa?: boolean;
    isAnd?: boolean;
    noHypen?: boolean;
    titleCase?: boolean;
  }
): string => {
  const parsedNum = typeof num === "string" ? parseFloat(num) : num;
  const {
    noComa = false,
    isAnd = false,
    noHypen = false,
    titleCase = false,
  } = options || {};

  if (isNaN(parsedNum)) {
    return "Zero";
  }

  if (Math.abs(parsedNum) > MAX_LIMIT) {
    return "The number exceeds the maximum supported limit of 999,999,999,999,999.";
  }

  const isNegative = parsedNum < 0;
  const absoluteNum = Math.abs(parsedNum);
  const [integerPart, originalDecimalPart] = absoluteNum.toFixed(2).split(".");
  const wholeNumber = parseInt(integerPart, 10);

  if (wholeNumber === 0 && (!originalDecimalPart || parseInt(originalDecimalPart, 10) === 0)) {
    return "Zero";
  }

  // Base words in title case
  const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const scales = ["", "Thousand", "Million", "Billion", "Trillion"];

  const chunkToWords = (n: number): string => {
    if (n === 0) return "";
    let words = "";
    if (n >= 100) {
      words += units[Math.floor(n / 100)] + " Hundred";
      n %= 100;
      if (n > 0) words += " ";
    }
    if (n >= 20) {
      words += tens[Math.floor(n / 10)];
      n %= 10;
      if (n > 0) words += noHypen ? "" : "-";
    } else if (n >= 10) {
      words += teens[n - 10];
      n = 0;
    }
    if (n > 0) {
      if (words !== "") {
        words += noHypen ? " " + units[n] : units[n].toLowerCase();
      } else {
        words = units[n];
      }
    }
    return words;
  };

  let words = "";
  let scaleIndex = 0;
  let remaining = wholeNumber;
  const parts: string[] = [];

  while (remaining > 0) {
    const chunk = remaining % 1000;
    if (chunk !== 0) {
      let chunkWords = chunkToWords(chunk);
      if (scaleIndex > 0) {
        chunkWords += " " + scales[scaleIndex];
      }
      parts.unshift(chunkWords);
    }
    remaining = Math.floor(remaining / 1000);
    scaleIndex++;
  }

  if (parts.length > 0) {
    words = parts[0];
    for (let i = 1; i < parts.length; i++) {
      if (isAnd) {
        words += " and " + parts[i];
      } else if (!noComa) {
        words += ", " + parts[i];
      } else {
        words += " " + parts[i];
      }
    }
  }

  const decimalPart = originalDecimalPart;
  if (decimalPart && parseInt(decimalPart, 10) > 0) {
    words += (words ? " " : "") + "Point";
    for (const digitChar of decimalPart) {
      words += " " + units[parseInt(digitChar, 10)];
    }
  }

  let finalWords = words || "Zero";
  finalWords = isNegative ? `Negative ${finalWords}` : finalWords;

  if (titleCase || noHypen) {
    finalWords = finalWords.replace(/(\w+)-(\w+)/g, (match, p1, p2) => {
      return `${p1}-${p2.charAt(0).toUpperCase() + p2.slice(1)}`;
    });
  }

  finalWords = finalWords.replace(/\bAnd\b/g, "and");
  return finalWords.trim();
};

export const numberToCurrencyWords = (
  amount: number | string,
  countryCode: CountryCode = "US",
  options?: {
    noComa?: boolean;
    isAnd?: boolean;
    noHypen?: boolean;
    titleCase?: boolean;
  }
): string => {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  const {
    noComa = false,
    isAnd = false,
    noHypen = false,
    titleCase = false,
  } = options || {};

  if (isNaN(num)) {
    const config = CURRENCY_CONFIG[countryCode] || CURRENCY_CONFIG.US;
    const cleanSuffix = config.suffix.replace(/\s*only$/i, "").trim();
    return `Zero ${config.majorPlural} ${cleanSuffix} only`;
  }

  if (Math.abs(num) > MAX_LIMIT) {
    return "The Amount exceeds the maximum supported limit of 999,999,999,999,999.";
  }

  const formattedNum = parseFloat(num.toFixed(2));
  const config = CURRENCY_CONFIG[countryCode] || CURRENCY_CONFIG.US;
  let cleanSuffix = config.suffix.replace(/\s*only$/i, "").trim();

  const absoluteNum = Math.abs(formattedNum);
  const major = Math.floor(absoluteNum);
  const minor = Math.round((absoluteNum - major) * 100);
  const majorWord = major === 1 ? config.major : config.majorPlural;
  let result = `${numberToWords(major, { noComa, isAnd, noHypen, titleCase })} ${majorWord}`;

  if (minor > 0) {
    const minorWord = minor === 1 ? config.minor : config.minorPlural;
    result += ` ${config.conjunction.toLowerCase()} ${numberToWords(minor, {
      noComa,
      isAnd,
      noHypen,
      titleCase,
    })} ${minorWord}`;
  }

  const sign = formattedNum < 0 ? "Negative " : "";
  let finalString = `${sign}${result} ${cleanSuffix} only`.replace(/\s+/g, " ").trim();

  if (titleCase || noHypen) {
    finalString = finalString.replace(/(\w+)-(\w+)/g, (match, p1, p2) => {
      return `${p1}-${p2.charAt(0).toUpperCase() + p2.slice(1)}`;
    });
  }

  finalString = finalString.replace(/\bAnd\b/g, "and");
  return finalString;
};