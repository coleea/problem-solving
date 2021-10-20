//  이 문제는 오후4시 3분에 시작해서 새벽 12시 53분에 품
// 동영상 22시간 보고 밥먹는시간 1시간 빼면  9-3=6시간 걸림
function solution(lines) {

    let starpos = []
    const hashObj = {}
    const 교점들 = []
    const hash = {}
    let final = []

    for (let i = 0; i < lines.length; i++) {

        const line1 = lines[i];
        const a = line1[0]
        const b = line1[1]
        const e = line1[2]

        for (let z = 0; z < lines.length; z++) {

            if(i===z) continue

            const line2 = lines[z];
            const c = line2[0]
            const d = line2[1]
            const f = line2[2]

            let 교점x = null
            let 교점y = null

            const adbc = (a * d) - (b * c)
            if(adbc === 0) continue
            교점x = - ((b * f) - (d * e) ) / adbc
            교점y = - ((a * f) - (c * e) ) / adbc
            if(교점x % 1 !== 0) continue
            if(교점y % 1 !== 0) continue

            const hashPos = 교점x + ',' + 교점y
            if(hash[hashPos] === true) { continue}
            교점들.push([교점x, 교점y])
            hash[hashPos] = true

        }
    }

    const maxX = 교점들.reduce( (prev, curr) => {
        if(prev < curr[0]) { return curr[0]}
        else return prev
    }, Number.MIN_SAFE_INTEGER);

    const lowX  = 교점들.reduce( (prev, curr) => {
        if(prev > curr[0]) { return curr[0]}
        else return prev
    }, Number.MAX_SAFE_INTEGER);;

    const maxY = 교점들.reduce( (prev, curr) => {
        if(prev < curr[1]) { return curr[1]}
        else return prev
    }, Number.MIN_SAFE_INTEGER);

    const lowY =  교점들.reduce( (prev, curr) => {
        if(prev > curr[1]) { return curr[1]}
        else return prev
    }, Number.MAX_SAFE_INTEGER);

    for (let y = maxY ; y >= lowY ; y--) {
        let str = ''
        for (let x = maxX; x >= lowX ; x--) {
            const isExist = 교점들.some(v=> {
                if(x === v[0] && y === v[1]) return true
                else return false
            })
            if(isExist){
                str += ''+ "*"
            } else {
                str += ''+ '.'
            }
        }
        final.push(str)
    }
    console.log(final);
    return final
}

solution([[0, 1, 0], [-1, 0 , 0], ]	)