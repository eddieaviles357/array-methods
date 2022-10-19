function doubleValuesWithMap(arr) {
    return arr.map(function(num) { return num * 2; });
}

doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]



function valTimesIndex(arr) {
    return arr.map(function(num,idx) {
        return num * idx;
    })
}

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]



function extractKey(objArr, key) {
    return objArr.map(function(obj) {
        return obj[key];
    })
}

extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  )
  
// ['Elie', 'Tim', Matt', 'Colt']

function extractFullName(objArr) {
    return objArr.map(function(obj, idx) {
        return `${obj['first']} ${obj['last']}`;
    })
}

extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ])
  
    // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
    