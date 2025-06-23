/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start(){
  numberOfFilms = prompt('Скільки фільмів ти переглянув?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Скільки фільмів ти переглянув?', '');
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
  for (let i = 0; i < 2; i++){
    const a = prompt('Один з останніх переглянутих фільмів?', ''),
          b = prompt('Яку оцінку поставиш?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log('done');
        } else {
          i--;
        }
  }
}
rememberMyFilms();

function detectLevel(){
  if (personalMovieDB.count <= 10){
    alert('"Щось маловато фільмів ти глянув)"');
  } else if (personalMovieDB.count >= 10 && personalMovieDB <=30) {
    alert('Ого, багато вже подивився');
  } else if (personalMovieDB.count > 30) {
    alert('Та ти вже можеш йти на кінокритика вчитись)');
  } else {
    alert('якась помилка');
  }
}
detectLevel();


function writeYourGenres(){
  for (let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = prompt(`твій улюблений жанр під номером ${i} ?`)
  }
}
writeYourGenres();

function showMyDB(a) {
  if (!a){
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);
