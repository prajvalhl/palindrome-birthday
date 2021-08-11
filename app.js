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
  day: 5,
  month: 9,
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
