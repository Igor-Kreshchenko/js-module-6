const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((acc, playtime) => acc + playtime, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(averagePlayTime);
