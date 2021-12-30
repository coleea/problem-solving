function solution(inputStr) {

    let inputLen = inputStr.length
    let bestReducable = 0

    for (let unit = 1; unit < inputStr.length; unit++) {

        let totalReducable = 0
        let newMatchCnt = 0
        let targetStr = inputStr.slice(0, 0 + unit)

        for (let z = 0; z < inputStr.length; z+=unit) {

            if(z === 0) continue

            const substr = inputStr.slice(z, z + unit)
            if(targetStr === substr) {
                newMatchCnt++
                continue
            } else {
                if(newMatchCnt > 0) {
                    totalReducable += (newMatchCnt * unit) -  String(newMatchCnt+1).length
                    // console.log(`(newMatchCnt * unit) -  String(newMatchCnt).length`, (newMatchCnt * unit) -  String(newMatchCnt).length);
                    // console.log('targetStr', targetStr, 'newMatchCnt', newMatchCnt);
                }
                newMatchCnt = 0
                targetStr = substr
            }
        }
        if(newMatchCnt > 0) {
            totalReducable += (newMatchCnt * unit) -  String(newMatchCnt + 1).length
            // console.log(`(newMatchCnt * unit) -  String(newMatchCnt).length`, (newMatchCnt * unit) -  String(newMatchCnt).length);
            // console.log('targetStr', targetStr, 'newMatchCnt', newMatchCnt);
        }
        // console.log('==\n\ntotalReducable', totalReducable);
        // console.log('matchCnt', newMatchCnt);
        // let matchNum = newMatchCnt * unit
        bestReducable = Math.max(bestReducable , totalReducable)
/*
        if(bestReducable < totalReducable){
            bestReducable = totalReducable
            // console.log('totalReducable',totalReducable);
            // bestMatchCnt = newMatchCnt
        }
 */
    }
    const bestLen = inputLen - bestReducable
    // console.log('bestLen', bestLen, 'sLen', sLen,'bestReducable', bestReducable);
    return bestLen
}



// solution("ababcdcdababcdcd")
// solution("aabbaccc"	)
// solution("abcabcdede")
solution("xababcdcdababcdcd")
// solution("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij")
