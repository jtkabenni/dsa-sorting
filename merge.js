function merge(arr1, arr2) {
  let res = [];
  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      res.push(arr1[left]);
      left++;
    } else {
      res.push(arr2[right]);
      right++;
    }
  }
  return res.concat(arr1.slice(left), arr2.slice(right));
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
