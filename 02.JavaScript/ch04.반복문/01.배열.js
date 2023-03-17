let arr = [ 52, true, '감', 'banana', 250];
console.log(arr);
console.log(typeof arr);
console.log(arr.length);
console.log(arr[0], arr[2], arr[arr.length - 1]);

let i = 0;           //index 의미로 i를 주로 사용함       //여기서 i는 global(전역)변수
while (i < arr.length) {
    console.log(`index=${i}, value=${arr[i]}`);
    i++;               //while 조건을 변화시키는 값이 무조건 나와야 함
}

for (let i=0; i < arr.length; i++) {                //여기서 i는 local변수(위의 i와 무관)
    console.log(`index=${i}, value=${arr[i]}`);
}

//Enhanced for-loop
console.log('Enhanced for-loop');    //해당하는 것만 골라줌
for (let item of arr)
    console.log(item);