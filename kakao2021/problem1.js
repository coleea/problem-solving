const 알파벳배열 = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('')
const 알파벳객체 = {
    'A':'a',
    'B':'b',
    'C':'c',
    'D':'d',
    'E':'e',
    'F':'f',
    'G':'g',
    'H':'h',
    'I':'i',
    'J':'j',
    'K':'k',
    'L':'l',
    'M':'m',
    'N':'n',
    'O':'o',
    'P':'p',
    'Q':'q',
    'R':'r',
    'S':'s',
    'T':'t',
    'U':'u',
    'V':'v',
    'W':'w',
    'X':'x',
    'Y':'y',
    'Z':'z',
}

function solution(아이디) {
    const 아이디배열 = 아이디.split('')
    console.log('아이디', 아이디);
    const 아이디1 = 단계1(아이디배열)
    console.log(아이디1);

    const 아이디2 = 아이디1.replace(/[^\.a-z0-9\-_]/g, '')
    console.log('아이디2', 아이디2);
    let 아이디3 = 아이디2.replace(/[\.]{2,}/g, '.')
    console.log('아이디3', 아이디3);

    if(아이디3[0] === '.'){
        아이디3 = 아이디3.substring(1)
    }

    if(아이디3[아이디3.length - 1] === '.'){
        아이디3 = 아이디3.substring(0, 아이디3.length - 1)
    }
    let 아이디4 = 아이디3
    console.log('아이디4', 아이디4);
    if(아이디4.length === 0 ){
        아이디4 = 'a'
    }
    let 아이디5 = 아이디4
    if(아이디5.length >= 16){
        아이디5 = 아이디5.substring(0,15)
        if(아이디5[아이디5.length - 1] === '.' ){
            아이디5 = 아이디5.substring(0,아이디5.length -1)
        }
    }
    let 아이디6 = 아이디5
    console.log('아이디6', 아이디6);
    if(아이디6.length <= 2){
        const lastChar = 아이디6[아이디6.length - 1]
        const charNeeded = 3 - 아이디6.length
        아이디6 +=  lastChar.repeat(charNeeded)

    }
    const 아이디7 = 아이디6
    console.log('아이디7', 아이디7);


    return 아이디7
}

function 단계1(아이디) {
    for (let i = 0; i < 아이디.length; i++) {
        const 문자 = 아이디[i];
        if(알파벳배열.includes(문자)){
            console.log(알파벳객체[문자]);
            아이디[i] = 알파벳객체[문자]
        }
    }
    return 아이디.join('')
}
/*

 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

*/

asdf('...!@BaT#*..y.abcdefghijklm')
asdf('a')
asdf('ab')
asdf('')
asdf('-_.~!@#$%^&*()=+[{]}:?,<>/')