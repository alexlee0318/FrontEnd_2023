//완전수(Perfect Number) 구하기

/*-----------세팅 순서 ------------
    1) sumOfDivisors함수를 만든다 (자기 자신을 제외한 약수의 합 구하는)
    2) 2~10000사이의 완전수 구하는 식을 만든다
        -> 여기에 sumOfDivisors를 불러와서 사용한다.
    */
function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
        sum += i;
}
    return sum;
}

//2) 2~10000사이의 완전수 구하기
const num = 10000;
for (let i = 2; i <= num; i++) {
    if (i == sumOfDivisors(i))
        console.log(i);
}