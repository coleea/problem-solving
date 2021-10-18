function plusMinus(arr) {
    // Write your code here
    let plusCnt = 0
    let minusCnt = 0
    let zeroCnt = 0
    for (const num of arr) {
        if(num >0){
plusCnt++
        } else if(num < 0){
minusCnt++
        } else {
zeroCnt++
        }
    }
    console.log(plusCnt / arr.length);
    console.log(minusCnt / arr.length);
    console.log(zeroCnt / arr.length);
}
