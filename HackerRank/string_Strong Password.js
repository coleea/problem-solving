/*
Its length is at least 6
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+

*/

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let need = 0 ;
    const onlyDigit = password.replace(/[^0-9]/g, '')
    const onlyLower = password.replace(/[^a-z]/g, '')
    const onlyUpper = password.replace(/[^A-Z]/g, '')
    const onlySpecial = password.replace(/[^!@#$%^&*()\-+]/g, '')
    if(!onlyDigit){
        need++
    }
    if(!onlyLower) need++
    if(!onlyUpper) need++
    if(!onlySpecial) need++
    console.log('need', need);
    if(password.length + need < 6) {
        console.log('6 - password.length - need', 6 - password.length  -  need);
        need += 6 - password.length - need
    }
    console.log(onlyDigit);
    console.log(onlyLower);
    console.log(onlyUpper);
    console.log(onlySpecial);
    return need
}
minimumNumber(7, 'AUzs-nV') // 1이 나와야 함