// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers Calculate the absolute difference between the sums of its diagonals
    The absolute difference between two variables, is simply one subtracted from the other and you get the sum.
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    tep left to bottom right diagonal: 1 + 5 + 9 = 15
    top right to bottom left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    top left to bottom right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    top right to bottom left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    let rightSum = 0;
    let leftSum = 0;
    for(i=0; i<sqrMatrix.length; i++){
        leftSum += sqrMatrix[i][i];
    }
    let k = 0;
    for(j=sqrMatrix.length-1; j>=0; j--){
        rightSum += sqrMatrix[j][k];
        k++;
    }
    const diff = rightSum - leftSum;
    return Math.abs(diff);
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

/*****************************************************************************/