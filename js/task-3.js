function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  firstArray.forEach(function (firstArrayItem) {
    if (secondArray.includes(firstArrayItem)) {
      commonElements.push(firstArrayItem);
    }
  });

  return commonElements;
  // Пиши код выше этой строки
}
