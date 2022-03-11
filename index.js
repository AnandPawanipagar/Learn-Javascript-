const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let highscoresCount = 0;
let lowscoresCount = 0;
let ans = [];
let highscores = scores.map((e, i) => {
  let incArr = scores.slice(0, ++i);
  let max = Math.max(...incArr);
  return max;
});
let lowscores = scores.map((e, i) => {
  let incArr = scores.slice(0, ++i);
  let min = Math.min(...incArr);
  return min;
});
console.log(highscores);
console.log(lowscores);
let hsCountArr = highscores.map((e, i) => {
  if (highscores[i + 1] > highscores[i]) {
    return ++highscoresCount;
  } else {
    return highscoresCount;
  }
});
let hsCountArrLastVal = hsCountArr.pop();
ans.push(hsCountArrLastVal);

let lsCountArr = lowscores.map((e, i) => {
  if (lowscores[i + 1] < lowscores[i]) {
    return ++lowscoresCount;
  } else {
    return lowscoresCount;
  }
});
let lsCountArrLastVal = lsCountArr.pop();
ans.push(lsCountArrLastVal);

console.log(ans);
