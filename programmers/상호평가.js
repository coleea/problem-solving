function solution(scores) {
    let 학점표 = ``

    for (let i = 0; i < scores.length; i++) {
        // const element = scores[z];
        let 자기점수 ;
        let 원본점수목록 = [];
        let 점수갯수 = scores.length

        for (let z = 0; z < scores.length; z++) {
            const 점수 = scores[z][i];
            원본점수목록.push(점수)
            if(i === z) {자기점수 = 점수}
        }

        let 점수목록1 = JSON.parse(JSON.stringify(원본점수목록))
        console.log('점수목록1', 점수목록1);
        점수목록1.sort((a,b) => a-b)
        let 최대값 = 점수목록1[점수목록1.length - 1]
        let 둘째최대값 = 점수목록1[점수목록1.length - 2]
        let 최소값 = 점수목록1[0]
        let 둘째최소값 = 점수목록1[1]

        if(최대값 === 자기점수 && 자기점수 !== 둘째최대값 ) {
            console.log('띵');
            원본점수목록[i] = 0
            점수갯수--
        } else  if(최소값 === 자기점수 && 자기점수 !== 둘째최소값){
            console.log('띵2');
            원본점수목록[i] = 0
            점수갯수--
        }
        console.log('원본점수목록', 원본점수목록, '점수갯수', 점수갯수);
        const 평균 = 원본점수목록.reduce((prev,curr)=>prev+curr, 0) / 점수갯수
        console.log('평균', 평균);
        if(평균 >= 90){
            학점표 += 'A'
        } else if(평균 >= 80 && 평균 < 90 ){
            학점표 += 'B'
        } else if(평균 >= 70 && 평균 < 80){
            학점표 += 'C'
        } else if(평균 >= 50 && 평균 < 70){
            학점표 += 'D'
        } else {
            학점표 += 'F'
        }

    }
    console.log('학점표', 학점표);
    return 학점표

}

solution([[50, 90], [50, 87]]	)