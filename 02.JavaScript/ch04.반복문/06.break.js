//짝수를 찾으면 탈출(numbers 배열에서)

let number = [3, 57, 25, 48, 83, 79];
let i = 0;  // 0~6까지
while(true) {  //  무조건 트루값이 나왔을 때!
    if (i ==numbers.length || numbers[i] % 2 == 0)     //i가 
        break;
        console.log(numbers[i]);
        i++;
}

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0)
    break;
    console.log(numbers[i]);
}

for (let i = 0; i < 5; i++) {
    for (let k = 0; k <5; k++){
        if (k == 2)
        break;      // 탈출위치: 중괄호{} 1개 바깥
    }
}