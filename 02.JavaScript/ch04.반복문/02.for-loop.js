//1~100까지 합 구하기
// ****loop에 들어가기 전에 반드시 어떤 변수를 초기화 해야함 - >어떤 것을 구할지 먼저 생각하고 let으로 선언하기***
let sum = 0;
for (let i = 1; i <=1000; i++)
    sum += i;
console.log(`1~1000 정수의 합 = ${sum}`);

// 1~10까지 곱 구하기
let prod = 1;         //곱세이므로 초기값이 0면 안됨
for (let i = 1; i <= 10; i++)
    prod *=i;
console.log(`1~10 정수의 곱 = ${prod}`);

//배열의 데이터를 하나의 문자열로 만들 때
let fruits = ['사과', '배', '귤', '딸기'];
let fruitStr = '';         //초기값이 empty string
for (let fruit of fruits)
    fruitStr += fruit;
console.log(fruitStr);

