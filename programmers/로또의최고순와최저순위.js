const 등수객체 = {
    6:1,
    5:2,
    4:3,
    3:4,
    2:5,
    1:6,
    0:6,
}

function solution(로또번호배열, 당첨번호) {
    var answer = [];
    let 리턴값 = [] // 최고등수,최저등수

    // return answer;
    let 당첨카운터 = 0
    let 언노운카운터 = 0
    for (const 번호 of 로또번호배열) {
        if(번호 === 0){
            언노운카운터++
        }
        if(당첨번호.includes(번호)){
            당첨카운터++
        }
    }
    console.log({당첨카운터});
    console.log({언노운카운터});
    리턴값.push(등수객체[당첨카운터 + 언노운카운터])
    리턴값.push(등수객체[당첨카운터])
    console.log('리턴값', 리턴값);



    return 리턴값
}

solution([0,0,0,0,0,0],
    [31, 10, 45, 1, 6, 19]
    )