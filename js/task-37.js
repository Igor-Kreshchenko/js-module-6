const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((prev, next) =>
  prev.author.localeCompare(next.author)
);

const sortedByReversedAuthorName = [...books].sort((prev, next) =>
  next.author.localeCompare(prev.author)
);

const sortedByAscendingRating = [...books].sort(
  (prev, next) => prev.rating - next.rating
);

const sortedByDescentingRating = [...books].sort(
  (prev, next) => next.rating - prev.rating
);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);
