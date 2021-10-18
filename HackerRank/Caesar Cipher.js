
function caesarCipher(s, factor) {
    // Write your code here
    const smallArr = 'abcdefghijklmnopqrstuvwxyz'.split('')

    const bigArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const alphabetLen = `abcdefghijklmnopqrstuvwxyz`.length

    const rawInputArr = s.split('')
    let newStr = ''
    for (const char of rawInputArr) {
        // let foundSmallIdx ;
        let foundSmallIdx =  smallArr.indexOf(char)
        let foundBigIdx =  bigArr.indexOf(char)

        if(foundSmallIdx >= 0) {
            const modifiedIdx = (foundSmallIdx + factor) % alphabetLen
            const factored = smallArr[modifiedIdx]
            newStr += factored
        } else if(foundBigIdx >= 0) {
            const modifiedIdx = (foundBigIdx + factor) % alphabetLen
            const factored = bigArr[modifiedIdx]
            newStr += factored
        } else {
            newStr += char
        }

    }
    console.log('newStr,', newStr);
    return newStr
}

caesarCipher('middle-Outz', 2)