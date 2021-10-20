function solution(명함들) {

    const 명함수 = 명함들.length
    const 경우의수timeline = [[],[]]
    const memoTimeLine = [[],[]]
    let currIdx = 0

    let 최초명함 = 명함들[currIdx]
    let 가로 = 최초명함[0]
    let 세로 = 최초명함[1]
    let 경우의수arr = 경우의수timeline[currIdx % 2]
    let paper = [가로,세로]
    let paperReverse = [세로, 가로]

    경우의수arr.push(paper)
    경우의수arr.push(paperReverse)

    let memoArr = memoTimeLine[currIdx % 2]
    let memo1 = getMemoizeStr(paper)
    let memo2 = getMemoizeStr(paperReverse)
    memoArr.push(memo1)
    memoArr.push(memo2)

    currIdx++
    let latestCombination ;
    let 경우의수카운트 = 0
    while(currIdx < 명함수){
        let 경우의수idx = (currIdx+1) % 2
        let 경우의수arr = 경우의수timeline[(currIdx+1) % 2]

        const currPaper = 명함들[currIdx]
        const currRow = currPaper[0]
        const currCol = currPaper[1]
        const currPaperReverse = [currPaper[1] ,currPaper[0]]

        let newCombination = []
        let newMemoize = []
        for (const oldBest of 경우의수arr) {

            let newBest1 = [oldBest[0], oldBest[1]]
            let newBest2 = [oldBest[0], oldBest[1]]

            if(currRow >= oldBest[0]){
                newBest1[0] = currRow
            }
            if(currCol >= oldBest[1]){
                newBest1[1] = currCol
            }

            if(currCol >= oldBest[0]){
                newBest2[0] = currCol
            }
            if(currRow >= oldBest[1]){
                newBest2[1] = currRow
            }

            // console.log('===newCombination', newCombination);
            // console.log('newBest1', newBest1);
/*
            let isAlwaysBigger1 = newCombination.some(val => {
                console.log('val[0]', val[0], 'newBest1[0]', newBest1[0]);
                if(val[0] >= newBest1[0] && val[1] >= newBest1[1]) {return true}
                else return false
            })
            console.log('isAlwaysBigger1', isAlwaysBigger1);
 */
            // console.log('isAlwaysBigger1', isAlwaysBigger1);
            if(true){
            // if(! isAlwaysBigger1){
                const newBest1Memo = getMemoizeStr(newBest1)
                // console.log('newBest1Memo', newBest1Memo, 'newBest2Memo', newBest2Memo);
                if(! newMemoize.includes(newBest1Memo)){
                    newMemoize.push(newBest1Memo)
                    newCombination.push(newBest1)
                }
            }

            // let isAlwaysBigger2 = newCombination.some(val => val[0] >= newBest1[0] && val[1] >= newBest1[1]  )
            // console.log('isAlwaysBigger2', isAlwaysBigger2);
            // if(! isAlwaysBigger2){
            if(true){
                const newBest2Memo = getMemoizeStr(newBest2)
                if(! newMemoize.includes(newBest2Memo)){
                    newMemoize.push(newBest2Memo)
                    newCombination.push(newBest2)
                }
            }
        }

        경우의수timeline[currIdx % 2] = latestCombination = newCombination
        currIdx++
    }
    const 곱Arr =latestCombination.map(v=> v[0] * v[1])
    // console.log('latestCombination', latestCombination);
    곱Arr.sort((a,b)=>a-b)
    // console.log('곱Arr', 곱Arr);
    const 최소 = 곱Arr[0]
    console.log('최소', 최소);
    return 최소
}

function getMemoizeStr(rowcol) {
    const row =String(rowcol[0])
    let rowPaddingCnt = 4 - row.length
    const rowPadded = '0'.repeat(rowPaddingCnt) + row
    // if( 4 - row.length)
    // String(row)
    const col = String(rowcol[1])
    let colPaddingCnt = 4 - col.length
    const colPadded = '0'.repeat(colPaddingCnt) + col
    return rowPadded + colPadded
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]]	)