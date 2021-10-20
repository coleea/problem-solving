const 사전 = []
function solution(word) {

    사전만들기('' ,0);
    // console.log('사전', 사전);
    // 사전.sort()
    const idx = 사전.indexOf(word)
    console.log(idx );
    // var answer = 0;
    return idx ;
}

function 사전만들기(curr ,nth) {
    // console.log();
    // if()
    사전.push(curr)
    if(nth >= 5){
        return
    }
    // const 알파벳목록 = ['A','E', 'I', 'O', 'U']
    사전만들기(curr + 'A', nth+1)
    사전만들기(curr + 'E', nth+1)
    사전만들기(curr + 'I', nth+1)
    사전만들기(curr + 'O', nth+1)
    사전만들기(curr + 'U', nth+1)
}

solution("AAAE")