const users = ["Ade", "Ola", "Dan", "Pius"];
const nums = [1, 3, 6, 8];
const test = [true, false, false, true];
// [{}, {}]
const movies = [
  {
    id: 1,
    title: "Die Hard",
    rating: 4.0,
    recent: true,
    genre: ["action", "thriller", "suspense"],
  }, //movie
  {
    id: 2,
    title: "Mission Imposible",
    rating: 4.7,
    recent: false,
    genre: ["action", "thriller", "fiction"],
  },
  {
    id: 6,
    title: "Mission Imposible 2",
    rating: 4.5,
    recent: true,
    genre: ["action", "thriller", "fiction", "spy"],
  },
  {
    id: 3,
    title: "Spiderman",
    rating: 4.2,
    recent: true,
    genre: ["action", "sci-fi", "supernatural"],
  },
  {
    id: 4,
    title: "Riverdale",
    rating: 3.2,
    recent: false,
    genre: ["high school", "crime", "suspense"],
  },
  {
    id: 7,
    title: "Mission X",
    rating: 2.4,
    recent: false,
    genre: ["spy", "thriller", "suspense"],
  },
  {
    id: 8,
    title: "Great Mission",
    rating: 4.7,
    recent: true,
    genre: ["horror", "thriller", "suspense"],
  },
];

// write a function called getMoviesByGenre, takes in a genre term
// return all the movies that has the genreTerm in it
const getMoviesByGenre = (genreTerm) => {
  const searches = movies.filter((movie) =>
    genreTerm.every((term) => movie.genre.includes(term))
  );
  return searches;
};
console.log(getMoviesByGenre(["spy", "action"]));
// every , some

// write a function that takes in a searchTerm, get the movies that has the searchTerm in it
// mission
const searchForMovies = (searchTerm) => {
  const searches = movies.filter((movie) =>
    movie.title.toUpperCase().includes(searchTerm.toUpperCase())
  );
  return searches.length === 0 ? "No movies found" : searches;
};

// write
const recentlyAdded = () => {
  const recents = movies.filter((movie) => movie.recent);
  return recents;
};
console.log(recentlyAdded());

console.log(searchForMovies("amal")); //miss die hard, mission
console.log(searchForMovies("spider")); //SPIDER
console.log(searchForMovies(""));

console.log(movies.length);
console.log(movies[0].title.toUpperCase());
// get movies that the rating is 4 and above

const topRatedMovies = movies.filter((movie) => movie.rating >= 4);
console.log(topRatedMovies);

const changedTitle = movies.map((movie) => movie.title.toUpperCase());
console.log(changedTitle);

// get the first movie that the rating is more than 4
const bestMovie = movies.find((movie) => movie.rating > 4);
console.log(bestMovie);
movies.push({ id: 5, title: "Batman", rating: 2.4 });
console.log(movies);

// return the id of the first movie that te rating is greater than 4
const idMovie = movies.find((movie) => movie.rating > 4);
console.log(idMovie.id);
