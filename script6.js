/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
      this.count = prompt('Скільки фільмів ти переглянув?', '');
    
      while (this.count == '' || this.count == null || isNaN(this.count)) {
        this.count = prompt('Скільки фільмів ти переглянув?', '').trim();
      }
    }, 
    rememberMyFilms: function() {
      for (let i = 0; i < 2; i++){
        const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),
              b = prompt('Яку оцінку поставиш?', '').trim();
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
              this.movies[a] = b;
              console.log('done');
            } else {
              i--;
            }
      }
    },
    detectLevel: function() {
      if (this.count <= 10){
        alert('"Щось маловато фільмів ти глянув)"');
      } else if (this.count >= 10 && this.count <=30) {
        alert('Ого, багато вже подивився');
      } else if (this.count > 30) {
        alert('Та ти вже можеш йти на кінокритика вчитись)');
      } else {
        alert('якась помилка');
      }
    },
    writeYourGenres: function() {
      // for (let i = 1; i <= 3; i++){
      //   let genre = prompt(`твій улюблений жанр під номером ${i} ?`)
      //   if (genre === null || genre === ''){                                     /// варіант з курсу
      //     i--;
      //   } else {
      //     this.genres[i - 1] = genre;
      //   }
      // }
      

      for (let i = 1; i < 2; i++){
        let genre = prompt(`запиши свої улюблені фільми через кому!`); /// 
        if (genre === null || genre === ''){                                 
          i--;
        } else {
          this.genres = genre.split(',');
          this.genres.sort();
        }
      }
      this.genres.forEach((item, i) => console.log(`Улюблений жанр: ${i + 1} - це ${item}`));
    },
    showMyDB: function(hiddn) {
      if (!this.privat){
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function() {
      if (this.privat) {
        this.privat = false;
      } else { 
        this.privat = true;
      }
    }
};



