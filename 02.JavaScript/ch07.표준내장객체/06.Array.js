//Array
// 배열 생성 2가지 방법 
let fruits = ['apple', 'banana', 'cherr'];
let cars = new Array('Audi', 'Benz', 'BMW', 'Volvo');
console.log(cars);

//배열 속성
console.log(fruits.length, cars.length);

//**********Array의 메소드 들************

//1. concat- 비파괴적
                //아래의 방식으로는 변환 불가)
                /* fruits.concat('orange');
                    console.log(fruits);  */
let newfruits = fruits.concat('orange', 'mango');
console.log(fruits);
console.log(newfruits);

//2. join- 비파괴적
console.log(`내가 갖고 싶은 차는 ${cars}입니다.`);    //cars Array 소환
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')}입니다.`); // join 안의 값(띄어쓰기 등) 추가하여 소환

//3. pop()*과 push()*- 파괴적
console.log(cars.pop());       //맨 끝에 있는 volvo 제거
console.log(cars);

cars.push('Hyundai');       //맨 끝에 있는 volvo 제거
console.log(cars);

// 5. reverse()* - 파괴적
cars.reverse();             //배열 역으로 뒤집음
console.log(cars);

//6. slice() - 비파괴  : 시작 인덱스는 포함, 마지막 인덱스는 불포함(substring과 같은 맥락)
let germanyCars = cars.slice(1);
console.log(germanyCars);
console.log(cars.slice(1,3));

//7. sort()* - 문자 오름차순
cars.sort();
console.log(cars);


/* ---- (참고) sorting 숫자 정렬 (참고) ----  반복문의 반복/ min max값 구하기
    오름차순            <-->     내림차순
    ascending order             descending order
        (a-b)          <-->     (b-a)               */
let numbers = [34, 56, 8, 29, 943, 46, 75];
numbers.sort();
console.log(numbers);

numbers.sort(function(a, b){
    return a-b; //내림차순은 b-a 로만 바꿔주면 됨
});
console.log(numbers);

/* ---- (참고) sorting 객체의 배열 정렬 (참고) ----*/  
// 객체의 배열
let fruitArray = [
    {name: 'apple', price: 1000},
    {name: 'orange', price: 2000},
    {name: 'cerry', price: 3000}
];
//이름의 오름차순
fruitArray.sort(function(a, b) {
    return a.name - b.name;
    if (a.name < b.nae) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(fruitArray);

//가격의 내림차순
fruitArray.sort(function(a, b){
    return b.price - a.price;
});
console.log(fruitArray);


//8. splice()*
//  [ 'apple', 'banana', 'cherr', 'orange', 'mango' ]
let someFruits = fruits.splice(1, 3);
console.log(fruits);            // [ 'apple' ]
console.log(someFruits);        // [ 'banana', 'cherr' ]


// 퀴즈 : isPalindrome()을 Array method를 이용하여 만들기
function isPalindrom(str){
    let reverseStr = str.split('').reverse().join('');  //-> array로 만듦 -> 뒤집기 -> 다시 합침
    return str == reverseStr; 
}
console.log(isPalindrom('hello')); //true
console.log(isPalindrom('ollehhello')); //false
