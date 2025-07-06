// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
// Makes a reading get pushed onto the reading log increasing the data
// This is important because it creates the data and pushes it to the log
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
// Loops through the log to add up everyone's minutes and return it as a total value for the week
// This loops every through all the data and gathers the time spent reading adding it to the total
// This is important because it scans everything to make sure the minutes of reading are accurate total
 let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
function mostReadBook(log) {
// Scans which book was read the most by obtaining the title of each book and what was read the most
// Loops through every object of data gathered in the log 
// loops through the data to see what is the most read book
 const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
// This reads null if there isnt a frequent book
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
// logs a quick daily comment of what was read on the date for how much time read
// Loops the data to access the accurate amount of the date, minutes, and book in order to print it 
// Making the array set for day - mintues - book allows the data to be printed in the same order over and over to its easy to read
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
