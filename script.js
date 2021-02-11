const personalMovieDB = {
   count: 0,
   movies: {},
   actor: {},
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = prompt('Сколько фильмов уже посмотрели?', '');

      while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
         personalMovieDB.count = prompt('Сколько фильмов уже посмотрели?', '');
      }
   },
   rememberMyFilm: function () {
      for (let i = 0; i < 2; i++) {

         const questionNumberOne = prompt('Один из последних просмотреных фильмов?', ''),
            questionNumberTwo = prompt('На сколько оцените его', '');

         if (questionNumberOne != null && questionNumberTwo != null && questionNumberOne != '' && questionNumberTwo != '' && questionNumberOne.length < 50) {
            personalMovieDB.movies[questionNumberOne] = questionNumberTwo;
            console.log('Done');
         } else {
            console.log('error');
            i--;
         }

      }
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         console.log("Просмотрено мало фильмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log("Вы классический зритель");
      } else if (personalMovieDB.count >= 30) {
         console.log("Вы киноман");
      } else {
         console.log('Призошла ошибка');
      }

   },

   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },

   writeYourGenres: function () {
      for (let i = 1; i <= 3; i++) {
         let genre = prompt(`Ваш любимый жанр под номером ${i}`);

         if (genre == '' || genre == null) {
            console.log('Вы не ввели некорретные данные или не ввели их');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }

      }


      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i+1}- это ${item}`);
      });

   }



};