function solution(n, wires) {

    // console.log('wires', wires);
  let minDiff = 99999999;

  for (let skipIdx = 0; skipIdx < wires.length; skipIdx++) {

    const wiresCopied = JSON.parse(JSON.stringify(wires));
    const skippedWires1 = wiresCopied.slice(0, skipIdx);
    const skippedWires2 = wiresCopied.slice(skipIdx + 1);
    // console.log('skippedWires1', skippedWires1);
    // console.log('skippedWires2', skippedWires2);

    const graph1 = { edges: [], edgecount: 0 };
    const graph2 = { edges: [], edgecount: 0 };
    const skippedWires = skippedWires1.concat(skippedWires2);
    const skippedWiresFlat = skippedWires.flatMap(v=>v)
    skippedWires.sort((a, b) => a[0] - b[0]);
    // console.log('===skippedWires', skippedWires);

    for (let 노드 = 1; 노드 <= Array(n).length; 노드++) {
        // console.log('노드', 노드);
    // for (let z = 0; z < skippedWires.length; z++) {
      // console.log('graph1', graph1, 'graph2', graph2);
    //   const edge1 = skippedWires[z][0];
    // console.log('skippedWiresFlat', skippedWiresFlat);
    if(!skippedWiresFlat.includes(노드)) continue
    // console.log('노드', 노드);
    const edge1 = 노드;
    //   console.log('edge1', edge1);
    //   const edge2 = skippedWires[z][1];
    //   let isNowhere = true;
      if (graph1.edges.includes(edge1) || graph2.edges.includes(edge1)) {
        continue;
      }

      const nodeStartCnt = skippedWires.filter(arr=> arr[0] === edge1).length
    //   console.log('nodeStartCnt', nodeStartCnt);

        const allNeighborChecked = [];
        let sideInfo2;
        let sideInfo1 = whichSide(
          edge1,
          skippedWires,
          graph1,
          graph2,
          allNeighborChecked
        );
        // console.log('sideInfo1', sideInfo1);

        if (sideInfo1 == false) {

            if (graph1.edges.length === 0) {
                // console.log('그래프1이 length 0');
                graph1.edges.push(edge1);
                graph1.edgecount+=nodeStartCnt;
              } else if (graph2.edges.length === 0) {
                // console.log('그래프2가 length 0');
                graph2.edges.push(edge1);
                graph2.edgecount+=nodeStartCnt;
              }
          // console.log('여기까지오면에러2');
        } else {
          if (sideInfo1 === 1) {
            graph1.edges.push(edge1);
            graph1.edgecount+=nodeStartCnt
          } else if (sideInfo1 === 2) {
            graph2.edges.push(edge1);
            graph2.edgecount+=nodeStartCnt
          }
        }
    }

    // console.log('graph1', graph1, 'graph2', graph2);
/*
    if (graph2.edgecount === 0) {
      continue;
    }
 */
    const edgeDiff = Math.abs(graph1.edgecount - graph2.edgecount);
    // console.log('edgeDiff', edgeDiff);
    if (minDiff > edgeDiff) {
      minDiff = edgeDiff;
    }
  }
  console.log('minDiff', minDiff);
  return minDiff;
}

function whichSide(
  nodeStart,
  skippedWires,
  graph1,
  graph2,
  allNeighborChecked
) {
  const connectedNode = [];
  const allNeighborChecked2 = JSON.parse(JSON.stringify(allNeighborChecked));

  skippedWires.map((v) => {
    const node1 = v[0];
    const node2 = v[1];
    if (nodeStart === node1 && !allNeighborChecked2.includes(node2)) {
      connectedNode.push(node2);
    }
    if (nodeStart === node2 && !allNeighborChecked2.includes(node1)) {
      connectedNode.push(node1);
    }
  });

  if (connectedNode.length === 0) {
    return false;
  }

  let isFound = false;
  let _1or2;
  for (const dest of connectedNode) {
    if (graph1.edges.includes(dest)) {
      isFound = true;
      _1or2 = 1;
    } else if (graph2.edges.includes(dest)) {
      isFound = true;
      _1or2 = 2;
    }
  }

  allNeighborChecked2.push(nodeStart);

  if (isFound) {
    return _1or2;
  } else {
    let _1or2;

    for (const dest of connectedNode) {
      const _1or2 = whichSide(
        dest,
        skippedWires,
        graph1,
        graph2,
        allNeighborChecked2
      );

      if (_1or2 !== false) {
        return _1or2;
      }
    }
    return false;
  }
}

/*
solution(9, [
  [1, 5],
  [1, 2],
  [3, 4],
  [5, 6],
  [4, 9],
  [8, 9],
  [6, 7],
  [7, 8],
]); // 자작 그래프 테스트용
 */
solution(7,  [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]		)
// solution(3,  [[1,3] [2,3]]                               )
// solution(3, [[1,3] [2,3]] )
