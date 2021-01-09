function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newNumbers = [];

  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      newNumbers.push(number);
    } else {
      newNumbers.push(number + value);
    }
  });

  return newNumbers;
  // Пиши код выше этой строки
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
