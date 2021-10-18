function steadyGene(gene) {

    const eachTargetNum = gene.length / 4
    const geneArr = gene.split('')
    const aCnt = geneArr.filter(e => e === 'A').length
    const eachCurrentNum = {
        A :geneArr.filter(e => e === 'A').length,
        G :geneArr.filter(e => e === 'G').length,
        C :geneArr.filter(e => e === 'C').length,
        T :geneArr.filter(e => e === 'T').length,
    }
    console.log('eachCurrentNum', eachCurrentNum);
    const eachRequiredNum = {
        A: eachTargetNum - eachCurrentNum.A,
        G: eachTargetNum - eachCurrentNum.G,
        C:eachTargetNum - eachCurrentNum.C,
        T:eachTargetNum - eachCurrentNum.T,
    }
    console.log('eachRequiredNum', eachRequiredNum);
    const removeTarget = {}
    let requiredMinLen  = 0;

    for(const key of Object.keys(eachRequiredNum)){
        if(eachRequiredNum[key] < 0) {
            requiredMinLen += Math.abs(eachRequiredNum[key])
            removeTarget[key] = {
                remainNum : eachRequiredNum[key],
                isSuccess : false ,
            }
        }
    }

    console.log('requiredMinLen', requiredMinLen);
    console.log('removeTarget', removeTarget);

    let solutionLength = 99999999 ;
    for (let startIdx = 0; startIdx < gene.length ; startIdx++) {
        if(gene.length - startIdx < requiredMinLen) break

        let lastFoundIdxObj = {
            A : -1,
            G : -1,
            C : -1,
            T : -1,
        }

        // is gene exist ?
        let isFound = true ;
        let removeTargetModifiable =  JSON.parse(JSON.stringify(removeTarget) )
        let geneModifiable = JSON.parse(JSON.stringify( gene.split('').splice(startIdx) ))
        for(let [geneName, v] of Object.entries(removeTargetModifiable)) {

            if(geneModifiable.indexOf(geneName) === -1) {
                isFound = false
                break
            }

            let foundRemain = Math.abs(v.remainNum) ;
            // const isSuccess = false
            for(let _ of Array(foundRemain)) {
                const foundIndex = geneModifiable.indexOf(geneName)
                if(foundIndex >= 0) {
                    foundRemain--
                    geneModifiable[foundIndex] = null
                } else {
                    // failed
                    isFound = false
                    break ;
                }

                if(foundRemain === 0) {
                    removeTargetModifiable[geneName].isSuccess = true
                    lastFoundIdxObj[geneName] = startIdx +  foundIndex
                    break ;
                }
            }
            // fail
            if(foundRemain !== 0) {
                isFound = false
                break
            } ;
        }

        // for check, is found?
        if(isFound){

            let largestIdx = -1 ;
            for(let [geneName, v] of Object.entries(removeTargetModifiable)) {
                if(! v.isSuccess){
                    isFound = false ;
                } else {
                    if( lastFoundIdxObj[geneName]  > largestIdx){
                        largestIdx = lastFoundIdxObj[geneName]
                    }
                }
            }
            // console.log(lastFoundIdxObj);
            console.log('isFound', isFound, 'startIdx', startIdx , 'realLargestIdx', largestIdx);
            const finalLength = largestIdx - startIdx + 1
            if(finalLength < solutionLength ) {
                solutionLength = finalLength
            }
        }
    }

    console.log('solutionLength', solutionLength);
    return solutionLength
}










steadyGene('TGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGCTGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGCTGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGCTGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGCTGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGCTGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGC')
