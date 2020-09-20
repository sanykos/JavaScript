let str = "Hello";
function findVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o"];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

//console.log(findVowels(str));
