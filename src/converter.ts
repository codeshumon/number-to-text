import { CURRENCY_CONFIG } from "./data/currenciesData";
import { CountryCode } from "./types";

export const numberToWords = (num: number | string): string => {
  const parsedNum = typeof num === 'string' ? parseFloat(num) : num;
  
  if (isNaN(parsedNum)) {
    return 'Zero';
  }

  const [integerPart, decimalPart] = parsedNum.toString().split('.');
  const wholeNumber = Math.abs(parseInt(integerPart, 10));
  
  if (wholeNumber === 0 && (!decimalPart || parseInt(decimalPart, 10) === 0)) {
    return 'Zero';
  }

  const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

  const chunkToWords = (n: number): string => {
    if (n === 0) return '';
    let words = '';
    
    if (n >= 100) {
      words += units[Math.floor(n / 100)] + ' Hundred';
      n %= 100;
      if (n > 0) words += ' ';
    }
    
    if (n >= 20) {
      words += tens[Math.floor(n / 10)];
      n %= 10;
      if (n > 0) words += ' ';
    } else if (n >= 10) {
      words += teens[n - 10];
      n = 0;
    }
    
    if (n > 0) {
      words += units[n];
    }
    
    return words.trim();
  };

  let words = '';
  let scaleIndex = 0;
  let remaining = wholeNumber;
  let scaleAdded = false;
  
  while (remaining > 0) {
    const chunk = remaining % 1000;
    if (chunk !== 0) {
      let chunkWords = chunkToWords(chunk);
      if (scaleIndex > 0) {
        chunkWords += ' ' + scales[scaleIndex];
        scaleAdded = true;
      }
      if (words && scaleAdded) {
        words = chunkWords + ' and ' + words;
      } else {
        words = chunkWords + (words ? ' ' : '') + words;
      }
      scaleAdded = false;
    }
    remaining = Math.floor(remaining / 1000);
    scaleIndex++;
  }
  
  if (decimalPart) {
    const decimalNumber = parseInt(decimalPart.slice(0, 2).padEnd(2, '0'), 10);
    if (decimalNumber > 0) {
      // Add "and" before Point if there are whole numbers
      words += words ? ' and Point' : 'Point';
      const decimalDigits = decimalNumber.toString().split('');
      for (const digit of decimalDigits) {
        words += ' ' + units[parseInt(digit, 10)];
      }
    }
  }
  
  return words.replace(/\s+/g, ' ').trim();
};

export const numberToCurrencyWords = (
  amount: number | string,
  countryCode: CountryCode = 'US'
): string => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  const formattedNum = parseFloat(num.toFixed(2));
  
  const config = CURRENCY_CONFIG[countryCode] || CURRENCY_CONFIG.US;

  if (isNaN(formattedNum) || formattedNum === null) {
    return `Zero ${config.majorPlural} ${config.suffix}`;
  }

  const absoluteNum = Math.abs(formattedNum);
  const dollars = Math.floor(absoluteNum);
  const cents = Math.round((absoluteNum - dollars) * 100);

  const majorWord = dollars === 1 ? config.major : config.majorPlural;
  let result = `${numberToWords(dollars)} ${majorWord}`;
  
  if (cents > 0) {
    const minorWord = cents === 1 ? config.minor : config.minorPlural;
    result += ` ${config.conjunction} ${numberToWords(cents)} ${minorWord}`;
  }
  
  const sign = formattedNum < 0 ? 'Negative ' : '';
  return `${sign}${result} ${config.suffix}`.replace(/\s+/g, ' ').trim();
};