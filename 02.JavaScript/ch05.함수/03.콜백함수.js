//call back 함수
function callFiveTimes(callback) {
    for (let i=0; i<5; i++);
        callback();
}
// 아래 형태가 더 빈번하게 쓰임
//익명함수 선언
const cb = function() {
    console.log('함수가 호출되었음');
}

callFiveTimes(cb);

callFiveTimes(function() {
    console.log('익명의 함수가 호출되었음');
});