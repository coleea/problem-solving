function permutationGame(arr) {
    // Write your code here
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(i === 0 ) {
            //  is bigger exist in search (i+1 ~ end) ?
           const isBiggerExist = arr.some((value, searchIdx, arr) => {
                if(searchIdx > i) {
                    if(num < value) return true ;
                    else return false
                } else {return false }
            } )
            console.log('[i === 0] isBiggerExist', isBiggerExist);
            if(!isBiggerExist) {
                // remove
                arr[i] = null
                counter++
                continue
            }
        } else if(i === arr.length - 1){
            //  is lower exist in 0 ~ i-1?
            const isLowerExist = arr.some((searchValue, searchIdx, arr) => {
                if(searchIdx > i) {
                    if(searchValue < num ) return true ;
                    else return false
                } else {return false }
            } )
            console.log('[i === last] isLowerExist', isLowerExist);

            if(!isLowerExist){
                arr[i] = null
                counter++
                continue
            }

        } else {
            const isBiggerExist = arr.some((value, searchIdx, arr) => {
                if(searchIdx > i) {
                    if(num < value) return true ;
                    else return false
                } else {return false }
            } )
            console.log('isBiggerExist', isBiggerExist);
            if(!isBiggerExist) {
                // remove
                arr[i] = null
                counter++
                continue
            }

            const isLowerExist = arr.some((searchValue, searchIdx, arr) => {
                if(searchIdx > i) {
                    if(searchValue < num ) return true ;
                    else return false
                } else {return false }
            } )
            console.log('isLowerExist', isLowerExist);
            if(!isLowerExist){
                arr[i] = null
                counter++
                continue
            }

            //  is lower exist in 0 ~ i-1?
            //  is bigger exist in search (i+1 ~ end) ?

        }
    }
    console.log('arr',arr);
}

permutationGame([5, 3, 2, 1, 4])