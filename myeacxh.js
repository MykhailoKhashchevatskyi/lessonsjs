// writeYourGenres: function() {
//   for (let i = 1; i <= 3; i++){
//     this.genres[i - 1] = prompt(`твій улюблений жанр під номером ${i} ?`)    /// було
//   }
// }

// writeYourGenres: function() {
//   for (let i = 1; i <= 3; i++){
//     this.genres[i - 1] = prompt(`твій улюблений жанр під номером ${i} ?`)
//     if (this.genres[i - 1] === null || this.genres[i - 1] === ''){            /// мій варіант
//       i--;
//     }
//   }
// }


// writeYourGenres: function() {
//   for (let i = 1; i <= 3; i++){
//     let genre = prompt(`твій улюблений жанр під номером ${i} ?`)
//     if (genre === null || genre === ''){                                     /// варіант з курсу
//       i--;
//     } else {
//       this.genres[i - 1] = genre;
//     }
//   }
// }