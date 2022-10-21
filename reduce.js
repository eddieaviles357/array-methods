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
        if(vowels.hasOwnProperty(next)) {
            vowels[next]++
            return {...accum, [next] : vowels[next]}
        }
        return {...accum};
    }, {});
}

function addKeyAndValue(arr, key, value) {
    arr.reduce((acc, next,i) => {
        next[key] = value
    }, {});
}

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}
function isEven(val){
    return val % 2 === 0;
}
var arr = [1,2,3,4,5,6,7,8];
function partition(arr, callback) {
    return arr.reduce((acc, next) => {
            if(callback(next)) {
                acc[0].push(next);
            } else {
                acc[1].push(next);
            }
    }, [[],[]])
}
partition(arr, isEven);
