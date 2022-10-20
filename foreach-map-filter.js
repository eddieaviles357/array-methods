// forEach
function doubleValues(arr) {
    let doubledVal = [];
    arr.forEach(function(num) {
        doubledVal.push(num*2);
    });
    return doubledVal;
}

function onlyEvenValues(arr) {
    let evens = [];
    arr.forEach(function(num) {
        if(num % 2 === 0) evens.push(num);
    });
    return evens;
}

function showFirstAndLast(arr) {
    let firstAndLastLetters = [];
    arr.forEach(function(word) {
        firstAndLastLetters.push(`${word[0]}${word[word.length-1]}`);
    });
    return firstAndLastLetters;
}

function addKeyAndValue(arr, key, value) {
    let keyValueArr = [];
    arr.forEach(function(obj) {
        keyValueArr.push({...obj, [key]:value});
    });
    return keyValueArr;
}

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
} // End of forEach

// Map
function doubleValuesWithMap(arr) {
    return arr.map(function(num) { return num * 2; });
}

function valTimesIndex(arr) {
    return arr.map(function(num,idx) {
        return num * idx;
    })
}

function extractKey(objArr, key) {
    return objArr.map(function(obj) {
        return obj[key];
    })
}

function extractFullName(objArr) {
    return objArr.map(function(obj, idx) {
        return `${obj['first']} ${obj['last']}`;
    })
} // End of Map

// filter
function filterByValue(objArr, key) {
    return objArr.filter(function(obj) {
        return obj[key] !== undefined;
    })
}

function find(arr, key) {
    return arr.filter(function(val){
        return val === key
    })[0]
}

function findInObj(objArr, key, value) {
    return objArr.filter(function(obj) {
        return obj[key] === value;
    })[0]
}

function removeVowels( word ) {
    const vowels = { 'a': 0,'e': 0,'o': 0,'u': 0,'i': 0 };
    return Array.from( word.toLowerCase() )
        .filter( function( char ) { return !vowels.hasOwnProperty(char) } )
        .join('');
}

function doubleOddNumbers(arr) {
    return arr.filter( function( num ) { return num % 2 !== 0 })
        .map( function(odd) { return odd * 2 } );
} // End of filter