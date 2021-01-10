const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort(
  (prev, next) => prev - next
);

const descendingReleaseDates = [...releaseDates].sort(
  (prev, next) => next - prev
);

console.log(ascendingReleaseDates);
console.log(descendingReleaseDates);
