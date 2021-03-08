let numberOfFilms;

askAboutNumberOfFilms();

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: true,
};

askAboutLastFilm(personalMovieDB);
askAboutGenres(3, personalMovieDB);
checkUserRate(personalMovieDB);
showDB(personalMovieDB);

function askAboutNumberOfFilms() {
    numberOfFilms = Number(prompt("Сколько фильмов вы посмотрели?"));

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < 0) {
        numberOfFilms = Number(prompt("Сколько фильмов вы посмотрели?"));
    }
}

function askAboutLastFilm(movieDB) {
    let lastViewedFilm = prompt("Какой последний фильм вы посмотрели?");

    while(lastViewedFilm == "" || lastViewedFilm == null || lastViewedFilm == " ") {
        lastViewedFilm = prompt("Какой последний фильм вы посмотрели?");
    }

    let howRate = Number(prompt("На сколько вы его оценили?"));

    while(howRate == "" || howRate == null || isNaN(howRate) || howRate < 0) {
        howRate = Number(prompt("На сколько вы его оценили?"));
    }

    movieDB.movies[lastViewedFilm] = howRate;
}

function checkUserRate(movieDB) {
    if(movieDB.count < 10) {
        console.log("Просмотренно мало фильмов");
    } else if (movieDB.count >= 10 && movieDB.count < 30) {
        console.log("Вы классический кинозритель");
    } else {
        console.log("Вы настоящий киноман");
    }
}

function showDB(movieDB) {
    if(movieDB.private === true) {
        console.log(movieDB);
    } else if (movieDB.private === false) {
        console.log("Error \naccess denied");
    } else {
        console.log("Error\nUnknown private status");
    }
}

function askAboutGenres(count, movieDB) {
    for(let i = 1; i <= count; i++) {
        let favoriteGenre = prompt(`Ваш любимый жанр?\n ${i}/${count}`);

        if(favoriteGenre == "" || favoriteGenre == null || favoriteGenre == " ") {
            alert("Введено некорректное название жанра\nПопробуйте ещё раз");
            i--;
        } else {
            movieDB.genres.push(favoriteGenre);
        }
    }
}