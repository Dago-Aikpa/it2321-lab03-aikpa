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
// We filter classical movies according the year.
const classicMovies = movies.filter(m => m.year < 1999);

// TODO 2: Use map() to transform the data.
// Movies tranformed into string
const movieDescript = movies.map(m => `${m.title} (${m.year}) Rating: ${m.rating}`
);

// TODO 3: Use reduce() to boil the data down to one value.

// The total running time in minutes then converted into hours.
const totalHours = movies.reduce((sum, m) => sum + m.minutes, 0) / 60;


// TODO 4: Write your OWN higher-order function: one that takes a function
// A high order function that filter movies release before year 2000
function getMovies(list, condition){
  return list.filter(condition);
}
console.log(getMovies(movies, m => m.year <2000));

// TODO 5: Show at least three results with console.log() and show().

console.log('Classic Movies: ', classicMovies);
show('Classic Movies count: ' + classicMovies.length);

console.log('Movie Description:', movieDescript);
show('Second movie: '+ movieDescript[1]);


console.log('Total Hours:', totalHours);
show('Total running time: ' + totalHours + 'hours');


// ----- helper (you do not need to change this) -----
function show(value) {
  const box = document.getElementById("output");
  box.textContent += (box.textContent.trim() ? "\n" : "") + String(value);
}
