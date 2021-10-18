function flippingMatrix(matrix) {

    let final = 0 ;
    let finalList = []

    const dimension = matrix.length
    const lastIdx = matrix.length - 1
    const targetDimension = ((dimension / 2) | 0)

    for (let a = 0; a < targetDimension ; a++) {
        for (let z = 0; z < targetDimension ; z++) {

            let numArr = []

            numArr.push(matrix[a][z])
            numArr.push(matrix[lastIdx - a][z])
            numArr.push(matrix[a][lastIdx - z])
            numArr.sort((a,b)=> b-a)
            console.log('numArr', numArr);

            const biggest = numArr[0]

            final +=biggest
            finalList.push(biggest)
        }
    }
    console.log('final', final, 'finalList', finalList);
    return final
}


flippingMatrix([
    [112, 42, 83, 119],
[56, 125 ,56, 49],
[15, 78 ,101 ,43],
[62, 98, 114 ,108]

])