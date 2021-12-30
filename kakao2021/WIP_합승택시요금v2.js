// WIP
function solution(버텍스갯수, 최초시작, a, b, 요금리스트) {
    let 시작별요금 = {}
    let 확정경로 = {}
    let a경로All = []
    let b경로All = []
    let 리턴값 = 9999999
    for (const 요금정보 of 요금리스트) {
        const 시작점 = 요금정보[0]
        const 도착점= 요금정보[1]
        const 요금= 요금정보[2]
        if(!시작별요금[시작점] ){
            시작별요금[시작점]  = []
        }
        if(!시작별요금[도착점] ){
            시작별요금[도착점]  = []
        }
        시작별요금[시작점].push({
            도착점,
            요금
        })
        시작별요금[도착점].push({
            도착점 : 시작점,
            요금
        })
    }

    let 루프횟수 = 0
    // const 지점배열 = 요금객체[시작]
    확정경로[0] = []
    for (const 요금obj of 시작별요금[최초시작]) {
        // console.log(요금obj);
        // console.log('지점객체', 요금obj);
        // console.log('지점객체.도작점', 요금obj.도착점);
        // const obj = {
        //     경로 : 최초시작 + '' + 요금obj.도착점 ,
        //     총비용 : [0, 요금obj.요금]
        // }
        // obj.총비용.push(요금obj.요금)
        const 경로obj = {
            경로 : 최초시작 + '' + 요금obj.도착점 ,
            총비용 : [0, 요금obj.요금]
        }
        확정경로[루프횟수].push(경로obj)
        if(요금obj.도착점 === a) {
            a경로All.push(경로obj)
        } else if(요금obj.도착점 === b) {
            b경로All.push(경로obj)
        }
    }
    루프횟수++;
    // console.log('요금객체', 요금객체);
    // console.log('모든경로', 모든경로);
    // console.log(확정경로);
    while(루프횟수 < 버텍스갯수){
        if(!확정경로[루프횟수]) {확정경로[루프횟수] = []}

        for(const 루프별경로 of 확정경로[루프횟수-1]){

            const 총경로 = 루프별경로.경로
            // if(총경로.includes(a) || 총경로.includes(b)  ) continue
            const 총비용 = 루프별경로.총비용
            const 가장최근 = 총경로[총경로.length - 1]
            // console.log('경로', 경로);
            // console.log('시작별요금[출발]' , 시작별요금[출발]);
            // console.log('출발', 출발);


            for (const 요금arr of 시작별요금[가장최근]) {

                const 총비용temp = JSON.parse(JSON.stringify(총비용))
                const 도착 = 요금arr.도착점
                if(총경로.includes(도착)) continue

                // console.log('도착', 도착);
                // const 요금 = 요금arr.요금
                // console.log('요금arr.요금', 요금arr.요금);
                총비용temp.push(요금arr.요금)
                const path = {
                    경로 : 총경로 + '' + 도착 ,
                    총비용 : 총비용temp,
                }
                // 총비용.pop()
                if(도착 === a) {
                    a경로All.push(path)
                } else if(도착 === b) {
                    b경로All.push(path)
                }

                    확정경로[루프횟수].push(path)

            }
        }
        루프횟수++;
    }

    // var answer = 0;
    // return answer;
    for (const a객체 of a경로All) {
        let a경로 = a객체.경로
        for (const b객체 of b경로All) {
            let b경로 = b객체.경로
            for (let i = 0; i < a경로.length ; i++) {
                if(a경로[i] !== b경로[i]){
                    // i-1까지의 배열을 구한다
                    const 공통비용 = a객체.총비용
                    .slice(0,i)
                    .reduce((prev,curr) => prev + curr ,0)

                    const a총비용 = a객체.총비용.reduce((prev,curr) => prev + curr ,0)
                    const a독자비용 = a객체.총비용.reduce((prev,curr) => prev + curr ,0) - 공통비용

                    const b총비용 = b객체.총비용.reduce((prev,curr) => prev + curr ,0)
                    const b독자비용 = b객체.총비용.reduce((prev,curr) => prev + curr ,0) - 공통비용

                    const 최종비용 =  (a독자비용 + b독자비용) + 공통비용
                    // console.log('최종비용', 최종비용,'공통비용', 공통비용, 'a독자비용', a독자비용, 'b독자비용', b독자비용, 'a객체.경로', a객체.경로, 'b경로', b경로,  'a총비용', a총비용, 'b총비용', b총비용, 'a객체', a객체, 'b객체' , b객체);
                    if(최종비용 < 리턴값 ){
                        리턴값 = 최종비용
                    }


                    break ;
                }
            }
        }
    }
    console.log('리턴값', 리턴값);
    return 리턴값
}



solution(6,4,5,6 ,
    [[2,6,6], [6,3,7], [4,6,7], [6,5,11], [2,5,12], [5,3,20], [2,4,8], [4,3,9]]
    )

// 실행한 결괏값 341이(가) 기댓값 82와(과) 다릅니다.
