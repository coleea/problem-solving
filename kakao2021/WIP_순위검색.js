let profileObjs = []
function solution(profiles, queries) {

    let cacheStep = Array(4)
    let final = []

    // make profiles
    for (const profile of profiles) {
        const 정보배열 = profile.split(' ')

        profileObjs.push({
            해시 : profile.trim(),
            언어 : 정보배열[0].trim(),
            포지션 : 정보배열[1].trim(),
            직책 : 정보배열[2].trim(),
            취향 : 정보배열[3].trim(),
            점수 : Number(정보배열[4]),
        })
    }

    // search queries
    for (const queryStr of queries) {

        let queryArr2 = queryStr.replace(/and /g,'').split(' ')
        let queryArr = queryArr2.map(v=>v.trim())
        let profiles = JSON.parse(JSON.stringify(profileObjs))

            // search queries
        for (let i = 0; i < queryArr.length; i++) {
            // console.log('현재까지필터', 현재까지필터);
            const ithQuery = queryArr[i]
            // console.log('특정쿼리', 특정쿼리);
            switch (i) {
                case 0:
                    if(ithQuery === '-') continue
                    profiles.filter((객체,idx,arr)=>{
                        if(객체 == null) return
                        if(객체.언어[0] !== ithQuery[0]) {
                            profiles[idx] = null
                        }
                    })
                    break;
                case 1:
                    if(ithQuery === '-') continue
                    profiles.filter((객체,idx,arr)=>{
                        if(객체 == null) return
                        if(객체.포지션[0] !== ithQuery[0]) {
                            profiles[idx] = null
                        }
                    })
                    break;
                case 2:
                    if(ithQuery === '-') continue
                    profiles.filter((객체,idx,arr)=>{
                        if(객체 == null) return
                        if(객체.직책[0] !== ithQuery[0]) {
                            profiles[idx] = null
                        }
                    })
                    break;
                case 3:
                    if(ithQuery === '-') continue
                    profiles.filter((객체,idx,arr)=>{
                        if(객체 == null) return
                        if(객체.취향[0] !== ithQuery[0]) {
                            profiles[idx] = null
                        }
                    })
                    break;
                case 4:
                    if(ithQuery === '-') continue
                    profiles.filter((객체,idx,arr)=>{
                        if(객체 == null) return
                        if(객체.점수 < Number(ithQuery)) {
                            profiles[idx] = null
                        }
                    })
                    break;
            }
        }

        // 필터완료
        // console.log('현재까지필터', 현재까지필터);
        const 필터된수 = profiles.filter(e=> e != null).length
        // console.log('필터된수', 필터된수);
        final.push(필터된수)
    }

    console.log('최종리턴값', final);
    return final
}



let 인포 = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]
let 쿼리 = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]
// let 쿼리 = ["- and - and - and - 100000"]
// let 쿼리 = ["python and frontend and senior and chicken 200"]
// let 쿼리 = ["java and backend and junior and pizza 100"]
solution(인포,쿼리)