function solution(weights, head2head) {

    let 올스탯 = []
    for (const _ of Array(weights.length)) {
        올스탯.push({
            battleCount : 0,
            winCount : 0,
            winRate : 0,
            winBonus : 0,
            weight : 0,
            idx : 0,
        })
    }

    let battleCount = Array(head2head.length).fill(0)
    let winCount = Array(head2head.length).fill(0)
    let winRate = Array(head2head.length)
    let winBonus = Array(head2head.length).fill(0)

    for (let i = 0; i < head2head.length; i++) {
        // const element = head2head[i];
        // console.log('---');
        // console.log('올스탯', 올스탯);
        let 나 = 올스탯[i]
        나.idx = i
        나.weight = weights[i]

        for (let z = 0; z < head2head.length; z++){
            const isWin =head2head[i][z]
            if(isWin !== 'N'){
                나.battleCount++
                // battleCount[i]++
            }
            if(isWin === 'W'){
                나.winCount++
                // winCount[i]++
                const 자기자신몸무게 = weights[i]
                const 상대몸무게 = weights[z]
                if(자기자신몸무게 < 상대몸무게){
                    나.winBonus++
                    // winBonus[i]++
                }
            }
        }
        if(나.battleCount === 0) {
            나.winRate = 0
        } else {
            나.winRate = 나.winCount / 나.battleCount
        }
    }
    console.log('올스탯', 올스탯);
    올스탯.sort(정렬)
    let 최종리턴값 = []
    for (const info of 올스탯) {
        최종리턴값.push(info.idx  +1)

    }
    console.log('최종리턴값', 최종리턴값);
    return 최종리턴값
    // var answer = [];
    // return answer;
}

function 정렬(a,b) {
    if(a.winRate > b.winRate) {
        return -1
     } else if(b.winRate > a.winRate) {
        return 1
     } else if(b.winRate === a.winRate) {
        if(a.winBonus > b.winBonus){
            return -1
        } else if(a.winBonus < b.winBonus){
            return 1
        } else {
            if(a.weight > b.weight ){
                return -1
            } else if(a.weight < b.weight ){
                return 1
            } else {
                if(a.idx < b.idx ){
                    return -1
                } else if(a.idx > b.idx ){
                    return 1
                }
            }
        }
     }
}
/*
            battleCount : 0,
            winCount : 0,
            winRate : 0,
            winBonus : 0,
            weight : 0,
*/
solution([60, 70, 60], ["NNN", "NNN", "NNN"]
    )