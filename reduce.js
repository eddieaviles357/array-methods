// reduce
function extractValue(arr, key) {
    return arr.reduce((accum, next) => {
        accum.push(next[key]);
        return accum;
    }, [])
}

function vowelCount(str) {
    let vowels = {a:0,e:0,i:0,o:0,u:0};
    let arr = Array.from(str.toLowerCase());
    return arr.reduce((accum, next) => {
        if(Object.hasOwn(vowels, next)) {
            vowels[next]++
            return {...accum, [next] : vowels[next]}
        }
        return {...accum};
    }, {});
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce((acc, next,i) => {
        next[key] = value;
        return acc;
    }, arr);
}

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}
function isEven(val){
    return val % 2 === 0;
}

function partition(arr, callback) {
    return arr.reduce((acc, next) => {
            if(callback(next)) {
                acc[0].push(next);
            } else {
                acc[1].push(next);
            }
            return acc;
    }, [[],[]])
}
