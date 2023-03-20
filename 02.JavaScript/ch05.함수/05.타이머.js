//타이머 함수


/* setTimeout(function() {
    console.log('3초 경과')
}, 3000);

//-----같은 결과, 다른 방법--- 

const threeSeconds = function() {
    console.log('3초 경과');
}
setTimeout(threeSeconds, 3000); */

const si = setInterval(function() {
    console.log(new Date);
}, 1000);

setTimeout(function() {
    clearInterval(si);
}, 5100);                  // 5000으로 하면 4번밖에 안찍힘 - js는 비동기함수라 동시에 작업 진행
                            // ->console log 작업이 아래 clearInterval보다 더 느리게됨. 