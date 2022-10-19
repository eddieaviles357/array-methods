function filterByValue(objArr, key) {
    return objArr.filter(function(obj) {
        return obj[key] !== undefined;
    })
}

filterByValue(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner'
    )
    
/*
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]
*/

function find(arr, key) {
    return arr.filter(function(val){
        return val === key
    })[0]
}

find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined


function findInObj(objArr, key, value) {
    return objArr.filter(function(obj) {
        return obj[key] === value;
    })[0]
}

findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner',
    true
  )
  
  // {first: 'Tim', last:"Garcia", isCatOwner: true}

function removeVowels( word ) {
    const vowels = { 'a': 0,'e': 0,'o': 0,'u': 0,'i': 0 };
    return Array.from( word.toLowerCase() )
        .filter( function( char ) { return !vowels.hasOwnProperty(char) } )
        .join('');
}

removeVowels('Elie') // ('l')
removeVowels('TIM') // ('tm')
removeVowels('ZZZZZZ') // ('zzzzzz')

function doubleOddNumbers(arr) {
    return arr.filter( function( num ) { return num % 2 !== 0 })
        .map( function(odd) { return odd * 2 } );
}

doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []