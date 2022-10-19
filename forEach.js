// double values in array
function doubleValues(arr) {
    let doubledVal = [];
    arr.forEach(function(num) {
        doubledVal.push(num*2);
    });
    return doubledVal;
}
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

function onlyEvenValues(arr) {
    let evens = [];
    arr.forEach(function(num) {
        if(num % 2 === 0) evens.push(num);
    });
    return evens;
}
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]

function showFirstAndLast(arr) {
    let firstAndLastLetters = [];
    arr.forEach(function(word) {
        firstAndLastLetters.push(`${word[0]}${word[word.length-1]}`);
    });
    return firstAndLastLetters;
}
showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function addKeyAndValue(arr, key, value) {
    let keyValueArr = [];
    arr.forEach(function(obj) {
        keyValueArr.push({...obj, [key]:value});
    });
    return keyValueArr;
}
addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    )
    
    /*
      [
        {name: 'Elie', title:'instructor'},
        {name: 'Tim', title:'instructor'},
        {name: 'Matt', title:'instructor'},
        {name: 'Colt', title:'instructor'}
      ]
    */

function vowelCount(str) {
    const vowels = { 'a':0,'e':0,'o':0,'u':0,'i':0 };
    let vowelCount = {};
    Array.from(str.toLowerCase())
        .forEach(function(char) { 
            if(vowels.hasOwnProperty(char)) vowels[char]++ 
        });

    for(let key in vowels) {
        if(vowels[key] > 0) {
            vowelCount = { ...vowelCount, [key]:vowels[key] };
        };
    }
    return vowelCount;
}


vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}