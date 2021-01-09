function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}
