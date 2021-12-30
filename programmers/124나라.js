function solution(n) {

    let currentNum = n
    let arr = []
    let targetDigits = 3

    while (true) {
        if(currentNum < targetDigits) {
            arr.push(currentNum)
            break
        }
        const nextCurrentNum = Math.floor(currentNum / targetDigits)
        const digitNum = currentNum % targetDigits

        arr.push(digitNum)
        currentNum = nextCurrentNum
    }
    console.log('arr', arr);
    // console.log(arr.reverse().join('').replace(/2/g,'4'));
    const arr2 = JSON.parse(JSON.stringify(arr))
    const arr3 = JSON.parse(JSON.stringify(arr))
    console.log(arr2.reverse().join('').replace(/3/g,'4'));
    // console.log(arr3.reverse().join('').replace(/10/g,'4'));
    // var answer = '';
    // return answer;
}

solution(9)