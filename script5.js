// Задачи на работу с массивами
// В этих заданиях мы с вами потренируемся работать с массивами.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

// Задачи:

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   if (arr.length === 0){
//     return `Семья пуста`;
//   }
//     return `Семья емья состоит из: ${arr.join(' ')}`;
// }


// function showFamily(arr) {
//   let str = '';

//   arr.length === 0 ? str = `Семья пуста` : str = 'Семья состоит из: ';

//   arr.forEach(member => {
//     str += `${member} `;
//   })
//   return str;
// }

// console.log(showFamily(family));





// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (countrie of arr){
//       console.log(countrie.toLowerCase());
//     }
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//   if (typeof str !== 'String'){
//     return 'Ошибка';
//   } else {
//     const newStr = str.split('').reverse().join('');
//     return newStr;
//   }
// }


// reverse(someString);

// console.log(reverse(someString));

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';

  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(function(curr) {
    if (curr !== missingCurr){
      str += `${curr}\n`;
    }
  });

  return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))