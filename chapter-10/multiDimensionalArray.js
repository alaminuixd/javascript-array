const tableLoopOne = [
  [0, 0],
  [3, 5],
  [5, 7],
  [10, 23],
];

// one dimensional traverse:
for (let i = 0; i < tableLoopOne.length; i++) {
  const result = `${i}: X = ${tableLoopOne[i][0]}, Y = ${tableLoopOne[i][1]}`;
  console.log(result);
}
//two dimensional traverse
const tableLoopTwo = [
  [1, 2, 3, 9],
  [4, 5, 6, 1],
  [7, 8, 9, 4],
  [3, 4, 2, 9, 2, 0],
];

for (let row = 0; row < tableLoopTwo.length; row++) {
  for (let col = 0; col < tableLoopTwo[row].length; col++) {
    console.log(`Points [${row}, ${col}] = ${tableLoopTwo[row][col]}`);
  }
}
