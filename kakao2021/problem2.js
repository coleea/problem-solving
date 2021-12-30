// https://programmers.co.kr/learn/courses/30/lessons/72411?language=javascript

function solution(주문들, 요구길이){

    let 누적객체 ={}

    for (const 주문 of 주문들) {
        // console.log('주문', 주문);
       const  결과 =  컴비네이션(주문, 요구길이)
       console.log('결과', 결과);

       for (const [조합,v] of Object.entries(결과)) {
            if(누적객체[조합]) {
                누적객체[조합] += 1
            } else {
                누적객체[조합] = 1
            }
       }
    }

    console.log('누적객체', 누적객체);
    let 길이별최대카운트 = {}

    for (const [조합,누적합] of Object.entries(누적객체)) {
        const 길이 = 조합.length
        if(! 요구길이.includes(길이)) {
            delete 누적객체[조합]
        } else {
            if(!길이별최대카운트[길이]){
                길이별최대카운트[길이] = 누적합
            }  else if(길이별최대카운트[길이] < 누적합) {
                길이별최대카운트[길이] = 누적합
            }
        }
    }

    console.log('길이별최대카운트', 길이별최대카운트);
    console.log('누적객체(길이필터링)', 누적객체);
    let 최종리턴값 = []

    for (const [조합,카운트] of Object.entries(누적객체)) {
        if(길이별최대카운트[조합.length] === 카운트){
            if(카운트 >= 2){
                최종리턴값.push(조합 )
            }
        }
        // if(조합.length)
        // 최종리턴값.push(key )
    }
    // console.log('최종리턴값', 최종리턴값);
/*
    최종리턴값.sort((a,b)=>  {
        const a여백 = 4 - a.length
        const b여백 = 4 - b.length
        const 수정된a = a + 'Z'.repeat(a여백)
        const 수정된b = b + 'Z'.repeat(b여백)
        // console.log('수정된a', 수정된a, '수정된b', 수정된b);
        return 수정된a - 수정된b
    }) ;
 */
    최종리턴값.sort() ;
    console.log('최종리턴값', 최종리턴값);
    return 최종리턴값
}

function 컴비네이션(문자열, courseSize) {
    // console.log('courseSize', courseSize);
    const 조합객체 = {}
    const 필터된조합객체 = {}
    // let courseSize = [2,3,4]
    let loopRemain = 문자열.length
// console.log('loopRemain', loopRemain);
    for (const 문자 of 문자열) {
        // console.log('?');
        조합객체[문자] = 1
    }
    loopRemain-- ;
    // console.log('조합객체', 조합객체);

    while(loopRemain > 0){

        for (const 문자 of 문자열) {
            // console.log('문자', 문자);
            for(const [조합,v] of Object.entries(조합객체)){
                // console.log('문자', 문자, '조합[조합.length -1 ]', 조합[조합.length -1 ]);
                if(조합[조합.length -1 ] < 문자){
                    // console.log(1);
                    const 신조합 = 조합 +문자
                    조합객체[신조합] = 1
                    /*
                    if(!조합객체[신조합]) {
                        조합객체[신조합] = 1
                    } else {
                        조합객체[신조합] = 1
                    }
                    */
                }
            }
        }
        loopRemain--
    }
    // console.log('조합객체', 조합객체);
    // console.log('경우의수', Object.keys(조합객체).length );

    for (const [조합,v] of Object.entries(조합객체)) {
        if(courseSize.includes(조합.length)){
            필터된조합객체[조합] = 1
        }
    }
    // console.log('필터된조합객체', 필터된조합객체);
    return 필터된조합객체
}


    // const 문자열 = "ABCFG"
// 컴비네이션("ABCFG")
const orders =  [ 'ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH' ]
const course =  [ 2, 3, 4 ]

// const orders =  ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]
// const course =  [ 2, 3, 5 ]

solution(orders , course)
