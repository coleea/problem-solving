// WIP
function solution(노드수, start, dest1, dest2, tollArr) {

    // make tollinfo
    const tollInfo = Array(노드수+1)
    for (let i = 0; i < tollInfo.length; i++) {
        tollInfo[i] = [];
    }

    // console.log({tollInfo});
    // console.log('tollArr.length', tollArr.length);
    tollArr.map(toll=>{
        const tollStart = toll[0]
        const tollDest = toll[1]
        const cost = toll[2]
        // console.log('tollStart', tollStart, 'tollDest', tollDest, 'cost', cost);
        // if(tollInfo[tollStart] == null) tollInfo[tollStart] = []
        tollInfo[tollStart].push({
            tollDest,
            cost
        })
        tollInfo[tollDest].push({
            tollDest : tollStart,
            cost
        })
    })
    // console.log('tollInfo', tollInfo);
    // console.log('노드수', 노드수);
    for (let i = 1; i <= 노드수; i++) {

        const element = 노드수[i];
        // 다익스트라 스타트
        const finalDest =i
        if(finalDest === start) continue

        const solution = 다익스트라 (start, finalDest, tollInfo, 노드수)
/* 
        console.log('solution', solution);
        // console.log('start', start, 'finalDest', finalDest);
        // console.log(1);
        const paths = Array(노드수+1)
        const solutions = []
        for (let i = 0; i < paths.length; i++) {
            paths[i] = [];
        }

        paths[start].push({
            passedToll : [start],
            cost : 0,
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
            const currPath = flatPaths[0]
            // console.log('=====');

            // get path info
            const localStart = currPath.currNode
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
                // console.log('currPath2', currPath2);
                paths[tollDest].push(currPath2)

                if(tollDest === finalDest){
                    solutions.push(currPath2)
                }
            })

            // remove nth path
            paths[localStart] = []
            // console.log('done, paths', paths);

            // get lowest cost
            const flatPaths2 = paths.flatMap(v=>v)
            flatPaths.sort((a,b)=> a.cost - b.cost)
            const lowestPath = flatPaths2[0]
            prevLowestCost = lowestPath.cost

            // console.log('paths[localStart]', paths[localStart], 'localStart', localStart);
            // console.log(debugcnt++);
            // console.error('주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의');
            // if(debugcnt === 2) return
        }
        // console.log('\n\n==solutions', solutions);
        solutions.sort((a,b) => a.cost - b.cost)
        const bestPath = solutions[0]
        console.log({bestPath});
        */
    }
}




function 다익스트라 (start, finalDest, tollInfo, 노드수) {

    // 다익스트라 스타트
    // if(finalDest === start) continue
    // console.log('start', start, 'finalDest', finalDest);
    // console.log(1);
    const currLowest = 999999999
    const solutions = []
    const paths = Array(노드수+1)
    for (let i = 0; i < paths.length; i++) {
        paths[i] = [];
    }

    paths[start].push({
        passedToll : [start],
        cost : 0,
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
        const currPath = flatPaths[0]
        // console.log('=====');

        // get path info
        const localStart = currPath.currNode
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
            // console.log('currPath2', currPath2);
            paths[tollDest].push(currPath2)

            if(tollDest === finalDest){
                solutions.push(currPath2)
            }
        })

        // remove nth path
        paths[localStart] = []
        // console.log('done, paths', paths);

        // get lowest cost
        const flatPaths2 = paths.flatMap(v=>v)
        flatPaths.sort((a,b)=> a.cost - b.cost)
        const lowestPath = flatPaths2[0]
        prevLowestCost = lowestPath.cost

        // console.log('paths[localStart]', paths[localStart], 'localStart', localStart);
        // console.log(debugcnt++);
        // console.error('주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의주의');
        // if(debugcnt === 2) return
    }
    // console.log('\n\n==solutions', solutions);
    solutions.sort((a,b) => a.cost - b.cost)
    const bestPath = solutions[0]
    console.log({bestPath});

return bestPath
}


solution(6,4,6,2 ,
    [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]
)

// 실행한 결괏값 341이(가) 기댓값 82와(과) 다릅니다.







