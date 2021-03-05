let numberOfFilms = Number(prompt("сколько фильмов вы посмотрели?")),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false,
    };

let lastViewedFilm1 = prompt("Какой последний фильм вы посмотрели?"),
    howRate1 = prompt("На сколько вы его оценили?"),
    lastViewedFilm2 = prompt("Какой последний фильм вы посмотрели?"),
    howRate2 = prompt("На сколько вы его оценили?");

personalMovieDB.movies[lastViewedFilm1] = howRate1;
personalMovieDB.movies[lastViewedFilm2] = howRate2;

console.log(personalMovieDB);

