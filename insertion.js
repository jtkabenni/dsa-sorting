function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let prevIdx = i - 1;

    while (prevIdx >= 0 && curr < arr[prevIdx]) {
      arr[prevIdx + 1] = arr[prevIdx];
      prevIdx--;
    }
    arr[prevIdx + 1] = curr;
  }

  return arr;
}

module.exports = insertionSort;
