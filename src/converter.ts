import { CURRENCY_CONFIG } from "./data/currenciesData";
import { CountryCode } from "./types";

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
    titleCase = true,
  } = options || {};

  if (isNaN(parsedNum)) {
    return titleCase ? "Zero" : "zero";
  }

  const isNegative = parsedNum < 0;
  const absoluteNum = Math.abs(parsedNum);

  const [integerPart, originalDecimalPart] = absoluteNum.toFixed(2).split(".");
  const wholeNumber = parseInt(integerPart, 10);

  if (
    wholeNumber === 0 &&
    (!originalDecimalPart || parseInt(originalDecimalPart, 10) === 0)
  ) {
    return titleCase ? "Zero" : "zero";
  }

  // Changed all base words to lowercase
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const scales = ["", "thousand", "million", "billion", "trillion"];

  const chunkToWords = (n: number): string => {
    if (n === 0) return "";
    let words = "";

    if (n >= 100) {
      words += units[Math.floor(n / 100)] + " hundred";
      n %= 100;
      if (n > 0) words += " ";
    }

    if (n >= 20) {
      words += tens[Math.floor(n / 10)];
      n %= 10;
      if (n > 0) words += noHypen ? " " : "-";
    } else if (n >= 10) {
      words += teens[n - 10];
      n = 0;
    }

    if (n > 0) {
      words += units[n];
    }

    return words.trim();
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
    words += (words ? " " : "") + "point";
    for (const digitChar of decimalPart) {
      words += " " + units[parseInt(digitChar, 10)];
    }
  }

  let finalWords = words || "zero";
  finalWords = isNegative ? `negative ${finalWords}` : finalWords;

  // Apply title case if enabled
  if (titleCase) {
    finalWords = finalWords
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // Ensure "and" remains lowercase
  finalWords = finalWords.replace(/\bAnd\b/g, "and");

  return finalWords;
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
    titleCase = true,
  } = options || {};

  const formattedNum = parseFloat(num.toFixed(2));
  const config = CURRENCY_CONFIG[countryCode] || CURRENCY_CONFIG.US;

  let cleanSuffix = config.suffix.replace(/\s*only$/i, "").trim();

  if (isNaN(formattedNum)) {
    let zeroResult = `zero ${config.majorPlural.toLowerCase()} ${cleanSuffix.toLowerCase()} only`;
    return titleCase
      ? zeroResult
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : zeroResult;
  }

  const absoluteNum = Math.abs(formattedNum);
  const major = Math.floor(absoluteNum);
  const minor = Math.round((absoluteNum - major) * 100);

  const majorWord = major === 1 
    ? config.major.toLowerCase() 
    : config.majorPlural.toLowerCase();
    
  let result = `${numberToWords(major, { noComa, isAnd, noHypen, titleCase })} ${majorWord}`;

  if (minor > 0) {
    const minorWord = minor === 1 
      ? config.minor.toLowerCase() 
      : config.minorPlural.toLowerCase();
    result += ` ${config.conjunction.toLowerCase()} ${numberToWords(minor, {
      noComa,
      isAnd,
      noHypen,
      titleCase,
    })} ${minorWord}`;
  }

  const sign = formattedNum < 0 ? "negative " : "";

  let finalString = `${sign}${result} ${cleanSuffix.toLowerCase()} only`
    .replace(/\s+/g, " ")
    .trim();

  if (titleCase) {
    finalString = finalString
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  finalString = finalString.replace(/\bAnd\b/g, "and");

  return finalString;
};