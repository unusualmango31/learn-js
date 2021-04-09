"use strict"

let numberOfFilms;

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: true,

        askAboutNumberOfFilms() {
            numberOfFilms = Number(prompt("Сколько фильмов вы посмотрели?"));
        
            while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < 0) {
                numberOfFilms = Number(prompt("Сколько фильмов вы посмотрели?"));
            }
        },

        askAboutLastFilm() {
            let lastViewedFilm = prompt("Какой последний фильм вы посмотрели?");
        
            while(lastViewedFilm == "" || lastViewedFilm == null || lastViewedFilm == " ") {
                lastViewedFilm = prompt("Какой последний фильм вы посмотрели?");
            }
        
            let howRate = Number(prompt("На сколько вы его оценили?"));
        
            while(howRate == "" || howRate == null || isNaN(howRate) || howRate < 0) {
                howRate = Number(prompt("На сколько вы его оценили?"));
            }
        
            this.movies[lastViewedFilm] = howRate;
        }, 

        checkUserRate() {
            if(this.count < 10) {
                console.log("Просмотренно мало фильмов");
            } else if (this.count >= 10 && this.count < 30) {
                console.log("Вы классический кинозритель");
            } else {
                console.log("Вы настоящий киноман");
            }
        },

        showDB() {
            if(this.private === true) {
                console.log(this);
            } else if (this.private === false) {
                console.log("Error\naccess denied");
            } else {
                console.log("Error\nUnknown private status");
            }
        },

        askAboutGenres(count = 1) {
            for(let i = 1; i <= count; i++) {
                let favoriteGenre = prompt(`Ваш любимый жанр?\n ${i}/${count}`);
        
                if(favoriteGenre == "" || favoriteGenre == null || favoriteGenre == " ") {
                    alert("Введено некорректное название жанра\nПопробуйте ещё раз");
                    i--;
                } else {
                    this.genres.push(favoriteGenre);
                }
            }

            this.genres.forEach( (genre, index) => console.log(`Любимый жанр под номером: ${index} - это ${genre}`));
        },

        toggleVisibleMyDB() {
            this.private == true ? this.private = false : this.private = true;
        }
};

personalMovieDB.askAboutNumberOfFilms();
personalMovieDB.askAboutLastFilm();
personalMovieDB.askAboutGenres(3);
personalMovieDB.checkUserRate();
personalMovieDB.showDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showDB();


