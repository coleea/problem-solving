function solution(n, wires) {

    let minDiff = 99999999 ;
    for (let skipIdx = 0; skipIdx < wires.length; skipIdx++) {

        const wiresCopied = JSON.parse(JSON.stringify(wires))
        const skippedWires1 = wiresCopied.slice(0, skipIdx)
        const skippedWires2 = wiresCopied.slice(skipIdx + 1)

        const graph1 = {edges : [], edgecount : 0}
        const graph2 = {edges : [], edgecount : 0}
        const skippedWires = skippedWires1.concat(skippedWires2)
        skippedWires.sort((a,b)=> a[0] - b[0])

        for (let z = 0; z < skippedWires.length; z++) {
            // console.log('graph1', graph1, 'graph2', graph2);
            const edge1 = skippedWires[z][0]
            const edge2 = skippedWires[z][1]

            let isNowhere = true
            if(graph1.edges.includes(edge1) && graph1.edges.includes(edge2) ){
                continue
            } else if(graph2.edges.includes(edge1) && graph2.edges.includes(edge2) ){
                continue
            }

            if(graph1.edges.includes(edge1) && !graph1.edges.includes(edge2) ){
                graph1.edges.push(edge2)
                graph1.edgecount++
                isNowhere= false
            } else if(graph1.edges.includes(edge2)  && !graph1.edges.includes(edge1)) {
                graph1.edges.push(edge1)
                graph1.edgecount++
                isNowhere= false
            } else if (graph2.edges.includes(edge1)   && !graph2.edges.includes(edge2) ){
                graph2.edges.push(edge2)
                graph2.edgecount++
                isNowhere= false
            }  else if (graph2.edges.includes(edge2) && !graph2.edges.includes(edge1) ){
                graph2.edges.push(edge1)
                graph2.edgecount++
                isNowhere= false
            }

            if(isNowhere){


                const allNeighborChecked = []
                let sideInfo1 = whichSide(edge1, skippedWires, graph1, graph2 ,allNeighborChecked )
                // console.log('sideInfo1', sideInfo1);
                let sideInfo2 ;
                if(sideInfo1 == false){
                    sideInfo2 = whichSide(edge2, skippedWires, graph1, graph2 , allNeighborChecked )

                    if(sideInfo2 === false) {
                        // console.log('all side error');
                        if(graph1.edges.length === 0){
                            // console.log('그래프1이 length 0');
                            graph1.edges.push(edge1)
                            graph1.edges.push(edge2)
                            graph1.edgecount++
                        } else if(graph2.edges.length === 0){
                            // console.log('그래프2가 length 0');
                            graph2.edges.push(edge1)
                            graph2.edges.push(edge2)
                            graph2.edgecount++
                        } else {
                            // console.log('완전에러');
                        }
                    } if(sideInfo2 === 1) {
                        graph1.edges.push(edge1)
                        graph1.edges.push(edge2)
                        graph1.edgecount++
                    } else if(sideInfo2 === 2) {
                        graph2.edges.push(edge1)
                        graph2.edges.push(edge2)
                        graph2.edgecount++
                    }
                    // console.log('여기까지오면에러2');
                } else {
                    if(sideInfo1 === 1) {
                        graph1.edges.push(edge1)
                        graph1.edges.push(edge2)
                        graph1.edgecount++
                    } else if(sideInfo1 === 2) {
                        graph2.edges.push(edge1)
                        graph2.edges.push(edge2)
                        graph2.edgecount++
                    }
                }
            }
        }

        if(graph2.edgecount === 0) { continue }
        // console.log('===graph1', graph1);
        // console.log('graph2', graph2);
        const edgeDiff = Math.abs(graph1.edgecount - graph2.edgecount)
        console.log('edgeDiff', edgeDiff);
        // console.log('edgeDiff', edgeDiff,  'graph1.edgecount' , graph1.edgecount, 'graph2.edgecount', graph2.edgecount);
        if(minDiff > edgeDiff){
            minDiff = edgeDiff
        }
        // const element = wires[skipIdx];
    }
    console.log('minDiff', minDiff);
    return minDiff
}

function whichSide(nodeStart, skippedWires, graph1, graph2, allNeighborChecked) {
    // if(currNodeCnt === )
    // find connectedNode
    const connectedNode =[]
    const allNeighborChecked2 = JSON.parse(JSON.stringify(allNeighborChecked))
/* 
 console.log('nodeStart', nodeStart ,'allNeighborChecked2', allNeighborChecked2,
    'graph1', graph1,
    'graph2', graph2,);
 */
    skippedWires.map(v=>{
        const node1= v[0]
        const node2= v[1]
        if(nodeStart === node1 && !allNeighborChecked2.includes(node2)) {
            connectedNode.push(node2)
            // alreadyChecked.push(node2)
        }
        if(nodeStart === node2 && !allNeighborChecked2.includes(node1)){
            connectedNode.push(node1)
            // alreadyChecked.push(node1)
        }
    })

    if(connectedNode.length === 0) {
        return false
    }

    // 연결 노드를 찾음
    let isFound = false
    let _1or2 ;
    for (const dest of connectedNode) {
        if(graph1.edges.includes(dest)){
            // console.log('소속그래프 === 1');
            isFound = true
            _1or2 = 1
            // found
        } else if(graph2.edges.includes(dest)){
            // console.log('소속그래프 === 2');
            isFound = true
            _1or2 = 2
        }
    }

    allNeighborChecked2.push(nodeStart)
    // 소속 그래프를 찾음
    if(isFound){
        return _1or2
    } else {
        let _1or2 ;

        // 재귀의 재귀의 재귀 .. 과정에서 최소 한개는 _1or2값을 찾는다
        for (const dest of connectedNode) {
            const _1or2 = whichSide(dest, skippedWires, graph1, graph2, allNeighborChecked2)

            // 연결된 노드가 없을경우 _1or2는 false

            if(_1or2 !== false) {
                return _1or2
                // break ;
            }
            // const _1or2 = whichSide(dest , skippedWires, graph1, graph2)
        }


        // 여기까지 오면 에러
        // console.log(`여기까지 오면 에러z`);
        return false
        // return
    }
}


solution(9, [[1,5],[1,2],[3,4],[5,6],[4,9],[8,9],[6,7], [7,8]]	) // 자작 그래프 테스트용
// solution(7,  [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]		)