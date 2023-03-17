//1~10 홀수의 합   **극단적인 예시이니 참고만 할 것.
let sum = 0;
for (let i = 1; i <=10; i++) {
    if (i % 2 == 0)
    continue;
    sum += i;
    console.log(`index=${i}, sum=${Sum}`);
}

//
let numbers = [3, 57, 25, 48, 83, 79];
let oddSum = 0;
for (let number of numbers) {
    /* if (number % 2 == 0)
    continue;
    oddSum += number; */
    if (number % 2 == 1)
    oddSum += number;
}
console.log(oddSum);