const movies = [
  { title: "The Godfather", year: 1972, rating: 9.2, director: "Francis Ford Coppola" },
  { title: "The Shawshank Redemption", year: 1994, rating: 9.3, director: "Frank Darabont" },
  { title: "Schindler's List", year: 1993, rating: 9.0, director: "Steven Spielberg" },
  { title: "Raging Bull", year: 1980, rating: 8.2, director: "Martin Scorsese" },
  { title: "Casablanca", year: 1942, rating: 8.5, director: "Michael Curtiz" },
  { title: "Citizen Kane", year: 1941, rating: 8.3, director: "Orson Welles" },
  { title: "Gone with the Wind", year: 1939, rating: 8.1, director: "Victor Fleming" },
  { title: "The Wizard of Oz", year: 1939, rating: 8.0, director: "Victor Fleming" },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975, rating: 8.7, director: "Milos Forman" },
  { title: "Lawrence of Arabia", year: 1962, rating: 8.3, director: "David Lean" }
];

console.log("============================ 10 Film Terbaik Sepanjang Masa ============================");
console.table(movies);

// Map()
const JKapital = movies.map(movie => movie.title.toUpperCase());
console.log("map(): membuat judul film jadi huruf kapital semua"); 
console.table(JKapital);

// Filter()
const topfilm = movies.filter(movie => movie.rating >= 9);
console.log("filter(): film dengan rating di atas 9");
console.table(topfilm);

// Reduce()
const tRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
const average = (tRating / movies.length);
console.log("reduce(): Rata-rata rating =", average);

// Find()
const find = movies.find(movie => movie.director === "Steven Spielberg");
console.log("find(): film yang disutradarai oleh Steven Spielberg: ");
console.table(find);

// Some()
const some = movies.some(movie => movie.year < 1940);
console.log("some(): apakah ada film yang dirilis sebelum tahun 1940: ", some);

// Every()
const every = movies.every(movie => movie.rating > 9);
console.log("every():Apakah semua filmnya memiliki rating di atas 9?:", every);
