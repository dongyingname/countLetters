


function countLetters(input) {
  function reformatt(str){
    var noSpace = str.split(" ").join('').toLowerCase();
    return noSpace;
  }
  var result = [];
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (var i = 0; i < input.length; i++){
    for (var j = 0; j < letters.length; j ++){
      if(input[i] === letters[j]){
        if (result[input[i]] === undefined){
          result[input[i]] = 1;
        }
        else {
          result[input[i]] += 1;
        }
      }
    }
  }
  return result;
}

console.log(countLetters('happy birthday'));
console.log(countLetters('why am i here'));
console.log(countLetters('alright'));


