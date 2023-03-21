//error.error.error();
// 발생한 에러를 try catch로 묶는 것을 error 처리 라고 한다.
// 에러가 났을 때 프로그램이 *죽지 않고* 아래 명령을 실행하여 에러 기록을 남기도록 명령(근본적 처리x)
try{
    error.error.error();
} catch (e) {
    console.log(e.name);      //e.name : 레퍼런스
    console.log(e.message);     // 출력 메세지
}

console.log('This is end.');      //죽지않고 메세지 출력


//이후 예외관련 자세한 내용은 다른 언어 배울 때 다룰 예정이므로 pass