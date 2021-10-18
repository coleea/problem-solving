function miniMaxSum(arr) {
    arr.sort()
    const min =arr.slice(0,4).reduce((prev,curr)=>prev+curr,0)
    const max = arr.slice(1).reduce((p,c)=>p+c,0)
    console.log(`${min} ${max}`);
/*
    const arrBigint = arr.map(v=> BigInt(v))
    // Write your code here
    let min = BigInt(99999999) ;
    let max = BigInt(0)  ;
    for (const num of arrBigint) {
        if(num < min) min = num
        if(max < num ) max = num
    }
    let restSum = arrBigint.filter(v => !(v ===min || v === max) )
        .reduce((prev,curr)=> prev + curr, BigInt(0))
    // console.log(' restSum',  restSum);
    console.log(`${restSum+min} ${restSum+max}`);
 */
}

miniMaxSum([1,2,3,4,5])
