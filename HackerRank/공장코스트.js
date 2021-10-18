function maxCost(cost, labels, dailyCount) {
    // Write your code here
    let currentCount = 0
    let currentCost = 0
    let 최소코스트 = 99999999
    
    for(label of labels){
        currentCost++;
        if(label === 'legal') {
            currentCount++            ;
            if(currentCount === dailyCount) {                
                if(최소코스트 < currentCost) {
                  최소코스트 = currentCost ; 
                } 
                currentCount = 0;
                currentCost = 0;
            }
        }

    }
    return  최소코스트 

}
