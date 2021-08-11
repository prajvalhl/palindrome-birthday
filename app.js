// function which reverses the string
const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

// function which checks if the string is palindrome
const isPalindrome = (str) => {
  const reverse = reverseStr(str);
  return reverse === str;
};

const date = {
  day: 2,
  month: 2,
  year: 2020,
};

// function which converts date to string
const convertDateToString = (date) => {
  const dateStr = {
    day: "",
    month: "",
    year: "",
  };

  if (date.day < 10) {
    dateStr.day = `0${date.day}`;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = `0${date.month}`;
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();

  return dateStr;
};

// function which get all date formats
const getAllDateFormats = (date) => {
  const dateStr = convertDateToString(date);

  const ddmmyyyy = `${dateStr.day}${dateStr.month}${dateStr.year}`;
  const mmddyyyy = `${dateStr.month}${dateStr.day}${dateStr.year}`;
  const yyyymmdd = `${dateStr.year}${dateStr.month}${dateStr.day}`;
  const ddmmyy = `${dateStr.day}${dateStr.month}${dateStr.year.slice(-2)}`;
  const mmddyy = `${dateStr.month}${dateStr.year}${dateStr.year.slice(-2)}`;
  const yymmdd = `${dateStr.year.slice(-2)}${dateStr.month}${dateStr.day}`;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
};

// function to check palindrome with all date formats and return true if any format is palindrome
const checkPalindromeForAllDateFormats = (date) => {
  const listOfAllDateFormats = getAllDateFormats(date);
  let isPlndrm = false;
  for (let i of listOfAllDateFormats) {
    if (isPalindrome(i)) {
      isPlndrm = true;
      break;
    }
  }
  return isPlndrm;
};

// check leap year
const isLeapYear = (year) =>
  year % 400 === 0 || year % 100 === 0 || year % 4 === 0;

// get next date
const getNextDate = (date) => {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month !== 2) {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  } else {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
};

// find the next palindrome date
const getNextPalindromeDate = (date) => {
  let daysCount = 0;
  let nextDate = getNextDate(date);

  while (true) {
    daysCount++;
    if (checkPalindromeForAllDateFormats(nextDate)) {
      break;
    } else {
      nextDate = getNextDate(nextDate);
    }
  }

  return [daysCount, nextDate];
};

// get previous date
const getPreviousDate = (date) => {
  let day = date.day - 1;
  let month = date.month;
  let year = date.year;

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month !== 3) {
    if (day < 1) {
      day = daysInMonth[month - 1];
      month--;
    }
  } else {
    if (isLeapYear(year)) {
      if (day < 1) {
        day = 29;
        month--;
      }
    } else {
      if (day < 1) {
        day = 28;
        month--;
      }
    }
  }

  if (month < 1) {
    month = 12;
    year--;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
};

// find the previous palindrome date
const getPreviousPalindromeDate = (date) => {
  let daysCount = 0;
  let previousDate = getPreviousDate(date);

  while (true) {
    daysCount++;
    if (checkPalindromeForAllDateFormats(previousDate)) {
      break;
    } else {
      previousDate = getPreviousDate(previousDate);
    }
  }

  return [daysCount, previousDate];
};

// find the nearest palindrome date
const findNearestPalindromeDate = (date) => {
  const [fCount, futureDate] = getNextPalindromeDate(date);
  const [pCount, pastDate] = getPreviousPalindromeDate(date);
  console.log(fCount, pCount);
  if (fCount < pCount) {
    return futureDate;
  } else {
    return pastDate;
  }
};

const dateInputRef = document.querySelector("#input-date");
const btnRef = document.querySelector("#btn-check");
const outputRef = document.querySelector("#output");

const handleClick = (e) => console.log(dateInputRef.value);

btnRef.addEventListener("click", handleClick);
