//선언적 함수 (리턴!!)

function add(a,b) {     // a, b : 인수(= parameter, argument)
    return a + b;
}
console.log(add(3, 4));
console.log(add(5, 8));

//화살표 함수 = 람다함수   
const arrowSum = (a, b) => a + b;
console.log(arrowSum(3, 4));
console.log(arrowSum(5, 8));


//익명함수(js한정.. 잘 안 쓰임) - (위 함수와 동일한 결과 나옴)
const anonymousSum = function (a, b) {
    return a + b;
}
console.log(anonymousSum(3, 4));
console.log(anonymousSum(5, 8));
