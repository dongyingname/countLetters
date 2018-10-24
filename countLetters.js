function countLetters(input) {
  function reformatt(str){
    var noSpace = str.split("").join('').toLowerCase();
    return noSpace;
  }
  var newString = reformatt(input);
  var result = {};
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (var i = 0; i < newString.length; i++){
    for (var j = 0; j < letters.length; j ++){
      if(newString[i] === letters[j]){
        if (result[newString[i]] === undefined){
          result[newString[i]] = 1;
        }
        else {
          result[input[i]] ++;
        }
      }
    }
  }
  return result;
}

console.log(countLetters('happy birthday'));
console.log(countLetters('why am i here'));
console.log(countLetters('alright'));


