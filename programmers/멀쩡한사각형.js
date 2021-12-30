function solution(width, height) {
    let row, col
    let totalBox = width * height

    if(width <= height) {
        [row, col] = [height, width]
    } else {
        [row, col] = [width, height]
    }

    let hitPerCol = Math.floor (row / col)
    if(col % row !== 0) {
        hitPerCol++
    }

    let 안겹침 =  row % hitPerCol
    let 총겹침수 = (hitPerCol * col) - 안겹침
    let 답 = totalBox - 총겹침수

    console.log('답', 답, '열당겹침수', hitPerCol, 'row', row, 'col', col);
    return 답
    // var answer = 1;
    // return answer;
}

// solution(8, 12)
solution(8, 12)