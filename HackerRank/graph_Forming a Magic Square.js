function formingMagicSquare(s) {

    let minCost = 9999999

    for(let i = 0 ; i < 3 ; i++){

        console.log('======= 1st try');

        let flatMat1 =  JSON.parse(JSON.stringify(s.flatMap(e=>e)));
        console.log('flatMat1', flatMat1);
        let currentCost = 0
        let _2ndRowPassIdx = []
        let _1target = flatMat1[i] ;

        let _1rowSum = flatMat1[0] + flatMat1[1] + flatMat1[2]
        var _1diff = 15 - _1rowSum
        var _1mod = _1target + _1diff
        if(_1mod < 1 || _1mod > 9 ) continue
        console.log('i', i , '_1target', _1target, '_1targetMod', _1mod, '| original', flatMat1[0] , flatMat1[1] , flatMat1[2])
        currentCost += Math.abs(_1diff)
        console.log('_1targetMod', _1mod, 'currentCost', currentCost);
        flatMat1[i] = _1mod

        _2ndRowPassIdx.push(i+3)

        for(let _1_2_idx of [i, i+3, i+6]){

            let flatMat1_2 =  JSON.parse(JSON.stringify(flatMat1));

            if(_1_2_idx >= 3){

                let requireNum
                let cost
                if(_1_2_idx >=3 && _1_2_idx <= 5 ){
                     requireNum = 15 - flatMat1_2[i] - flatMat1_2[i+6]
                     if(requireNum <= 0 || requireNum >= 10 ) continue
                     cost = Math.abs(flatMat1_2[i+3] - requireNum)
                    currentCost += Math.abs(cost)
                    flatMat1_2[i+3] = requireNum
                } else if(_1_2_idx >=6 ){
                    requireNum = 15 - flatMat1_2[i] - flatMat1_2[i+3]
                    if(requireNum <= 0 || requireNum >= 10 ) continue
                    cost = Math.abs(flatMat1_2[i+6] - requireNum)
                    currentCost += Math.abs(cost)
                    flatMat1_2[i+6] = requireNum
                }

                console.log(i,'idx column changed, _1_2mod : ', requireNum, '|' , _1mod  , requireNum , flatMat1[i+(3 * 2)]);
            }

            if( 15 !== flatMat1_2[i] + flatMat1_2[i+3] + flatMat1_2[i+6]) continue ;

            for(let _2ndIdx = 3 ;  _2ndIdx < 3 + 3 ; _2ndIdx++){

                if(_2ndRowPassIdx.includes(_2ndIdx)) continue
                if( _2ndIdx === i+ 3){continue}

                let _3rdRowPassIdx = []
                let flatMat2 = JSON.parse(JSON.stringify(flatMat1_2));
                console.log('----2nd ',flatMat2, '_2ndIdx', _2ndIdx);

                let _2ndTarget = flatMat2[_2ndIdx] ;
                const _2ndRowSum = flatMat2[3] +  flatMat2[4] + flatMat2[5]
                var _2targetDiff = 15 - _2ndRowSum
                var _2targetMod = _2ndTarget + _2targetDiff
                if(_2targetMod <= 0 || _2targetMod >= 10 ) continue
                flatMat2[_2ndIdx]  = _2targetMod
                currentCost += Math.abs(_2targetDiff)

                console.log('_2ndRowSum', _2ndRowSum ,'_2targetMod', _2targetMod);

                var _2_2_sum = flatMat2[_2ndIdx+(3 * -1)] + flatMat2[_2ndIdx] + flatMat2[_2ndIdx+(3 * 1)]

                if(_2_2_sum !== 15) {
                    var _2_2Diff = 15 - _2_2_sum
                    var _2_2targetMod = flatMat2[_2ndIdx+(3 * 1)] + _2_2Diff
                    flatMat2[_2ndIdx + 3]  = _2_2targetMod
                    if(_2_2targetMod <= 0 || _2_2targetMod >= 10 ) continue
                    currentCost += Math.abs(_2_2Diff)

                    // var _2colSumMod = flatMat2[_2ndIdx - 3]  + flatMat2[_2ndIdx]  + flatMat2[_2ndIdx + 3]
                    console.log(_2ndIdx,'(2nd idx) column changed, _2_2targetMod : ', flatMat2[_2ndIdx] , '|' ,flatMat2[_2ndIdx+(3 * -1)]  , _2targetMod , _2_2targetMod);
                    _3rdRowPassIdx.push(_2ndIdx+ 3)
                }

                console.log('currentCost', currentCost);
    
                if(true){
    
                    for(let _3Idx = 6 ;  _3Idx < 6 + 3 ; _3Idx++){

                        if(_3rdRowPassIdx.includes(_3Idx)) continue
                        if( _3Idx === i + (3 * 2) || _3Idx ===  _2ndIdx + 3 ){
                            continue
                        }

                        let flatMat3 = JSON.parse(JSON.stringify(flatMat2));

                        console.log('3rd', flatMat3);
                        let _3Target = flatMat3[_3Idx] ;
                        const _3RowSum = flatMat3[6] +  flatMat3[7] + flatMat3[8]
                        var _3Diff = 15 - _3RowSum
                        var _3targetMod = _3Target + _3Diff
                        if(_3targetMod <= 0 || _3targetMod >= 10 ) continue
                        flatMat3[_3Idx] = _3targetMod
                        currentCost += Math.abs(_3Diff)

                        console.log('_3Idx', _3Idx, '_3Idx');
                        var _3colSumMod = flatMat3[_3Idx - 6] + flatMat3[_3Idx - 3 ] + _3targetMod

                        if(_3colSumMod === 15){
                            console.log('3rd success, currentCost', currentCost, 'diagonal', flatMat3[0] + flatMat3[4] + flatMat3[8] );
                            console.log(flatMat3);

                            if(flatMat3[0] + flatMat3[4] + flatMat3[8] === 15) {
                                console.log('final success : currentCost', currentCost);
                                if(minCost > currentCost) {
                                  minCost = currentCost
                                  console.log('mincost updated');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
   console.log('return mincost', minCost);
   return minCost
}

// 4 4 7
// 3 1 5
// 1 7 9
const arg = [
[ 4, 4, 7 ],
[ 3, 1, 5 ],
[ 1, 7, 9 ] ] // 모범답 20

formingMagicSquare(arg)