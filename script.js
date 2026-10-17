// Lab 3: Processing Data with Higher-Order Functions
// Goal: use filter, map, and reduce on a dataset, and write at least one
// higher-order function of your own (a function that takes a function).

"use strict";

// A starter dataset. You may replace it with data of your own choosing.
const movies = [
  { title: "Hackers",        year: 1995, rating: 4.2, minutes: 107 },
  { title: "The Matrix",     year: 1999, rating: 4.8, minutes: 136 },
  { title: "WarGames",       year: 1983, rating: 4.1, minutes: 114 },
  { title: "The Social Network", year: 2010, rating: 4.5, minutes: 120 },
  { title: "Tron",           year: 1982, rating: 3.9, minutes: 96 },
];

// TODO 1: Use filter() to keep only some of the movies.
//         Example: movies rated 4.3 or higher.
// const topRated = movies.filter(m => m.rating >= 4.3);

// TODO 2: Use map() to transform the data.
//         Example: an array of just the titles, or "Title (year)" strings.
// const titles = movies.map(m => `${m.title} (${m.year})`);

// TODO 3: Use reduce() to boil the data down to one value.
//         Example: the total running time in minutes.
// const totalMinutes = movies.reduce((sum, m) => sum + m.minutes, 0);

// TODO 4: Write your OWN higher-order function: one that takes a function
//         as an argument. Example: a function that returns how many movies
//         satisfy a test you pass in.
// function countWhere(list, test) {
//   return list.filter(test).length;
// }
// console.log(countWhere(movies, m => m.year < 2000));

// TODO 5: Show at least three results with console.log() and show().


// ----- helper (you do not need to change this) -----
function show(value) {
  const box = document.getElementById("output");
  box.textContent += (box.textContent.trim() ? "\n" : "") + String(value);
}
