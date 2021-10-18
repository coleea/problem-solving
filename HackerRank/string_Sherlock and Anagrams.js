
function sherlockAndAnagrams(s) {
    // Write your code here
    const sLen = s.length
    let counter = 0
    // 1char, 2 char, 3char
    for(var size = 1 ; size < s.length ; size++){

        for(var baseIdx = 0 ; baseIdx < s.length ; baseIdx++){
            // const baseArr = s.substr(baseIdx,size).split('')
            const baseStr = s.substr(baseIdx,size)

            for(var compareIdx = baseIdx + 1 ; compareIdx < s.length ; compareIdx++){

                if(compareIdx + size - 1 > s.length - 1) break
                let compareStr = s.substr(compareIdx,size)
                let compareArr = s.substr(compareIdx,size).split('')

                if(baseStr === compareArr) {
                    counter++
                    break
                }
                for(let charIdx = 0; charIdx < baseStr.length ; charIdx++){
                    const char = baseStr[charIdx]
                    const foundIdx =compareArr.indexOf(char)
                    if(foundIdx >= 0) {
                        compareArr.splice(foundIdx, 1)
                    } else {
                        // failed
                        break ;
                    }
                    if(charIdx === baseStr.length -1){
                        // complete
                        counter++
                    }
                }
            }
        }
    }
    return counter
}