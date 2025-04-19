function solve(input) {
    
    return spiralMatrix(input);
}
function spiralMatrix(input, result=[]) {
    let n = input.length;
    const tot_cnt = n*input[0].length;
    let count = 0;
    let minR = 0, minC = 0, maxR = n-1, maxC = input[0].length-1;
    while(tot_cnt > count) {
        for(let j = minC; j <= maxC && tot_cnt > count; j++) {
            result.push(input[minR][j]);
            count++;
        }
        minR++;
        for(let i = minR; i <= maxR && tot_cnt > count; i++) {
            result.push(input[i][maxC]);
            count++;
        }
        maxC--;
        for(let j=maxC; j >= minC && tot_cnt > count; j--) {
            result.push(input[maxR][j]);
            count++;
        }
        maxR--;
        for(let i=maxR; i >= minR && tot_cnt > count; i--) {
            result.push(input[i][minC]);
            count++;
        }
        minC++;
    }
    return result;
}
console.log(solve([[1, 2, 3, 4 ]]));