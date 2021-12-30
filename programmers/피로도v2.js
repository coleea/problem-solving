let 기록 = 0

function solution(체력, dungeons) {
    const level = 1
    DFS(체력, dungeons, level)
    // var answer = -1;
    // return answer;
    console.log('기록', 기록);
    return 기록
}

function DFS (체력, dungeons, level) {
    if(dungeons.length === 0) return

    for (let i = 0; i < dungeons.length; i++) {
        const dungeon = dungeons[i];
        if(dungeon === null) continue

        const required = dungeon[0]
        if(체력 < required) continue

        // 탐험 가능
        const cost = dungeon[1]
        // if(체력 < cost) continue
        let 새체력 = 체력 - cost
        // 체력 -= cost
        if(기록 < level) {
            기록 = level
        }

        const newDungeons =  JSON.parse(JSON.stringify(dungeons))
        newDungeons[i] = null
        // dungeons를 새로 만든다
        DFS (새체력, newDungeons, level + 1)
    }
}

solution(80, [[80,20],[50,40],[30,10]]	)