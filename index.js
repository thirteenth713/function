let firstArray = [3, 2, 'two', 'apple', 'ApplE'],
    secondArray = [3, '3', 2, 'two', 'apple', 'apple'];

function testEvenItems(array) {
  let res = false;
  let checksum = {
    string: {},
    number: {}
  };
  if (array && array.length) {
    let allowedTypes = Object.keys(checksum)
    array.forEach(item => {
      let currentType = typeof item
      if (allowedTypes.includes(currentType)) {
        if (item.toLowerCase) {
          item = item.toLowerCase();
        }
        checksum[currentType][item] ? checksum[currentType][item] += 1 : checksum[currentType][item] = 1;
      }
    })
    res = allowedTypes.some((type_) => {
      return Object.keys(checksum[type_]).some(itemInType => {
        if (checksum[type_][itemInType] % 2 === 0) {
          return true
        }
      })
    })
  }
  return res
}
console.log(testEvenItems([3, '3', 2, 'two', 'apple', 'apple', 'apple']));