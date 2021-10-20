function 교점찾음 (x,y) {
    // console.log('asdf교점이 존재', 'x', x, 'y', y);
}

function solution(lines) {

    let starpos = []
    const hashObj = {}
    let final = []
    const 교점들 = []
    const hash = {}

    for (let i = 0; i < lines.length; i++) {

        const line1 = lines[i];
        const a1 = line1[0]
        const b1 = line1[1]
        const c1 = line1[2]

        for (let z = 0; z < lines.length; z++) {

            if(i===z) continue

            const line2 = lines[z];
            const a2 = line2[0]
            const b2 = line2[1]
            const c2 = line2[2]

            let 교점x = null
            let 교점y = null
            let xLCMabs = null;
            let yLCM = null;
            let isA1Negative  = false;
            let isA2Negative = false;
            let isANegative = false;
            let negativeCnt = 0

            // console.log('===');
            if(a1 === 0){
                // find y
               교점y =  (-c1) / b1

               // 첫번째 식의 x는 값이없고 y는 구했음
               // 두번째 식에 y를 대입해서 x를 구함
                if(a2 === 0){
                    console.log('교점없음');
                    continue
                } else {
                    교점x = (-c2 -(b2 * 교점y)) / a2
                    if((교점x | 0) !== 교점x){
                        continue
                    }
                    if((교점y | 0) !== 교점y) {
                        continue
                    }
                   교점찾음(교점x,교점y)
                }
            } else if(a2 === 0){
                교점y =  (-c2) / b2

                if(a1 === 0){
                    console.log('교점없음');
                    continue
                } else {
                    교점x = (-c1 -(b1 * 교점y)) / a1
                    if((교점x | 0) !== 교점x){
                        continue
                    }
                    if((교점y | 0) !== 교점y) {
                        continue
                    }
                    교점찾음(교점x,교점y)
                }
            }

            if(교점x == null && 교점y == null){
                if(b1 === 0){
                    교점x =  (-c1) / a1
                   // 첫번째 식의 y는 값이없고 x는 구했음
                   // 두번째 식에 x를 대입해서 y를 구함
                   if(b2 === 0){
                        // console.log('교점이 없거나 직선이 완전히 일치함');
                        continue
                    } else {
                        교점y = (-c2 -(a2 * 교점x)) / b2
                        if((교점x | 0) !== 교점x){
                            continue
                        }
                        if((교점y | 0) !== 교점y) {
                            continue
                        }

                        교점찾음(교점x,교점y)
                    }
    
                } else if(b2 === 0){
                    교점x =  (-c2) / a2
                    if(b1 === 0){
                        // console.log('교점이 없거나 직선이 완전히 일치함');
                        continue
                    } else {
                        교점y = (-c1 -(a1 * 교점x)) / b1
                        if((교점x | 0) !== 교점x){
                            continue
                        }
                        if((교점y | 0) !== 교점y) {
                            continue
                        }

                        교점찾음(교점x,교점y)
                    }
                }
            }


            // 교점 찾기
            if(교점x == null && 교점y == null ){

                if(a1 < 0){
                    negativeCnt++
                    // isA1Negative = true
                    // a1은 음수
                }
                if(a2 < 0){
                    negativeCnt++
                    // isA2Negative = true
                    // a2는 음수
                }
    
                // console.log('a1', a1, 'a2', a2);
                // a1 , a2
                const a1Abs = Math.abs(a1)
                const a2Abs = Math.abs(a2)
                const diff = a1Abs  - a2Abs
                let smallerAabs
                let biggerAabs
                if(diff < 0){
                    smallerAabs = a1Abs
                    biggerAabs = a2Abs
                } else if (diff > 0) {
                    smallerAabs = a1Abs
                    biggerAabs = a2Abs
                } else if (diff === 0)  {
                    // already same
                    xLCMabs = a1Abs
                }

                let multiply = 1
                // console.log('최소공배수 찾기전');
                while(true){
                    if(xLCMabs != null) break
                    const poweredAabs = smallerAabs * multiply
                    // console.log('smallerA', smallerA, 'multiply', multiply);
                    if(poweredAabs % biggerAabs === 0) {
                        xLCMabs = poweredAabs
                        // console.log('최소공배수 찾음 xLCM', xLCM);
                    }
                    multiply++
                }
    
                // console.log('smallerA', smallerA, 'biggerA', biggerA);
                // console.log('xLCM', xLCM);

                let line1Multiply = xLCMabs / a1Abs
                let line2Multiply = xLCMabs / a2Abs

                // console.log('line1Multiply', line1Multiply, 'line2Multiply', line2Multiply);
                if(negativeCnt % 2 === 1) {
                    line1Multiply = -(line1Multiply)
                }
                // console.log('negativeCnt', negativeCnt,  'xLCM', xLCM, 'negativeCnt', negativeCnt, 'line1Multiply', line1Multiply);
                // console.log();
                const a1mod = a1 * line1Multiply
                const b1mod = b1 * line1Multiply
                // console.log('b1', b1, 'line1Multiply', line1Multiply );
                const c1mod = c1 * line1Multiply

                const a2mod = a2 * line2Multiply
                const b2mod = b2 * line2Multiply
                const c2mod = c2 * line2Multiply
                // console.log('b1', b1 ,'b1mod', b1mod, 'b2',b2 ,'b2mod', b2mod);
                const b99 = b1mod - b2mod
                const c99 = c1mod - c2mod

                if(b99 === 0 ) {
                    // console.log('b1mod', b1mod, 'b2mod', b2mod);
                    // console.log('교점없거나 두직선완전일치');
                } else {
                    교점y = -c99 / b99
                    교점x = (-c1 -(b1 * 교점y)) / a1
                }
                // console.log('교점y', 교점y);
                // console.log('교점x', 교점x);
                if((교점x | 0) !== 교점x){
                    continue
                }
                if((교점y | 0) !== 교점y) {
                    continue
                }
            }

            if(교점x === -0){
                교점x = 0
            }
            if(교점y === -0){
                교점y = 0
            }
            const hashPos = 교점x + ',' + 교점y
            if(hash[hashPos] === true) { continue}
            교점들.push([교점x, 교점y])
            hash[hashPos] = true

            // console.log('교차점좌표 x와 y를 찾음','x', 교점x, 'y', 교점y);
        }
    }

    // console.log('교점들', 교점들);
    // console.log('교점찾기 끝', 'x', 교점x, 'y', 교점y);
    // 교점찾기 끝

    const maxX = 교점들.reduce( (prev, curr) => {
        if(prev < curr[0]) { return curr[0]}
        else return prev
    }, -99999999);
    const lowX  = 교점들.reduce( (prev, curr) => {
        if(prev > curr[0]) { return curr[0]}
        else return prev
    }, 99999999);;

    const maxY = 교점들.reduce( (prev, curr) => {
        if(prev < curr[1]) { return curr[1]}
        else return prev
    }, -99999999);
    const lowY =  교점들.reduce( (prev, curr) => {
        if(prev > curr[1]) { return curr[1]}
        else return prev
    }, 99999999);

    // console.log('maxX', maxX, 'lowX', lowX, 'maxY', maxY, 'lowY', lowY);
    // console.log('hash' , hash);

    for (let y= maxY ; y >= lowY ; y--) {
        let str = ''
        for (let x = maxX; x >= lowX ; x--) {
            const hashPos = x + ',' + y
            if(hash[hashPos]){
                str += "*"
            } else {
                str += '.'
            }
        }
        str += ''
        final.push(str)
    }
    // console.log(final);
    return final
}

// solution([[1, -1, 0], [2, -1, 0], [4, -1, 0]])
// solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]	)
// solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]	)
// solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]	)
solution([[0, 1, -1], [1, 0, -1], [1, 0, 1], [2, 9, 6], [-3, 0 , -3], [-1, -1, -1] , [-4, -4 ,-4]]	)