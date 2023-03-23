function ans1() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    if (num1 < 0 || num1 > 20 || num2 < 10 || num2 > 30 || num2 - num1 < 4){
        return;
    }
    let powerArr = [];
    for (let i = num1; i <=num2; i++)
        powerArr.push(2** i);
    let resultSTR = '';
    /*
    for (let power of powerArr)   //inhanced for loop 으로 후처리 중(프론트엔드)
        resultStr += power + '<br />';
        */
       

        //4개씩 끊어주고 싶을 때 약간의 트릭
        // for (let i =0; i <powerArr.lenghth; i++) {
        //         if ((i +1) % 4 == 0)
        //             resultStr += powerArr[i] + '<br/>';
        //         else
        //             elseresultStr += powerArr[i] + ', '
        // }

        //result 1
        document.getElementById('result1').innerHTML = resultStr;
}




// 22222222222222222222222222222222222222222222222222
function ans2() {
    let text = document.getElementById('sentence').value;
    let search = document.getElementById('search').value.trim;
    let noPunct =                                                   //인풋 받은 punctuation 없앰
    text.replace(/[',.-]/g, '').replace(/[-\n]/g, ' ').toLowerCase();  // replace(/[-\n]/g, ' ') -> 줄바꿈은 띄어쓰기(' ')로 바꾸겠다 

    // consonle.log(noPunct);            ----> 값 잘못나오면 이렇게 중간에 넣어서 중간확인 할 수 있음
    let words = noPunct.split(' ');
    let count = 0;
    for (let word of words) {
      if (word == "search")
            count++;
    }                                               // **심화: the 외 원하는 문자도 뽑아내는 프로그램은?
    document.getElementById("result2").innerHTML = `search의 개수는 총 ${count}개 입니다.`;
  }

// 원하는 단어를 찾는 프로그램으로 만들려면
// let search = ocument.getElementById('search').value.trim; 
//                       --->> trim을 꼭 추가해야함- search할 단어의 양쪽에 있는 공백을 없애줌
// the는 모두 search로 바꾸기


// 333333333333333333333333333333333
function ans3() {
    let priceStr = document.getElementById('price').value;  //prices는 배열, element는 string
    let prices = priceStr.split(';');                       // -> 숫자로 바꿔줌
    //prices의 각 요소를 정수로 변환
    let newPrices = [];
    for (let price of prices)
        newPrices.push(parseInt(price));

    // 쉬운 식1) let newPrices = price.map(function(x) {return parseInt(x)});    //각각의 element에 prices함수를 보내라는 명령
    //쉬운 식 2) let newPrices = price.map(x => parseInt(x));    //위와 같은 식을 람다함수로
    newPrices.sort(function(a, b) {
        return b - a; //내림차순 정렬
    });


    document.getElementById("result3").innerHTML = newPrices;


    arr = num.split(";");
    let numArray = [];
    for (let index of arr) {
      numArray.push(Number(index));
    }
    numArray.sort(function (a, b) {
      return b - a;
    });
    console.log(numArray);
    document.getElementById("result").innerHTML = numArray;
  }


  //4444-----------------------444444444444-----------------마저 다운받기----------------
  window.onload = function() {
    setInterval(function() {
        const now = new Date();
        const week = '일월화수목금토'.split('');
        let dateStr = myDatetime(now).substring(2, 10);


        let timeStr = myDatetime(now).substring()
        
        document.getElementById('date').innerHTML = dateStr;

        document.getElementById('h1').src = ``;
        document.getElementById('h2').src = ``;
        document.getElementById('h1').src = timeStr;
        document.getElementById('h2').src = timeStr;
        document.getElementById('m1').src = timeStr;
        document.getElementById('m2').src = timeStr;
        document.getElementById('s1').src = timeStr;
        document.getElementById('s2').src = timeStr;
    }), 1000;
}