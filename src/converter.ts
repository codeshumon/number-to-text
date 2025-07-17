import { CURRENCY_CONFIG } from "./data/currenciesData";

import { CountryCode } from "./types";

export const numberToWords = (num: number): string => {
  if (num === 0) return "Zero";

  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const scales = ["", "Thousand", "Million", "Billion", "Trillion"];

  const chunkToWords = (n: number): string => {
    if (n === 0) return "";
    let words = "";

    if (n >= 100) {
      words += units[Math.floor(n / 100)] + " Hundred ";
      n %= 100;
    }

    if (n >= 20) {
      words += tens[Math.floor(n / 10)] + " ";
      n %= 10;
    } else if (n >= 10) {
      words += teens[n - 10] + " ";
      n = 0;
    }

    if (n > 0) {
      words += units[n] + " ";
    }

    return words.trim();
  };

  let words = "";
  let scaleIndex = 0;

  while (num > 0) {
    const chunk = num % 1000;
    if (chunk !== 0) {
      let chunkWords = chunkToWords(chunk);
      if (scaleIndex > 0) {
        chunkWords += " " + scales[scaleIndex];
      }
      words = chunkWords + " " + words;
    }
    num = Math.floor(num / 1000);
    scaleIndex++;
  }

  return words.trim();
};

export const numberToCurrencyWords = (
  amount: number | string,
  countryCode: CountryCode = "US"
): string => {
  const config = CURRENCY_CONFIG[countryCode] || CURRENCY_CONFIG.US;
  const num = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(num) || num === null) {
    return `Zero ${config.majorPlural} ${config.suffix}`;
  }

  const absoluteNum = Math.abs(num);
  const dollars = Math.floor(absoluteNum);
  const cents = Math.round((absoluteNum - dollars) * 100);

  const majorWord = dollars === 1 ? config.major : config.majorPlural;
  let result = `${numberToWords(dollars)} ${majorWord}`;

  if (cents > 0) {
    const minorWord = cents === 1 ? config.minor : config.minorPlural;
    result += ` ${config.conjunction} ${numberToWords(
      cents
    )} ${minorWord}`;
  }

  const sign = num < 0 ? "Negative " : "";
  return `${sign}${result} ${config.suffix}`;
};
