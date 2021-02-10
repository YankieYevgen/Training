let numberOfFilms;


 function start() {
   numberOfFilms = prompt('Сколько фильмов уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null ||  isNaN(numberOfFilms)) {
      numberOfFilms = prompt('Сколько фильмов уже посмотрели?', '');
   }
 }

 start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actor: {},
   genres: [],
   privat: false

};


function rememberMyFilm() {
   for (let i = 0; i < 2; i++) {
   
      const questionNumberOne = prompt('Один из последних просмотреных фильмов?', ''),
       questionNumberTwo = prompt('На сколько оцените его', '');
      
      if (questionNumberOne != null && questionNumberTwo != null && questionNumberOne != '' && questionNumberTwo !='' && questionNumberOne.length < 50) {
         personalMovieDB.movies[questionNumberOne] = questionNumberTwo;
          console.log('Done');
      } else {
          console.log ('error');
          i--;
      }
      
      }
}

rememberMyFilm();


function detectPersonalLevel() {
   if (personalMovieDB.count <  10) {
      console.log ("Просмотрено мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
   } else {
      console.log('Призошла ошибка');
   }
   
}

detectPersonalLevel();


function showMyDB (hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres () {
   for (let i = 1; i <= 3; i++) {
      let genres1 = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDB.genres[i - 1] = genres1; 
   }

}
 writeYourGenres();