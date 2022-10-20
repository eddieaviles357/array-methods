// Array.prototype.some()
function hasOddNumber(arr) {
    return arr.some(val => val % 2 !== 0);
}

function hasAZero(nums) {
    return Array.from(nums.toString()).some(num => num === '0');
} // End of // Array.prototype.some()



// Array.prototype.every()
function hasOnlyOddNumbers(arr) {
    return arr.every(val => val % 2 !== 0);
}

function hasNoDuplicates(arr) {
    return arr.every(val => arr.indexOf(val) === arr.lastIndexOf(val));
}

function hasCertainKey(arr, key) {
    return arr.every(obj => obj.hasOwnProperty(key));
}

function hasCertainValue(arr, key, searchValue) {
    return arr.every(obj => obj[key] === searchValue);
} // End of Array.prototype.every()