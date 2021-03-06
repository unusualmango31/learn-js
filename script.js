let numberOfFilms = -1;

while(isNaN(numberOfFilms) || numberOfFilms == "" || numberOfFilms <= 0 || numberOfFilms === null) {
    numberOfFilms = Number(prompt("Сколько фильмов вы посмотрели?"));
}

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false,
};

for(let i = 0; i < 2; i++) {
    let lastViewedFilm = prompt("Какой последний фильм вы посмотрели?"),
        howRate = Number(prompt("На сколько вы его оценили?"));
    
    if(lastViewedFilm != "" && lastViewedFilm != null && lastViewedFilm.length < 50 && howRate != null && !isNaN(howRate)) {
        personalMovieDB.movies[lastViewedFilm] = howRate;
        console.log("Значение принято");
    } else {
        console.log("Вы ввели некорректное значение");
        i--;
    }
}

if(personalMovieDB.count < 10) {
    console.log("Просмотренно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический кинозритель");
} else {
    console.log("Вы настоящий киноман");
}

console.log(personalMovieDB);