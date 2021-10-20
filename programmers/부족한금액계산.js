function solution(price, money, count) {
    const 원래가격 = price
    let 부족한돈 = 0
    for (const _ of Array(count)) {
        money -= price
        price += 원래가격
    }

    console.log('money', money);
    if(money >=0 ) return 0
    else return Math.abs(money)
}

solution(3, 20, 4)