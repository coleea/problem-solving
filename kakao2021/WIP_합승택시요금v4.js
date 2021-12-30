const costHashs = {}
let hitcount = 0
function solution(노드수, start, dest1, dest2, tollArr) {

    // make tollinfo
    const tollInfo = Array(노드수+1)
    for (let i = 1; i < tollInfo.length; i++) {
        tollInfo[i] = [];
    }

    tollArr.map(toll=>{
        const tollStart = toll[0]
        const tollDest = toll[1]
        const cost = toll[2]

        tollInfo[tollStart].push({
            tollDest,
            cost
        })
        tollInfo[tollDest].push({
            tollDest : tollStart,
            cost
        })
    })

    let midpaths = []
    for (let i = 1; i <= 노드수; i++) {
        const finalDest =i
        // if(finalDest === start) continue
        let midpath = 다익스트라 (start, finalDest, tollInfo, 노드수)
        if(midpath === false) continue
        midpaths.push(midpath)
    }

    // console.log({costHashs}, 'Object.keys(costHashs).length',Object.keys(costHashs).length);

    // console.log('midpaths', midpaths);

    const midtoFinal = {
        [dest1]:[],
        [dest2]:[],
    }
    for (const finalDest of [dest1, dest2]) {
        // console.log('---');
        for (let i = 1; i <= 노드수; i++) {
            const start = i
            // const finalDest = dest1
            if(finalDest === start) continue
            const solution = 다익스트라 (start, finalDest, tollInfo, 노드수)
            if(solution === false) continue
            midtoFinal[finalDest].push(solution)
            // console.log({solution});
        }
    }
    // console.log({costHashs}, 'Object.keys(costHashs).length',Object.keys(costHashs).length);

    // console.log('midpaths', midpaths, 'midtoFinal', midtoFinal);
    const finalcosts = []
    for (const path of midpaths) {
        const midstart1 = path.currNode
        const half1cost = path.cost

        // find two 'mid to end'
        let finalCost = 0 ;
        finalCost+= half1cost
        for (const [k,paths] of Object.entries(midtoFinal)) {
            for (const path of paths) {
                const midStart2 = path.passedToll[0]
                const half2cost = path.cost

                if(midstart1 !== midStart2) continue
                finalCost+= half2cost
            }
        }
        finalcosts.push(finalCost)
    }
    // console.log({costHashs}, 'Object.keys(costHashs).length',Object.keys(costHashs).length);

    // console.log('finalcosts', finalcosts);
    finalcosts.sort((a,b) => a- b)
    const mincost = finalcosts[0]
    // console.log('mincost', mincost);
    return mincost
}




function 다익스트라 (start, finalDest, tollInfo, 노드수) {


    if(start === finalDest){
        return {
            passedToll: [start],
            cost : 0,
            costlog : [0],
            currNode : start,
        }
    }
    // 다익스트라 스타트
    // if(finalDest === start) continue
    // console.log('start', start, 'finalDest', finalDest);
    // console.log(1);
    const currLowest = 999999999
    const solutions = []

    const hash = start + ',' + finalDest
    const cached = costHashs[hash]
    if(false) {
    // if(cached != null) {
        // console.log('해쉬 히트 hash hit');

        hitcount++
        // console.log({hitcount});
        // console.log(' cache hit]  directly');

        // const currPath2 = JSON.parse(JSON.stringify(currPath))
        const currPath2 = {
            passedToll : [start],
            currNode : finalDest,
            cost : cached,
            costlog : []
        }
        // const passedToll = currPath2.passedToll

        // currPath2.passedToll.push(tollDest)
        // currPath2.currNode = finalDest
        // currPath2.cost+= cached
        // currPath2.costlog.push(cached)

        // console.log('currPath2', currPath2);
        // paths[tollDest].push(currPath2)
        return currPath2
        // solutions.push(currPath2)
    }



    const paths = Array(노드수+1)
    for (let i = 0; i < paths.length; i++) {
        paths[i] = [];
    }

    paths[start].push({
        passedToll : [start],
        cost : 0,
        costlog : [0],
        currNode : start,
    })

    // let currPath = paths[localStart][0]
    let prevLowestCost = 999999999
    let debugcnt = 0 ;
    while(true){

        // pick cheapest path
        // console.log('\n\n==new loop, paths', paths);
        const flatPaths = paths.flatMap(v=>v)
        flatPaths.sort((a,b)=> a.cost - b.cost)

        // current path info
        const currPath = flatPaths[0]
        const passedToll = currPath.passedToll
        const costlog = currPath.costlog
        const currCost = currPath.cost
        const localStart = currPath.currNode

        const hash = localStart + ',' + finalDest
        const cached = costHashs[hash]
        if(false) {
        // if(cached != null) {
            // console.log(' cache hit] to final dest');

            // console.log('\n\n==localStart', localStart, 'finalDest', finalDest);
            hitcount++
            // console.log({hitcount});

            // console.log({costHashs});
            const currPath2 = JSON.parse(JSON.stringify(currPath))
            const passedToll = currPath2.passedToll

            // currPath2.passedToll.push(tollDest)
            currPath2.currNode = finalDest
            currPath2.cost+= cached
            // currPath2.costlog.push(cached)

            // console.log('currPath2', currPath2);
            // console.log('currPath2', currPath2);
            // paths[tollDest].push(currPath2)
            solutions.push(currPath2)
            break ;
        }


        // 해쉬 제작
        for (let i = 0; i < passedToll.length - 1; i++) {
            const startnode = passedToll[i];
            for (let z = i + 1; z < passedToll.length; z++) {
                // if(i === z) continue
                const endnode = passedToll[z];
                const myCostlog = costlog.slice(i+1, z + 1)

                const myCostlog2 = JSON.parse(JSON.stringify(myCostlog) )
                const costSum = myCostlog2.reduce((p, c)=> p + c , 0)
                const hash = startnode + ',' + endnode
                if(!costHashs[hash]) {
                    costHashs[hash] = costSum
                    // console.log(`\n\n== 해쉬제작 startnode`, startnode, 'endnode', endnode, 'costSum', costSum);
                }
                // get cost
            }
        }

        // console.log('made : costHashs', costHashs, 'passedToll', passedToll, 'costlog', costlog );
        /*
            passedToll: [start],
            cost : 0,
            costlog : [0],
            currNode : start,

        */

        // get hash

/*         const hash = start + ',' + currPath.currNode
        costHashs[hash] = currPath.cost
 */
        if(localStart === finalDest) break ;
        // console.log('localStart', localStart);
        // const lowestCost = currPath.cost

        // console.log('prevLowestCost', prevLowestCost, 'lowestCost', lowestCost);
        // check djkstra ends
        // if(prevLowestCost < lowestCost) break
        // pick next nodes
        const availTolls = tollInfo[localStart]

        // console.log('availTolls', availTolls);
        // make path-obj
        availTolls.map(toll => {

            // make path-obj
            const currPath2 = JSON.parse(JSON.stringify(currPath))
            const passedToll = currPath2.passedToll

            // console.log('\n===currPath', currPath);
            const tollDest = toll.tollDest
            const tollcost = toll.cost
            // console.log('toll', toll);


            // 노드를 이미 거쳤는지 확인
            const isDoneNode = passedToll.some(node=> tollDest === node)
            if(isDoneNode) return
            // console.log('안거침, tollDest', tollDest, 'tollcost', tollcost);

            currPath2.passedToll.push(tollDest)
            currPath2.currNode = tollDest
            currPath2.cost+= tollcost
            currPath2.costlog.push(tollcost)

            // console.log('currPath2', currPath2);
            paths[tollDest].push(currPath2)

            if(tollDest === finalDest){
                solutions.push(currPath2)
            }
        })

        // console.log('solutions', solutions);
        // remove nth path
        paths[localStart] = []
        // console.log('done, paths', paths);

        // get lowest cost
        const flatPaths2 = paths.flatMap(v=>v)
        // console.log('paths', paths);
        flatPaths.sort((a,b)=> a.cost - b.cost)
        const lowestPath = flatPaths2[0]
        if(lowestPath == null) return false
        prevLowestCost = lowestPath.cost

        // console.log('paths[localStart]', paths[localStart], 'localStart', localStart);
    }
    // console.log('\n\n==solutions', solutions);
    solutions.sort((a,b) => a.cost - b.cost)
    const bestPath = solutions[0]
    // console.log(debugcnt++);
    // console.error('주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의');
    // if(debugcnt === 1) return
// console.log({bestPath});

return bestPath
}

/*
solution(6,4,6,2 ,
    [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]
)
 */

/* 
solution(7,3,4,1 ,
    [[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]]
)
 */

solution(6,4,5,6 ,
    [[2,6,6], [6,3,7], [4,6,7], [6,5,11], [2,5,12], [5,3,20], [2,4,8], [4,3,9]]
)

// 실행한 결괏값 341이(가) 기댓값 82와(과) 다릅니다.







