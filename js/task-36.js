const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
  "Говард Лавкрафт",
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((prev, next) =>
  prev.localeCompare(next)
);

const authorsInReversedOrder = [...authors].sort((prev, next) =>
  next.localeCompare(prev)
);

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);
