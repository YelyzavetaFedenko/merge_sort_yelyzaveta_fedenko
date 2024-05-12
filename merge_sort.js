/* Creating the programme for Merge Sorting in Java Script */

function mergeSort(arr) {
  if (arr.length <= 1) {
    // Если массив содержит один элемент или пуст, считаем его отсортированным
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // Находим середину массива
  const left = arr.slice(0, middle); // Разделяем массив на две половины
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right)); // Рекурсивно сортируем и объединяем две половины
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    // Сравниваем элементы из двух массивов и объединяем их в один
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); // Добавляем оставшиеся элементы из каждого массива
}

// Пример использования:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Before sorting:", array);
console.log("After sorting:", mergeSort(array));
