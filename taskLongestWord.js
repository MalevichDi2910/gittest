function findLongestWordLength(str) {
  let longestWord = str.split(' ').reduce((longest, currentValue) => {return currentValue.length > longest.length ? currentValue : longest}, '')
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");